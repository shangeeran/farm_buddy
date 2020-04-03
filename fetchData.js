var firebase = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: 'https://farmbuddy-dcaaa.firebaseio.com/Farmer_Details/001'

});

// Get a database reference to our blog
var db = firebase.database();

var ref = db.ref("farmbuddy-dcaaa/Farmer_Details");





