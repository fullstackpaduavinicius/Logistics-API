import { Request, Response } from 'express';

// **Mudança:** O método `createOrder` agora retorna um objeto com o `productId`, `quantity` e `id`.
const orderController = {
  createOrder: (req: Request, res: Response) => {
    // Lógica de criação de pedido
    const order = { 
      id: 'unique-order-id', // Simulando um ID gerado
      productId: req.body.productId, 
      quantity: req.body.quantity 
    };
    res.status(201).json(order); // Envia o objeto de pedido criado com status 201
  },
  getOrders: (req: Request, res: Response) => {
    // Lógica de listagem de pedidos
    res.send('Lista de pedidos');
  },
  getOrderById: (req: Request, res: Response) => {
    // Lógica de obter pedido por ID
    res.send(`Pedido com ID: ${req.params.id}`);
  },
  updateOrderStatus: (req: Request, res: Response) => {
    // Lógica de atualizar status do pedido
    res.send(`Status do pedido ${req.params.id} atualizado`);
  },
  deleteOrder: (req: Request, res: Response) => {
    // Lógica de deletar pedido
    res.send(`Pedido com ID: ${req.params.id} deletado`);
  },
};

// **Mudança:** A exportação foi corrigida para ser uma exportação nomeada.
// Ao invés de exportar diretamente o objeto `orderController` dentro de uma exportação padrão, foi realizada uma exportação nomeada.
export { orderController };
