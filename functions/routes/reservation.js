const functions = require('firebase-functions');
var express = require("express");
var router = express.Router();
var socket = require('socket.io');
var firebaseDatabase = require('../javascript/fbdatabase.js');
var fs = require("fs");
var api1 = require("../index.js")

const io = socket(api1);
router.get('/', function(req, res, next){

    //var index = req.body.index;

    res.render('reservation.ejs', {index : "index"});


})


module.exports = router;