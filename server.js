'use strict';

var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/app'));

var server = app.listen(2757, function () {
  console.log('Server listening on 2757');
});