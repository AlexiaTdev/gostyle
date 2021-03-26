(async()=>{
    const express = require('express');
    const app = express();
    const port = 3000;
    var cors = require('cors');
    
    const { MongoClient,ObjectID } = require('mongodb');
    
    
    const db = (await MongoClient.connect('mongodb://localhost:27017/MSPRDataBase')).db();
    
    const CodePromo = db.collection('CodePromo');
    app.use(express.json()); 
    app.use(cors());
    
    app.get('/', (req, res) => {
    res.send('Hello World!');
    })
    
    app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    })
    
    app.get('/codepromo', async(req, res) => {
    
        const QRCodePromo = req.body.codePromo ? req.body.QRCodePromo: null;
    
        //const promoResponse = await CodePromo.find({QRCodePromo:QRCodePromo},{projection:{reduction:1,_id:0,codePromo:1}}).toArray();
        const promoResponse = await CodePromo.find({},{projection:{reduction:1,_id:0,codePromo:1}}).toArray();
    
    
        res.type('application/json');
        res.status(200).json(promoResponse);
    })
    
    app.post('/codepromo/addpromo', async(req,res)=>{
        newPromos = req.body;
        for(newPromo of newPromos)
        {
            await CodePromo.insertOne({QRCodePromo:newPromo.QRCodePromo, reduction:newPromo.reduction, codePromo:newPromo.codePromo});
        }
    
        res.status(201).json(newPromos);
    })
    
    app.delete('/codepromo/deletePromo', async(req,res)=>{
        oldPromos = req.body;
        for(oldPromo of oldPromos)
        {
            await CodePromo.deleteOne({_id:new ObjectID(oldPromo._id)});
        }
        res.status(200).send("Delete ok");
    })
    
    })();