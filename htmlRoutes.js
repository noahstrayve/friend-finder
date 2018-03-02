// Dependencies
var express = require('express');
var path = require("path");

// Exports the variable
module.exports = function(app) {
    // Sets the route for the home page
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, 'home.html'));
    });

    // Sets the route for the about page
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, 'survey.html'));
    });

    app.get('/results', function(req, res) {
        res.sendFile(path.join(__dirname, 'final.html'));
    });
}
