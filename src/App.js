
import { getData } from "./components/Api";
import { useState,useEffect } from "react";
import {Navbar,Home,Cryptocurrencies,Exchanges,News} from "./components"
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

import {Routes, Route } from "react-router-dom";
import CryptoDetails from "./components/CryptoDetails";
import Spinner from './components/Spinner'
import Footer from "./components/Footer"



function App() {
  
  {setTimeout(() => {
    <Spinner/>
  }, 5000)}
  
       

  return (
   <>

   

    <div >
  <div className="row">
    <div className="col-2">
    <Navbar  />
    </div>
    <div className="col-10">
    <div>

    

<Routes>


<Route path="/" element={<Home />} />
<Route  path="/cryptocurrencies" element={<Cryptocurrencies/>}  />
<Route  path="/exchanges" element={<Exchanges/>} />
<Route  path="/news" element={<News/>} />
<Route  path="/crypto/:coinId" element={<CryptoDetails/>} />
</Routes>
</div>
    </div>
    
  </div>
</div>
   



<Footer/>

   </>
  );
}

export default App;
