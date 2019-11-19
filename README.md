# Ipstackapi

### Application description
Aplication store geolocation data in the database, based on IP address or URL.


### Requirements
- Node.js 10.15
- Docker
- docker-compose

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

### API Endpoints
You can import postman config from ./docs/postman/

Post login example:
```
POST /auth/login HTTP/1.1
Host: vps696120.ovh.net:8081
Content-Type: application/x-www-form-urlencoded

username=test&password=test
```

Get by id example:
```
GET /api/rest/v1/geolocation/1 HTTP/1.1
Host: vps696120.ovh.net:8081
Content-Type: application/x-www-form-urlencoded
Authorization: Bearer <JWT-token>
```

Post example:
```
POST /api/rest/v1/geolocation/ HTTP/1.1
Host: vps696120.ovh.net:8081
Authorization: Bearer <JWT-token>
Content-Type: application/json

{
  "ip": "127.0.0.1",
  "type": "ipv4",
  "continent_code": "EU",
  "continent_name": "Europe",
  "country_code": "GB",
  "country_name": "United Kingdom",
  "region_code": "ENG",
  "region_name": "England",
  "city": "Islington",
  "zip": "EC3R",
  "latitude": 51.53329849243164,
  "longitude": -0.10000000149011612,
  "location": {
  	"geoname_id": 2646003,
    "capital": "London",
    "languages_ids": [1,2],
    "country_flag": "http:\/\/assets.ipstack.com\/flags\/gb.svg",
    "country_flag_emoji": "🇬🇧",
    "country_flag_emoji_unicode": "U+1F1EC U+1F1E7",
    "calling_code": "44",
    "is_eu": true
  }
}
```

GET geolocation by ip or host:
```
GET /api/rest/v1/geolocation/by-ip/127.0.0.1 HTTP/1.1
Host: vps696120.ovh.net:8081
Authorization: Bearer <JWT-token>

```

PUT example:
```
PUT /api/rest/v1/geolocation/1 HTTP/1.1
Host: localhost:8081
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTU3MzkxODQ0NX0.WDX-CJ4y33kGXvKxhMaFWIprAM7GJUc0ye2TK42z514
Cache-Control: no-cache
Postman-Token: f7b3c767-0d9c-2a90-a17c-4880f25b743c

{
  "ip": "192.168.1.1",
  "type": "ipv44",
  "continent_code": "EU",
  "continent_name": "Europe",
  "country_code": "DE",
  "country_name": "Deutsh",
  "region_code": "ENG",
  "region_name": "England",
  "city": "Islington",
  "zip": "EC3R",
  "latitude": 51.53329849243164,
  "longitude": -0.10000000149011612,
  "location": {
  	"geoname_id": 2646003,
    "capital": "Berlin",
    "languages_ids": [2,3],
    "country_flag": "http:\/\/assets.ipstack.com\/flags\/gb.svg",
    "country_flag_emoji": "\ud83c\uddec\ud83c\udde7",
    "country_flag_emoji_unicode": "U+1F1EC U+1F1E7",
    "calling_code": "44",
    "is_eu": true
  }
}
```
DELETE example:
```
DELETE /api/rest/v1/geolocation/1 HTTP/1.1
Host: localhost:3000
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTU3MzkxODQ0NX0.WDX-CJ4y33kGXvKxhMaFWIprAM7GJUc0ye2TK42z514
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW


```
