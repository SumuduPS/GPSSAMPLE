
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


# Output Samples

```
set environment variables (.env file in the root)

To run locally set db details in the .env file and npm run start

To run with Dockerfile: (set db details in the .env file)
1. docker build -t gpsservice .

2. docker-compose up

open http://localhost:3000/graphql

sample:

query{
  getUnitPosition{
    date_time 
    unit_id   
    latitude  
    longitude 
    speed     
    bearing   
    hdop      
    satellites
    created   
  }
}

mutation{
addUnitPosition(unitPositionInput:{
    date_time:"6/2/2021" 
    unit_id:20   
    latitude:-104.0392
    longitude: 50.9655
    speed: 0     
    bearing: 91.2
    hdop: 12     
    satellites:8  
})
}
```