// No arquivo tests/order.test.ts
import request from 'supertest';
import app from '../src/app';  // Ou o arquivo onde o app Express é exportado

describe('Order API', () => {
  it('should create an order', async () => {
    const response = await request(app)
      .post('/orders')
      .send({
        product: 'Test Product',
        quantity: 1
      });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });
});
