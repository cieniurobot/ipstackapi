# Ipstackapi

### Application description
Aplication store geolocation data in the database, based on IP address or URL.


### Installation

```bash
$ git clone https://github.com/cieniurobot/ipstackapi.git
$ cd istackapi
$ npm install
```
All credentials are in config/development.json
```bash
$ cp config/development.json.dist config/development.json
```

For database setup please set credentials in config/development.json and then run commands:
```bash
$ sequelize db:create
$ sequelize db:migrate
```

If you have established connection you can run app:
```bash
$ npm run start:local
```

For build and start in docker:
```bash
$ docker-compose up
```

### Testing

```bash
$ npm run test
```

### Build

```bash
$ npm run build

```
