const functions = require('firebase-functions');
var express = require("express");
var router = express.Router();

var main = require('./main')
var reservation = require('./reservation');
var mypage = require('./mypage');
var managepage = require('./managepage');
var login = require('./login');
var signup = require('./signup');
var info = require('./info');
var test = require('./test');
var test2 = require('./test2');
var test3 = require('./test3');


router.use('/main',main);
router.use('/reservation', reservation);
router.use('/mypage', mypage);
router.use('/managepage', managepage);
router.use('/login', login);
router.use('/signup', signup);
router.use('/test', test);
router.use('/test2', test2);
router.use('/test3', test3);
router.use('/info', info);






module.exports = router;