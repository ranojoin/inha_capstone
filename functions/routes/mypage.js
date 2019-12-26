const functions = require('firebase-functions');
const express = require("express");
const router = express.Router();
const firebaseDatabase = require('../javascript/fbdatabase.js');

    const rootRef = firebaseDatabase.ref();
    rootRef.on("value", function(snapshot){

        console.log("it is");
        console.log(snapshot.val());
    });


router.get('/', function(req, res, next){

    // rootRef.set("it's me?");
    res.render('mypage.ejs', {name:"member"});



})

/*function test(){
    console.log("i'm test");
        const rootRef = firebaseDatabase.ref();
        rootRef.set("it's me?");
        rootRef.on("value", function(snapshot){
            console.log("it is");
           console.log(snapshot.val());
        });

}*/
module.exports = router;