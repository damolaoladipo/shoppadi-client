import React from "react";
import { Card, Button } from "react-bootstrap";
import { BarChart, ShoppingCart, Package, Users } from "lucide-react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const AdminDashboard = () => {
  const dashboardStats = [
    { title: "Total Sales", value: "$120,000", icon: <ShoppingCart size={24} />, bg: "bg-success" },
    { title: "Total Inventory", value: "2,500 Items", icon: <Package size={24} />, bg: "bg-primary" },
    { title: "Stock Levels", value: "1,200 Low Stock", icon: <BarChart size={24} />, bg: "bg-warning" },
    { title: "Merchants", value: "45 Registered", icon: <Users size={24} />, bg: "bg-danger" },
  ];

  const bestProducts = [
    { name: "Organic Apples", sales: 320, revenue: "$4,800" },
    { name: "Fresh Lettuce", sales: 210, revenue: "$3,100" },
    { name: "Natural Honey", sales: 180, revenue: "$2,600" },
  ];

  const salesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales Revenue ($)",
        data: [15000, 12000, 18000, 20000, 25000, 28000],
        backgroundColor: "#15A157",
      },
    ],
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4">Admin Dashboard</h2>

      {/* Dashboard Stats */}
      <div className="row g-4 mb-4">
        {dashboardStats.map((stat, index) => (
          <div className="col-md-3" key={index}>
            <Card className="p-3 shadow-sm">
              <Card.Body className="d-flex align-items-center gap-3">
                <div className={`icon-circle text-white ${stat.bg} p-3 rounded-circle`}>{stat.icon}</div>
                <div>
                  <Card.Title>{stat.title}</Card.Title>
                  <h4 className="fw-bold">{stat.value}</h4>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      {/* Sales Chart */}
      <Card className="p-3 shadow-sm mb-4">
        <Card.Body>
          <Card.Title>Sales Overview</Card.Title>
          <Bar data={salesData} />
        </Card.Body>
      </Card>

      {/* Best Performing Products */}
      <Card className="p-3 shadow-sm">
        <Card.Body>
          <Card.Title>Best Performing Products</Card.Title>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Product</th>
                <th>Sales</th>
                <th>Revenue</th>
              </tr>
            </thead>
            <tbody>
              {bestProducts.map((product, index) => (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>{product.sales}</td>
                  <td>{product.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AdminDashboard;
