const functions = require('firebase-functions');
const firebase = require('firebase')
//const firebaseDatabase; //파이어베이스 db 모듈 전역변수
const admin = require('firebase-admin');
//
const serviceAccount = require('../serviceAccount.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://inha-capston.firebaseio.com",
});
const config = {
    apiKey: "AIzaSyAf-biXT52z63qcKoxmUKceM5cFgj6Zc3M",
    authDomain: "inha-capston.firebaseapp.com",
    databaseURL: "https://inha-capston.firebaseio.com",
    projectId: "inha-capston",
    storageBucket: "inha-capston.appspot.com",
    messagingSenderId: "451103431466",
    appId: "1:451103431466:web:c8bff8edf31385ec2a9c53"
};
firebase.initializeApp(config);
//firebaseEmailAuth = firebase.auth();
const firebaseDatabase = firebase.database();

module.exports = firebaseDatabase;



