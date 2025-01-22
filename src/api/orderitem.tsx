class OrderItem {
    client;
    secondaryClient;
  
    constructor(client: any, secondaryClient?: any) {
      this.client = client;
      this.secondaryClient = secondaryClient;
    }

    createOrderItem(payload: any) {
        return this.client.post(`/order`, payload)
    }
  
    getOrderItemsByOrder(payload: any, orderId: string) {
      return this.client.post(`/orderitem/${orderId}`, payload);
    }
  
    updateOrderItem(payload: any, orderId: string) {
      return this.client.put(`/orderitem/${orderId}`, payload);
    }

    deleteOrderItem(payload: any, orderId: string) {
        return this.secondaryClient.put(`/orderitem${orderId}`, payload);
      }
    
    getAllOrderItem(payload: any) {
        return this.client.post(`/orderitem/all`, payload);
      }
    
  }
  
  export default OrderItem;
  