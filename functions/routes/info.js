const functions = require('firebase-functions');
var express = require("express");
var router = express.Router();
var firebaseDatabase = require('../javascript/fbdatabase.js');
var util = require('util');



router.get('/', function(req, res, next){

    res.render('info.ejs', {index: "hiih"});

})


router.post('/', function(req, res, next){

    res.render('info.ejs', {index : req.body.mName});


})
router.post('/store', function(req, res, next){
    console.log("router kkk");
    //res.render('mypage.ejs', {index: "hihi"});
    res.send({result : req.body});


})

module.exports = router;