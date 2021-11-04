#!/bin/bash

export WEB3_RPC_URL=https://rinkeby.infura.io/v3/552872ab900243aaa3774eeb8cc912c4
export WEB3_PRIVATE_KEY=$1
web3 transfer $3 to $2