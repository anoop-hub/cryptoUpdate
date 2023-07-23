import React from 'react'
import "./CardsHome.css"
const Cards = ({stats,title}) => {
  return (
    <div>
      <div className="card text-center project-card-view" style={{float:'none',marginBottom:'5px'}} >
        <div className="card-body" style={{color:'white'}}>
          <h2 >{title}</h2>
        <h2>{stats}</h2>
        </div>
      </div>
      
    </div>
  )
}

export default Cards
