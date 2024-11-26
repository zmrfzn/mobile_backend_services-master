const winston = require('winston');
const logger = winston.createLogger({
    transports: [
        new winston.transports.Console()
    ]
});
const userRoutes = (app, fs) => {

    // variables
    const dataPath = './data/users.json';

    // READ
    app.get('/users', (req, res) => {
        logger.info('Second hop from first hop');
        console.log(req.headers);
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
                logger.error(err.message);
            }
            res.header("Access-Control-Allow-Origin", "*");
            logger.info(data);
            res.send(JSON.parse(data));
        });
    });
};

module.exports = userRoutes;
