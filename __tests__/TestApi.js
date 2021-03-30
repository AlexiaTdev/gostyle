import 'react-native';
import 'chai';

const { expect } = require('chai');
const request = require('superagent');

describe('GET /', function () {
    it('should return "Hello World"', async () => {
        const { response } = await request.get('http://192.168.1.10:19000/');
        expect(response).to.be.equal("Hello World!")
    })
})