// const assert = require('assert');

const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();

const Burrito = require('../models/burrito');

describe('burrito model', () => {
    it('should retrieve burrito heat by id', async () => {
        const burritoHeat = await Burrito.getById(4);
        console.log(burritoHeat.heat);
        expect(burritoHeat.heat).to.equal('volcano');
    });
    it('should be able to retrieve a burrito by id', async () => {
        const burritoData = await Burrito.getById(2);
        console.log(burritoData);
        expect(burritoData).to.be.an.instanceOf(Burrito);
    });
    it('should be able to retrieve all burrito orders', async () => {
        const allBurritoOrders = await Burrito.getAll();
        expect(allBurritoOrders).to.be.an.instanceOf(Array);
    });
});