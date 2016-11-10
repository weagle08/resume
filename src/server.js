/**
 * Created by weagl on 12/20/2015.
 */
var express = require('express');
var path = require('path');
const compression = require('compression');

var app = express();
app.set('port', 80);

//add necessary headers
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.header('Access-Control-Allow-Credentials', false);
    res.header('Access-Control-Max-Age', 86400);
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Content-*', '*');
    next();
});

//fulfil pre-flight promise request
app.options('*', (req, res) => {
    res.status(200).send('ok');
});

app.use(express.static(path.join(__dirname, 'www')));

app.use(compression());

//express bad request handling
app.use(function (req, res) {
    res.status(404).send({error: 'why are you snooping?'});
});

//express error handling
app.use(function (err, req, res, next) {
    //log.error(err);
    res.status(500).send({error: 'something went terribly wrong'});
});

app.listen(app.get('port'), function () {
    console.log('server listening over insecure http on port ' + app.get('port'));
});