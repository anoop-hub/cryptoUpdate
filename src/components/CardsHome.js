import React from 'react'

import { Link } from 'react-router-dom'

const CardsHome = ({title,icon,price,market,change,rank}) => {
  return (
    
   <div >

    <div className="card my-4 " style={{backgroundColor:'black',color:'white',margin: '0 auto ',float:'none',marginBottom:'10px',textDecoration:'none'}}>
    <div className="project-card-view"> 
      <div className="card-body  "  > 
        <div className="row">
          <div className="col-8">
          <h4 className="card-title">{rank}.{title.slice(0,14)}</h4>
          </div>
          <div className="col-4">
          <img  style={{width:'50px',height:'50px'}}src={icon} alt="" />
          </div>
        </div>
      
        <p>Pirce : {price}</p>
        <p>Market Cap : {market}</p>
        <p>Daily change : {change}</p>
        
        
        
      </div>
      </div>
    </div>
   </div>
  )
}

export default CardsHome
