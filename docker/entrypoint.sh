#!/bin/bash

set -e

# Setup environment
export APP_ROOT=/app

# Run pre installation scripts
echo 'Executing PRE-INSTALL script'
bash ${APP_ROOT}/docker/build/pre-install.sh
echo 'Executed PRE-INSTALL script'

# Run post installation scripts
echo 'Executing POST-INSTALL script'
bash ${APP_ROOT}/docker/build/post-install.sh
echo 'Executed POST-INSTALL script'

# Run application with pm2
npm run start:pm2
