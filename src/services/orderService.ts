import Order from '../models/Order';

export const createOrder = async (data: any) => {
  const totalAmount = data.items.reduce((acc: number, item: any) => acc + item.quantity * item.price, 0);
  return await Order.create({ ...data, totalAmount });
};

export const getAllOrders = async () => {
  return await Order.find();
};

export const getOrderById = async (id: string) => {
  return await Order.findById(id);
};

export const updateOrderStatus = async (id: string, status: string) => {
  return await Order.findByIdAndUpdate(id, { status }, { new: true });
};

export const deleteOrder = async (id: string) => {
  return await Order.findByIdAndDelete(id);
};
