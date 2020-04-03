var firebase = require("firebase-admin");

firebase.initializeApp({
    credential: firebase.credential.cert("./serviceAccountKey.json"),
    databaseURL: 'https://farmbuddy-dcaaa.firebaseio.com/Farmer_Details/001'

});
