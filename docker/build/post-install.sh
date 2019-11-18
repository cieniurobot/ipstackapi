#!/bin/bash

set -e
cat > ${APP_ROOT}/config/default-0.json << EOF
{}
EOF

cat > ${APP_ROOT}/config/docker.json << EOF
{
  "api":{
    "port": ${API_PORT},
    "secret": "${API_SECRET}"
  },
  "db": {
    "username": "${DB_USER}",
    "password": "${DB_PASS}",
    "database": "${DB_NAME}",
    "host": "${DB_HOST}",
    "port": "${DB_PORT}",
    "dialect": "mysql"
  },
  "logger": {
    "level": "${LOG_LEVEL}"
  }
}
EOF

until nc -z -v -w30 $DB_HOST 3306
do
  echo "Waiting for database connection..."
  # wait for 5 seconds before check again
  sleep 5
done

echo "Runing migrations"
npm run db:migrate
echo "Migrations finished!"
