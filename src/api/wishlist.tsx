class Wishlist {
    client;
    secondaryClient;
  
    constructor(client: any, secondaryClient?: any) {
      this.client = client;
      this.secondaryClient = secondaryClient;
    }

    getWishList(payload: any) {
      return this.client.get(`wishlist`, payload);
    }

    addProductToWishlist(payload: any, productDTO: string) {
      return this.client.put(`wishlist/product ${productDTO}`, payload);
      }
    
    removeProductFromWishList(payload: any, productId: string) {
      return this.client.delete(`wishlist/product/${productId}`, payload);
      }
    
    updateProductQuantityInWishlist(payload: any, productId: string) {
        return this.client.put(`wishlist/product ${productId}`, payload);
        }
  }
  
  export default Wishlist;
  