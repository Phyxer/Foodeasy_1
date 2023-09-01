import React, { useState } from "react";

function Cart() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [shippingAddress, setShippingAddress] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleShippingAddressChange = (event) => {
    setShippingAddress(event.target.checked);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <div className="container col-8 my-5 br-2 rounded">
      <div className="row g-3">
        <div className="col-4 order-md-last">
          <h4 className="d-flex justify-content-between align-item-center">
            <span className="text-muted">Your Cart</span>
            <span className="badge bg-secondary rounded-pill">3</span>
          </h4>
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between">
              <div>
                <h6>Product name</h6>
                <span className="text-muted">Brief Description</span>
              </div>
              <span className="text-muted">Rs 500</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <div>
                <h6>Second Product</h6>
                <span className="text-muted">Brief Description</span>
              </div>
              <span className="text-muted">Rs 200</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <div>
                <h6>Third Product</h6>
                <span className="text-muted">Brief Description</span>
              </div>
              <span className="text-muted">Rs 600</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <div>
                <h6 className="text-success">Promo Code</h6>
                <span className="text-muted">Sale10</span>
              </div>
              <span className="text-muted">Rs 100</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <div>
                <h6>Total (Rs)</h6>
              </div>
              <span className="text-muted">Rs 1200</span>
            </li>
          </ul>
        </div>
        <div className="col-8">
          <h4>Billing Address</h4>
          <form>
            <div className="row">
              <div className="col-6">
                <label className="form-label" htmlFor="firstname">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstname"
                  className="form-control"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div className="col-6">
                <label className="form-label" htmlFor="lastname">
                  Last name
                </label>
        
);
};