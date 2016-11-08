/**
 * Created by weagl on 12/20/2015.
 */
var express = require('express');
var path = require('path');
const compression = require('compression');

var app = express();
app.set('port', 80);

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