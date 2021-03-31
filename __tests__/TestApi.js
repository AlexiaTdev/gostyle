import 'react-native';
import 'chai';

const { expect } = require('chai');
const request = require('superagent');
const { MongoClient } = require('mongodb');

describe('Run All Tests', function () {

    const collections = {};

    beforeAll(async () => {
        const db = (await MongoClient.connect('mongodb://localhost:27017/MSPRDataBase')).db();
        collections.codes = db.collection('CodePromo');
    
        await collections.codes.deleteMany({});
      });

    it('should return "Hello World"', async () => {
        const { text } = await request.get('http://localhost:3000');
        expect(text).to.be.equal("Hello World!")
    })

    afterAll(async () => {
        await collections.codes.deleteMany({});
      });

    describe('POST /addpromo', () => {
        
        it('should get a 201 code', async () => {
            const { status } = await request
            .post('http://localhost:3000/codepromo/addpromo')
            .send([{
                QRCodePromo: "Promo1", 
                reduction: "80% sur les boules de pétanque", 
                codePromo: "1v1_when"
            }]);
    
            expect(status).to.be.equal(201);
        });
        
        it('should get the newly made code promo', async () => {
            
            const newPromos = [{
                QRCodePromo: "Promo2", 
                reduction: "50% sur le pastis", 
                codePromo: "apero"
            }]
    
            const { body } = await request
            .post('http://localhost:3000/codepromo/addpromo')
            .send(newPromos);
    
            expect(body).to.be.deep.equal(newPromos);
        })
    })
    
      
    describe('GET /getcodepromo', function () {
        it('should return the CodePromo "apero"', async () => {
            const { body }= await request.get('http://localhost:3000/codepromo/Promo2');
            expect(body[0].codePromo).to.be.deep.equal("apero")
        })
    })


    describe('DELETE /deletePromo', () => {
        it('should get a 200 code', async () => {
    
            const { body }= await request.get('http://localhost:3000/codepromo/Promo1');
    
            const { status } = await request
            .delete('http://localhost:3000/codepromo/deletePromo')
            .send(body);
    
            expect(status).to.be.equal(200);
        });

        it('should return "Delete ok"', async () => {
    
            const { body }= await request.get('http://localhost:3000/codepromo/Promo2');
    
            const { text } = await request
            .delete('http://localhost:3000/codepromo/deletePromo')
            .send(body);
    
            expect(text).to.be.equal("Delete ok");
        });
    })
})







