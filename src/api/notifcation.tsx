class Notification {
    client;
    secondaryClient;
  
    constructor(client: any, secondaryClient?: any) {
      this.client = client;
      this.secondaryClient = secondaryClient;
    }

    getNotification(payload: any) {
        return this.client.get(`/notifcation`, payload)
    }

    createNotification(payload: any) {
      return this.client.get(`/notifcation`, payload)
    }
  
    updateNotification(payload: any) {
      return this.client.put(`/notifcationId/read`, payload);
    }

    deleteNotification(payload: any) {
        return this.client.delete(`/notifcationId/`, payload);
      }
    
  }
  
  export default Notification;
  