import { orderController } from '../src/controllers/orderController';
import { Request, Response } from 'express';

describe('Order Controller', () => {
  it('should create an order', async () => {
    // Mock dos dados da requisição
    const req = {
      body: { productId: 1, quantity: 2 },
    } as Request;

    // Mock da resposta com funções spy (mocked)
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    // Executa a função de criação de pedido
    await orderController.createOrder(req, res);

    // Verifica se o status foi chamado com o código 201
    expect(res.status).toHaveBeenCalledWith(201);

    // Verifica se a resposta `json` foi chamada com o objeto correto
    expect(res.json).toHaveBeenCalledWith({
      id: expect.any(String), // Verifica se o ID é uma string
      productId: 1,
      quantity: 2,
    });
  });
});
