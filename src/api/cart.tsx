class Cart {
    client;
    secondaryClient;
  
    constructor(client: any, secondaryClient?: any) {
      this.client = client;
      this.secondaryClient = secondaryClient;
    }

    createCart(payload: any) {
        return this.client.post("/cart", payload)
    }

    getCart(payload: any, userId: string) {
      return this.client.get(`/cart/${userId}`, payload);
    }
  
    addToCart(payload: any, userId: string) {
      return this.client.put(`/cart/${userId}/add`, payload);
    }

    updateProductQuantity(payload: any, userId: string) {
      return this.client.put(`/cart/${userId}/update`, payload)
    }
  
    removeFromCart(payload: any, userId: string) {
      return this.client.put(`/cart/${userId}/remove`, payload);
    }

    checkout(payload: any, userId: string) {
        return this.secondaryClient.put(`/cart/${userId}/checkout`, payload);
      }

    clearCart(payload: any, userId: string) {
        return this.client.put(`/cart/${userId}/clear`, payload);
      } 
    
  }
  
  export default Cart;
  