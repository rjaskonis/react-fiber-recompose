const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const favicon = require('serve-favicon');
const app = express();
const http = require("http").Server(app);
const env = app.get('env') ; // same as process.env.NODE_ENV

if(env === 'development') { require(path.resolve(__dirname, 'webpack'))(app); }

app.set('port', 4000);
app.use(compression({ threshold : 0, filter: () => true }));
app.use(bodyParser.urlencoded({limit: '100mb', extended: true }));
app.use(bodyParser.json({limit: '100mb'}));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.onlineUsers = [];

require(path.join(__dirname, 'middleware'))(app);

http.listen(app.get('port'), () => {
    console.log("** Server listening on localhost:", app.get('port'), ' **');
});