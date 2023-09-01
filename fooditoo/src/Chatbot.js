import React from 'react'
import allVendorData from './product'

function Chatbot() {
  return (
    <>
    <div>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Food Donation</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Shop</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Donate Food</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
{allVendorData.map((xyz)=>(
    <div class="container my-4">
        <div class="row">
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="" class="card-img-top" alt="item-1" />
                    <div class="card-body">
                        <h5 class="card-title">{xyz.name}</h5>
                        <p class="card-text">Fresh and ripe bananas</p>
                        <button class="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div> 
        </div>
            ))};
            </div>
            </>      

  );
};     
     
       


export default Chatbot;