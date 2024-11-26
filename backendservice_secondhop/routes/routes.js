// load up our shiny new route for users
const userRoutes = require('./users');


const appRouter = (app, fs) => {

    // we've added in a default route here that handles empty routes
    // at the base API url
    app.get('/', (req, res) => {
        console.log("second hop is working");
        res.send('<h1>Second hop is working</h1>');
    });


    // run our user route module here to complete the wire up
    userRoutes(app, fs);

};

// this line is unchanged
module.exports = appRouter;
