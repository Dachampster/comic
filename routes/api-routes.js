// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var fs = require("fs");
var path = require( 'path' );
const $ = require('cheerio');
const orm = require("../models/orm.js");
// Routes
// =============================================================
module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile('index.html', { root: "public" });
  });

  app.get('/comic/:cur/:dir',function(req,res){
    let direction = req.params.dir;
    let current = req.params.cur;
    let comic = orm.comic;
    let update = orm.find(comic, current, direction);
    res.send(update);
  }); 

  app.get('/comic/chapters',function(req,res){
    let comic = orm.comic;
    let chapters = orm.grabChapters(comic).toString();
    res.send(chapters);
  }); 

  app.get('/comic/:jump',function(req,res){
    let comic = orm.comic;
    let num = parseInt(req.params.jump);
    console.log(num); //does nothing
    let newPage = orm.grabFirst(comic, num);
    res.send(newPage);
  }); 


 

};
