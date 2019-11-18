#!/bin/bash
set -e

function is_defined() {
    if [[ ! -v $1 ]]; then
        echo "Missing $1!"
        exit 1
    fi
}

is_defined NODE_ENV
is_defined API_PORT
is_defined API_SECRET
is_defined DB_HOST
is_defined DB_PORT
is_defined DB_USER
is_defined DB_PASS
is_defined DB_NAME
is_defined LOG_LEVEL
