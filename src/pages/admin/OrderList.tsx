import React, { useState } from "react";
import { Table, Badge, Pagination, Card } from "react-bootstrap";

const OrderList = () => {
  const orders = [
    { id: "#1001", date: "2024-02-01", customer: "John Doe", total: "$250", status: "Completed", payment: "Credit Card", items: 3 },
    { id: "#1002", date: "2024-02-02", customer: "Jane Smith", total: "$180", status: "Pending", payment: "PayPal", items: 2 },
    { id: "#1003", date: "2024-02-03", customer: "Alice Johnson", total: "$320", status: "Shipped", payment: "Debit Card", items: 5 },
    { id: "#1004", date: "2024-02-04", customer: "Robert Brown", total: "$400", status: "Cancelled", payment: "Credit Card", items: 1 },
    { id: "#1005", date: "2024-02-05", customer: "Michael White", total: "$220", status: "Completed", payment: "Bank Transfer", items: 4 },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = orders.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <Card className="p-3 shadow-sm">
      <h4 className="mb-3">Order History</h4>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Customer</th>
            <th>Total</th>
            <th>Status</th>
            <th>Payment Method</th>
            <th>Items</th>
          </tr>
        </thead>
        <tbody>
          {currentOrders.map((order, index) => (
            <tr key={index}>
              <td>{order.id}</td>
              <td>{order.date}</td>
              <td>{order.customer}</td>
              <td>{order.total}</td>
              <td>
                <Badge bg={
                  order.status === "Completed" ? "success" :
                  order.status === "Pending" ? "warning" :
                  order.status === "Shipped" ? "info" : "danger"
                }>
                  {order.status}
                </Badge>
              </td>
              <td>{order.payment}</td>
              <td>{order.items}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination */}
      <Pagination className="justify-content-center">
        {Array.from({ length: Math.ceil(orders.length / itemsPerPage) }, (_, i) => (
          <Pagination.Item key={i + 1} active={i + 1 === currentPage} onClick={() => paginate(i + 1)}>
            {i + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </Card>
  );
};

export default OrderList;
