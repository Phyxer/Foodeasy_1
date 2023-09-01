import React from 'react';

function Card() {
  return (
    <>
      <div className="card">
        <img src="https://via.placeholder.com/150" alt="Placeholder image" />
        <div className="card-content">
          <h2>Card Title</h2>
          <p>This is a sample card.</p>
          <a href="#">Learn More</a>
        </div>
      </div>
    </>
  );
}

export default Card;
