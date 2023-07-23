import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { MdOutlineCurrencyExchange } from 'react-icons/md'
import { BsCurrencyBitcoin } from 'react-icons/bs'

import { HiInformationCircle } from 'react-icons/hi'
export default function Navbar(props) {

  const [txt,setText]=useState("")

  
  

  
  return (
    <div>
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <Link class="navbar-brand"  to="/" style={{color:'#DC3545'}}> <MdOutlineCurrencyExchange className="loaderIcon" size={40}  color='white'/> Crypto </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link a" aria-current="page" to="/"><i class="fa-solid fa-house"></i> Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/cryptocurrencies"><BsCurrencyBitcoin size={25}/>  Cryptocurrencies</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link" to="/exchanges"><HiInformationCircle size={25}/> About Crypto</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link" to="/news"><i class="fa-solid fa-newspaper"></i> News</Link>
        </li>
        
        
      </ul>

     


    </div>
  </div>
</nav>
    </div>

/* <div>


// VERICAL NAVBAR  
<nav class="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:  "#39A6A3"}}>
  <div class="container-fluid">
    <Link class="navbar-brand fw-bold" to="#">Coding Yaar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="#">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="#">Link</Link>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to="#">Action</Link></li>
            <li><Link class="dropdown-item" to="#">Another action</Link></li>
            <li>
              <hr class="dropdown-divider"/>
            </li>
            <li><Link class="dropdown-item" to="#">Something else here</Link></li>
          </ul>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>


</div> */
  )
}
