class Order {
    client;
    secondaryClient;
  
    constructor(client: any, secondaryClient?: any) {
      this.client = client;
      this.secondaryClient = secondaryClient;
    }

    createOrder(payload: any) {
        return this.client.post(`/order`, payload)
    }
  
    getOrder(payload: any, id: string) {
      return this.client.post(`/order/${id}`, payload);
    }
  
    updateOrder(payload: any, id: string) {
      return this.client.put(`/order/${id}/status`, payload);
    }

    getUserOrder(payload: any, userId: string) {
        return this.secondaryClient.put(`/order/user/${userId}`, payload);
      }
    
    getAllUserOrder(payload: any) {
        return this.client.post(`/order`, payload);
      }
    
  }
  
  export default Order;
  