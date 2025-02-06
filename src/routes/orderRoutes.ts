import { Router } from 'express';
import { orderController } from '../controllers/orderController'; // Alteração aqui

const router = Router();

router.post('/orders', orderController.createOrder);
router.get('/orders', orderController.getOrders);
router.get('/orders/:id', orderController.getOrderById);
router.put('/orders/:id', orderController.updateOrderStatus);
router.delete('/orders/:id', orderController.deleteOrder);

export default router;
