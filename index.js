const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
var express = require('express');
var http = require('http');
var server = http.createServer();
var app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
app.options('*', cors());
//initialize admin SDK using serciceAcountKey
admin.initializeApp({
	credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();


app.listen(3000, () => {
    console.log("server running on port 3000");
})

app.get('/', function(req, res,) {
    res.json({
        "API":"Farm buddy",
        "version":"1.0",
        "last modified":"25/04/2020",
        "paths":[
            {"Update user":"/user - PUT","Body":{
                "F_Name":"first name",
                "L_Name":"last name",
                "Location":"location",
                "NIC":"00000000V",
                "Phone_Number":"076123456",
                "Crops":["c001"]
            }},
            {"Create user":"/user - POST","Body":{
                "F_Name":"first name",
                "L_Name":"last name",
                "Location":"location",
                "NIC":"00000000V",
                "Phone_Number":"076123456",
                "Crops":["c001"]
            }},
            {"Get user":"/user - Get","Body":{
                "Phone_Number":"076123456",
            }},
            
            ]
    })
});

app.put('/user', function(req,res){

    var F_Name = req.body.F_Name;
    var L_Name = req.body.L_Name;
    var Location = req.body.Location;
    var NIC = req.body.NIC;
    var Phone_Number = req.body.Phone_Number;
    var Crops = req.body.Crops;

    if(F_Name!=="" || L_Name!=="" || Location!=="" || NIC!=="" || Phone_Number!==""){
        const p3 = db.collection('Farmers').where('Phone_Number','==',Phone_Number).get();
        const p2 = p3.then(doc => {
            var test = false;
            var userId = null; 
            doc.forEach(doc => {
                if(doc.get('Phone_Number')== req.body.Phone_Number){
                    test=true;
                    userId = doc.id;
                }
            });
            if(test===true){
                
                const farmerData = {
                    F_Name: F_Name,
                    L_Name: L_Name,
                    Location: Location,
                    NIC: NIC,
                    Crops: Crops
                };
                let update = db.collection('Farmers').doc(userId).update(farmerData).then(()=>console.log('updated'));
                
                console.log(userId);
                res.status(201).json(farmerData);
                
               
            }else{
                    
                    res.sendStatus(404);
                
                    console.log("Phone Number does not exist");
                    
            }
        })
        .catch(err => {
            console.log('Error getting documents', err);
        });
    }else{
        res.sendStatus(404);
    }


})

app.get('/user', function(req,res){
    var Phone_Number = req.body.Phone_Number;

    const p3 = db.collection('Farmers').where('Phone_Number','==',Phone_Number).get();
    const p2 = p3.then(doc => { 
        var test = false;
        var user = null; 
        doc.forEach(doc => {
            if(doc.get('Phone_Number')== req.body.Phone_Number){
                test=true;
                user = doc.data();
            }
        });
        if(test===true){
            
            console.log(user);
            res.status(200).json(user);
            
        }else{
    
                res.sendStatus(401);
        
                console.log("phoneNumber does not exist");
                
        }
    })
    .catch(err => {
        console.log('Error getting documents', err);
    });
});

app.post('/user', function(req,res) {

    var F_Name = req.body.F_Name;
    var L_Name = req.body.L_Name;
    var Location = req.body.Location;
    var NIC = req.body.NIC;
    var Phone_Number = req.body.Phone_Number;
    var Crops = req.body.Crops;

    if(F_Name!=="" || L_Name!=="" || Location!=="" || NIC!=="" || Phone_Number!==""){
        const p3 = db.collection('Farmers').where('NIC','==',NIC).get();
        const p2 = p3.then(doc => {
            var test = false; 
            doc.forEach(doc => {
                if(doc.get('NIC')== req.body.NIC){
                    test=true;
                }
            });
            if(test===true){
                // console.log(doc.id, '=>', doc.data());
                console.log("NIC exist");
                res.sendStatus(409);
            }else{
                    const farmerData = {
                        F_Name: F_Name,
                        L_Name: L_Name,
                        Location: Location,
                        NIC: NIC,
                        Phone_Number: Phone_Number,
                        Crops: Crops
                    };
                    var insert =  db.collection('Farmers').doc()
                    .set(farmerData).then(() => 
                    console.log('new Dialogue written to database'));
                    res.sendStatus(200);
                
                    console.log("NIC does not exist");
                    
            }
        })
        .catch(err => {
            console.log('Error getting documents', err);
        });
    
    }else{
        res.sendStatus(404);
    }

});





