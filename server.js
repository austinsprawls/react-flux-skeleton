/**
 * Created by jlillz on 12/18/15.
 */
'use strict'

/******************************** Begin: Initialize node modules ********************************/
var express = require('express');
var React = require('react');
var bodyParser = require('body-parser');
var browserify = require('browserify-middleware');
var babelify = require('babelify');
var fs = require('fs');
/********************************* End: Initialize node modules *********************************/


/******************************** Begin: Constants declarations ********************************/
const PORT = 9000;
browserify.settings('transform', ['babelify']);
//const BUNDLE = fs.readFileSync('./browser-bundle.js', {encoding: 'utf8'});
const TEMPLATE = fs.readFileSync('./src/index.html', {encoding: 'utf8'});
const PLACEHOLDER = 'PlaceHolder'
console.log('template: ', typeof TEMPLATE);
/********************************* End: Constants declarations *********************************/


/******************************** Begin: Server configuration ********************************/
//Initialize express app
var app = express();
//var LoginPage = require('./LoginPage/LoginPage.jsx')
//app.get('/LoginPage', browserify('./LoginPage/LoginPage.jsx'));
//Configure express to use body-parser middle ware to pares incoming json
//app.use(bodyParser.json());
//browserify.settings('transform', ['babelify']);
////Initialize routes
////Ex. app.get('/', getRoot);
////    app.post('/upload', postUpload);
////app.get('/componenet', (req, res) => {})
//var serverd_component = React.createFactory(require('./LoginPage'));
//function index_html(req, res) {
//    // You could use JSX here; doesn't matter.
//    console.log('processing index_html call');
//    var markup = React.renderToString(serverd_component());
//    console.log('component is now a string: ', markup);
//    return res.send(TEMPLATE.replace(PLACEHOLDER, markup));
//
//    //React.renderToString(Timer(), function(markup) {
//    //});
//    //res.status(200).json({});
//}
//
//app.get('/', index_html);
//app.get('/index.html', index_html);
//app.get('/browser-bundle.js', function(req, res) {
//    res.send(BUNDLE);
//});
//app.get('/', rootReq);
require('babel-register');
var appContainer = require('./src/js/components/AppContainer');
//console.log('LoginPage: ', LoginPage);
//var LoginComp = new LoginPage();
//console.log('LoginPage: ', new LoginPage.default);
//import LoginPage from './LoginPage/LoginPage';
//const loginComp = new LoginPage()
//  console.log('Component: ', loginComp);
app.get('/', function(req, res){
  var reactElement = React.createElement(appContainer);
  var reactComp = React.renderToString(reactElement);
  return res.send(TEMPLATE.replace(PLACEHOLDER, reactComp))
});

//console.log('Login Page: ', LoginPage);
//var LoginPage = browserify('./LoginPage/LoginPage.js');
//import LoginPage from './LoginPage'
//function rootReq(req, res){
//    var markup = React.renderToString( new LoginPage() )
//    res.status(200).send('Shits workzin');
//}
//
//function served_comnponent(req, res){
//
//}

//Start server
app.listen(PORT, function(){
  console.log("Server listening on: http://localhost:%s", PORT);
});
/******************************** Begin: App configuration ********************************/


/******************************** Begin: Private functions ********************************/
/******************************** End: Private functions ********************************/
