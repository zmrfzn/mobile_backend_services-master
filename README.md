# Mobile Backend 
It includes two small node apps to test the in-app distributed traces. The source code will show how the New Relic APM. It is assumed the user has a good working knowledge of the node environement.

# Structure
- backendservice_firsthop- This is the entry point backend service
- backendservice_secondhop- This service is calles by the firsthop service


# Install Node if not installed
```
Go To https://docs.npmjs.com/downloading-and-installing-node-js-and-npm and follow directions
```

# Install
Please run the following comand in each folder to re-add the node modules

from the root of the project

Test with distributed tracing do the following:
```sh
cd backendservice_firsthop
npm install
edit ../Documents/backed_end_services/backendservice_firsthop/routes/webrequest.js 
Update the IP address to your MAC's IP where the comment is located
```

```sh
cd backendservice_secondhop
npm install
```

## Config for Distributed Tracing environment. 
```sh
cd backendservice_firsthop
cp newrelic.js.template newrelic.js
edit the newrelic.js file and add an 'ingest license' key found in the New Relic UI
```

```sh
cd backendservice_secondhop
cp newrelic.js.template newrelic.js
edit the file and add the same 'ingest license' key found in the New Relic UI in the previous step.
```
# Run Services

## Manual Start
To start services manually:

```sh
cd backendservice_firsthop
node server.js
```

```sh 
cd backendservice_secondhop
node server.js
```

## PM2 Ecosystem Management

### Install PM2
```sh
npm install -g pm2
```


### Start Services with PM2
```sh
# Start firsthop in development mode
cd backendservice_firsthop
pm2 start ecosystem.config.js --env dev

# Start secondhop in development mode
cd backendservice_secondhop
pm2 start ecosystem.config.js --env dev

# View running processes
pm2 list

# Stop all processes
pm2 stop all

# Restart all processes
pm2 restart all
```

## Logging
Logs are stored in the `logs/` directory:
- `app.log`: Standard output logs
- `error.log`: Error logs
