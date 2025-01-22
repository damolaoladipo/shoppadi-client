class Shipment {
    client;
    secondaryClient;
  
    constructor(client: any, secondaryClient?: any) {
      this.client = client;
      this.secondaryClient = secondaryClient;
    }

    createShipment(payload: any) {
        return this.client.post("/shipment", payload)
    }

    getShipment(payload: any, orderId: string) {
      return this.client.post(`/shipment/${orderId}`, payload);
    }
  
    updateShipmentStatus(payload: any, shipmentId: string) {
      return this.client.post(`/shipment/${shipmentId}`, payload);
    }

    updateTrackingNumber(payload: any, trackingNumber: string) {
      return this.client.post(`/shipment/${trackingNumber}`, payload);
    }
  
  
  }
  
  export default Shipment;
  