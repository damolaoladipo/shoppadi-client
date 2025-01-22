class Address {
    client;
  
    constructor(client: any) {
      this.client = client;
    }

    createAddress(payload: any, userId: string) {
        return this.client.post(`/address/${userId}`, payload)
    }
  
    updateAddress(payload: any, userId: string) {
      return this.client.post(`/address/${userId}`, payload);
    }
  
    getUserAddress(payload: any, addressId: string) {
      return this.client.get(`/address/${addressId}`, payload);
    }

    deleteAddress(payload: any, addressId: string) {
      return this.client.delete(`/address/${addressId}`, payload);
    }
  }
  
  export default Address;
  