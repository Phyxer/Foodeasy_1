import React from 'react'
import img1 from './img/1.jpg'
import img2 from './img/2.jpg'
import img3 from './img/3.jpg'
function Header() {
  return (
    
<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={img3} class="d-block w-100" style={{ maxHeight: "100vh" }} alt="..."/>
            <div class="carousel-caption d-none d-md-block">
                <h5>Reduce Food Waste</h5>
                <p>To alleviate hunger and reduce food waste by providing a platform for individuals and businesses to donate surplus food to those in need.</p>
            </div>  
        </div>

          <div class="carousel-item">
            <img src={img1} class="d-block w-100" style={{ maxHeight: "100vh" }} alt="..."/>
            <div class="carousel-caption d-none d-md-block">
                <h5>To foster a Sense of Community</h5>
                <p>To foster a sense of community and social responsibility by encouraging users to participate in food drives and volunteer at local food banks and shelters.</p>
            </div>   
        </div>
          <div class="carousel-item">
            <img src={img2} class="d-block w-100" style={{ maxHeight: "100vh" }} alt="..."/>
            <div class="carousel-caption d-none d-md-block">
                <h5>To Increase Awarness</h5>
                <p>To increase awareness about food insecurity and poverty by sharing real-life stories and statistics of individuals and families who are affected..</p>
            </div>    
        </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
  )
}

export default Header