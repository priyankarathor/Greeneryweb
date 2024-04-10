import React from "react";
import {Link } from "react-router-dom";
import Signin from "./Signin";

const Navbar = () => {
    return(
        <>
           <header class="section-header">
<section class="header-main border-bottom bg-white">
	<div class="container-fluid">
       <div class="row p-2 pt-3 pb-3 d-flex align-items-center">
           <div class="col-md-2">
               <img  class="d-none d-md-flex" src="image/images.jpg" width="150"/>
           </div>
           <div class="col-md-8">
        <div class="d-flex form-inputs">
        <input class="form-control" type="text" placeholder="Search any product..."/>
        <i class="bx bx-search"></i>
        </div>
           </div>
           
           <div class="col-md-2">
               <div class="d-flex d-none d-md-flex flex-row align-items-center">
                   <span class="shop-bag"><i class="bi bi-cart4"></i></span>
                   <div class="d-flex flex-column ms-2">
                       <span class="qty">Export Suppot</span>
                       <span class="fw-bold">Available 24/7</span>

                   </div>    
               </div>           
           </div>
       </div>
	</div> 
</section>

<nav class="navbar navbar-expand-lg navbar-light" id="nav">
  <div class="container-fluid">
    <a class="navbar-brand d-md-none d-md-flex" href="#">Categories</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link className="nav-link active" aria-current="page" to="/" id="nav">HOME</Link> 
        {/* <a className="nav-link active" aria-current="page" href="#Home" id="nav">Home</a> */}
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Needmore" id="nav">SEEDS</a>
        </li>
        <li class="nav-item">
          {/* <Link class="nav-link" to="/Trendcol" id="nav">Discount</Link> */}
          <a className="nav-link active" aria-current="page" href="#Discount" id="nav">DISCOUNT</a>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Sellplant" id="nav">POTS & PLANTERS</Link>
        </li>
     
        
       
        <li class="nav-item dropdown" id="nav">
          <a class="nav-link dropdown-toggle" href="#"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          OFFERS
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#"  id="nav">INDOOR PLANT</a></li>
            <li><a class="dropdown-item" href="#" id="nav">OUTDOOR PLANT</a></li>
            <li><a class="dropdown-item" href="#" id="nav">SEEDS</a></li>
          </ul>
        </li>
        <li className="nav-link">
          <Signin/>
          </li>
      </ul>
    </div>
  </div>
</nav>
</header>
        </>
    )
}
export default Navbar;