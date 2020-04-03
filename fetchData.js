var firebase = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: 'https://farmbuddy-dcaaa.firebaseio.com/Farmer_Details/001'

});

var db = firebase.database();


