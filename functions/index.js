const functions = require('firebase-functions');
const express = require("express")
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const router = require('./routes/router');



app.use(cors({ origin: true }));
app.set('views', __dirname + '/views');
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_moudules'));
app.use('/', router);



const api1 = functions.https.onRequest(app)
module.exports = {
    api1
}



