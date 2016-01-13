/**
 * Created by jlillz on 12/18/15.
 */
'use strict'

/******************************** Begin: Initialize node modules *******************************/
var express = require('express');
var React = require('react');
var bodyParser = require('body-parser');
var fs = require('fs');
/********************************* End: Initialize node modules ********************************/


/******************************** Begin: Constants declarations ********************************/
const PORT = 9000;
const TEMPLATE = fs.readFileSync('./src/index.html', {encoding: 'utf8'});
const PLACEHOLDER = 'PlaceHolder'
/********************************* End: Constants declarations *********************************/


/******************************** Begin: Server configuration **********************************/
//Initialize express app
var app = express();

require('babel-register');
var AppContainer = require('./src/js/components/AppContainer');

app.get('/', function(req, res){
  var state = {
    radiumConfig: {
      userAgent: req.headers['user-agent']
    }
  };
  var reactElement = React.createElement(AppContainer, state);
  var reactComp = React.renderToString(reactElement);

  return res.send(TEMPLATE.replace(PLACEHOLDER, reactComp))
});

//Start server
app.listen(PORT, function(){
  console.log("Server listening on: http://localhost:%s", PORT);
});
/********************************** End: Server configuration **********************************/


/******************************** Begin: Private functions ********************************/
/******************************** End: Private functions ********************************/
