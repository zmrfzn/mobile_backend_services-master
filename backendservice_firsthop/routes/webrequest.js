const http = require('http');
const newrelic = require('newrelic');
const winston = require('winston');
const newrelicFormatter = require('@newrelic/winston-enricher')(winston)

const SECOND_HOP_IP = process.env.SECOND_HOP_IP || 'localhost';

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.label({domain: 'savage'}),
    newrelicFormatter()
  ),
    transports: [
        new winston.transports.Console()
    ]
});

const options = {
  hostname: 'localhost',
  port: '3002',
  path: '/users',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  }
}

const webrequest = (app, fs) => {

    // variable

    // READ
    app.get('/webrequest', (req, res) => {
        console.log("hit first hop service");
        logger.info('First hop is executed');
        console.log(req.headers);

        //change this ip address to point to your Macs IP address. You made need to regularly update based on your Mac IP
        http.get(`${SECOND_HOP_IP}/users`, (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
          data += chunk;

        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
          logger.info(data);
          res.send(data);
          newrelic.addCustomAttributes('userID','gqx293795');

        });

      }).on("error", (err) => {
          console.log(err);
          logger.error(err.message);
      });




    });
};

module.exports = webrequest;
