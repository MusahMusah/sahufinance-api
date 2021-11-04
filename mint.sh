#!/bin/bash

export WEB3_RPC_URL=https://rinkeby.infura.io/v3/552872ab900243aaa3774eeb8cc912c4
export WEB3_PRIVATE_KEY=$4
export WEB3_ADDRESS=$2

web3 contract call --wait --abi $3 --gas-limit 2000000 --function mint $1