class Transaction {
    client;
    secondaryClient;
  
    constructor(client: any, secondaryClient?: any) {
      this.client = client;
      this.secondaryClient = secondaryClient;
    }

    createTransaction(payload: any) {
        return this.client.post("transaction", payload)
    }
  
    getTransaction(payload: any, transactionId: string) {
      return this.client.get(`transaction/${transactionId}`, payload);
    }

    updateTransactionStatus(payload: any, transactionId: string) {
      return this.client.get(`transaction/${transactionId}/status`, payload);
    }

    getOrderTransaction(payload: any, orderId: string) {
      return this.client.get(`product ${orderId}`, payload);
    }
  }
  
  export default Transaction;
  