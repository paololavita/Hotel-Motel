// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require('path');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });

    app.get('/test', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/test.html'));
    });
    
    app.get('/restaurants', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/test2.html'));
    });
    
    app.get('/rooms', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/test3.html'));
    });

    // If no matching route is found default to home
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/404.html'));
    });
};