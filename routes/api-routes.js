// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var fs = require("fs");
var path = require( 'path' );
const $ = require('cheerio');
var orm = require("../models/orm.js");
// Routes
// =============================================================
module.exports = function(app) {

  app.get("/merch", function(req, res) {

    res.sendFile('merch.html', { root: "public" });
    
  });

  app.get("/read", function(req, res) {

    res.sendFile('index.html', { root: "public" });
    
  });

  app.get("/jump/:dir", function(req, res) {
    let data = orm.grabIndex(req.params.dir);
    res.send(data);
    
  });

 

};
