class Product {
    [x: string]: any;
    client;
    secondaryClient;
  
    constructor(client: any, secondaryClient?: any) {
      this.client = client;
      this.secondaryClient = secondaryClient;
    }

    createProduct(payload: any) {
        return this.client.post("product", payload)
    }

    getAllProducts(payload: any) {
      return this.client.put("/product", payload);
    }
  
    getProductbyId(payload: any, productId: string) {
      return this.client.get(`product ${productId}`, payload);
    }

    updateProduct(payload: any, productId: string) {
      return this.client.put(`product ${productId}`, payload);
      }
    
    deleteProduct(payload: any, productId: string) {
      return this.client.delete(`product ${productId}`, payload);
      }
    
  }
  
  export default Product;
  