const request = require('supertest');
const app = require('../app');
const chai = require('chai');
const expect = chai.expect;

describe('Token API', () => {
  it('should fetch tokens', async () => {
    const res = await request(app).get('/api/tokens?chain=ethereum');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
  });

  it('should fetch a quote', async () => {
    const res = await request(app).post('/api/quotes').send({
      token: 'ETH',
      chain: 'ethereum'
    });
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('quote');
  });

  it('should create a transaction', async () => {
    const res = await request(app).post('/api/params').send({
      token: 'ETH',
      chain: 'ethereum',
      quote: '12345'
    });
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('transactionParams');
  });
});
