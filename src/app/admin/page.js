'use client';
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import './admin.css'

const OrdersDashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");

  // Fetch orders from the API
  useEffect(() => {
    fetch("/api/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.error("Failed to fetch orders:", err));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (formData.email === "admin@dalexander.com" && formData.password === "d4rik4lex4nder") {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  const markFulfilled = (id) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, fulfilled: !order.fulfilled } : order
    );
    setOrders(updatedOrders);

    // Save updated orders to the API
    saveOrdersToAPI(updatedOrders);
  };

  const saveOrdersToAPI = (updatedOrders) => {
    fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedOrders),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to save orders");
        }
        console.log("Orders saved successfully");
      })
      .catch((error) => console.error("Error saving orders:", error));
  };

  const columns = [
    {
      name: "First Name",
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: (row) => row.lastName,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Fulfilled",
      selector: (row) => (row.fulfilled ? "Yes" : "No"),
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <button
          className="mark-fulfilled-button"
          onClick={() => markFulfilled(row.id)}
          style={{backgroundColor: row.fulfilled ? 'green' : ''}}
        >
          {row.fulfilled ? "Fulfilled" : "Mark as Fulfilled"}
        </button>
      ),
    },
  ];

  return (
    <div className="login-container">
      {!isLoggedIn ? (
        <div className="login-form">
          <h2>Login to Admin</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            {error && <p className="error">{error}</p>}
            <button type="submit">Login</button>
          </form>
        </div>
      ) : (
        <div className="course-table-container">
          <h2>Orders Dashboard</h2>
          <DataTable
            columns={columns}
            data={orders}
            pagination
            highlightOnHover
          />
        </div>
      )}
    </div>
  );
};

export default OrdersDashboard;
