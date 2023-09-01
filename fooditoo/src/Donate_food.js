import React, { useState } from 'react';
import './Donate_Food.css';

function Donate_Food() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [foodType, setFoodType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
  };

  return (
    <div className="donation-form-container">
      <blockquote className="blockquote">
        <p className="mb-0">"Service to others is the rent you pay for your room here on earth" </p>
        <footer className="blockquote-footer">Mohmad ali <cite title="Source Title"></cite></footer>
      </blockquote>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="foodType">Food Type</label>
          <input type="text" id="foodType" value={foodType} onChange={(e) => setFoodType(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input type="number" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>
        <button type="submit">Donate Food</button>
      </form>
    </div>
  );
}

export default Donate_Food;
