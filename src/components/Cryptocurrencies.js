import React, { useState,useEffect } from 'react'
import CardsHome from './CardsHome'
import { useGetCryptosQuery } from '../services/cyptoApi';
import millify from 'millify';
import './CardsHome.css'
import Spinner from './Spinner';


const Cryptocurrencies = ({rank,price,market,change}) => {
  const { data,isFetching } = useGetCryptosQuery();
  const [cryptos,setCryptos]=useState();
  
  
  const t=data?.data?.coins;
  useEffect(() => {
    setCryptos(t);

  //  const filteredData = cryptosList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm));
  // second commit done
    //setCryptos(filteredData);
  }, [data]);

  
  
  return (
    
    <div className='box' style={{marginTop:'50px'}}>
      <div className="row " >
           {cryptos?.map((element)=>
            (
         <div className="col-lg-3 col-md-12" key={element.uuid}>
        <CardsHome  rank={element.rank} title={element.name} icon={element.iconUrl} price={millify(element.price)} market={millify(element.marketCap)} change={element.change}/>
         </div>
          ))}
               </div>
    </div>
  )
}

export default Cryptocurrencies
