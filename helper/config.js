/*
Project : Cryptotrades
FileName :  config.js
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the file which maintain globl variable for the application
*/
const config = {
    app: {
        port: 5000
    },
    db: {
        host: 'localhost',
        port: 27017,
        username: '',
        password: '',
        name: 'nftmarketplace',
        prefix: 'linkwell_'
    },
    mail: {
        type: "smtp",
        smtp: {
            // host: "mail.sahufinance.com",
            // secure: true,
            // port: 465,
            // username: 'no-reply@sahufinance.com',
            // password: '5PBL$ERafk+@'
            host: "smtp.mailtrap.io",
            port: 2525,
            // secure: true,
            auth: {
                user: "47a0f48f9ec8eb",
                pass: "d68e2638147fdd"
            }
        }
    },
    site_name: 'Cryptotrades',
    site_link: '#',
    site_email: '',
    secret_key: 'jfVRtwN7xBl7LjRucIUdPnrh1UVUhzhZ',
    public_key: '6gluXXunc77uukLJbSmlQ31ckSlLq8Qi',
    eth_http: "https://rinkeby.infura.io/v3/552872ab900243aaa3774eeb8cc912c4",
};


module.exports = config;