cp.exec(command, function(err, stdout, stderr) {
    console.log('stderr ', stderr)
    console.log('stdout ', stdout)
        // handle err, stdout, stderr
    if (err) {
        console.log("error is ", err)
        res.json({
            status: false,
            message: err.toString().split('ERROR: ').pop().replace(/\n|\r/g, "")
        });
        return
    }
    var private_key = stdout.toString().split('Private key: ').pop().replace(/\n|\r/g, " ").split(' ')
    var public_key = stdout.toString().split('Public address: ').pop().replace(/\n|\r/g, " ").split(' ')
    console.log('private key', private_key)
    console.log('public key', public_key)
    user.private_key = private_key[0];
    user.public_key = public_key[0];
    user.save(function(err, user) {
        if (err) {
            res.json({
                status: false,
                message: "Request failed",
                errors: err
            });
            return;
        }
        let token = jwt.sign({ user_id: user._id, username: user.username, email: user.email, first_name: user.first_name, last_name: user.last_name, profile_image: user.profile_image ? user.profile_image : '', status: user.status, dob: user.dob, phone: user.phone, role: user.role },
            config.secret_key, {
                expiresIn: '24h' // expires in 24 hours
            }
        );
        if (user.email) {
            mailer.mail({
                username: user.first_name + ' ' + user.last_name,
                content: "Congratulation, you have created new account in " + config.site_name
            }, user.email, 'Registration Confirmation', config.site_email, function(error, result) {
                if (error) {
                    console.log("email not working");
                }
                res.json({
                    status: true,
                    token: token,
                    message: "Registration successful",
                });
            })
        } else {
            res.json({
                status: true,
                token: token,
                message: "Registration successful",
            });
        }
    });
});