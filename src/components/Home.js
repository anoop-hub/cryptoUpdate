import React, { useEffect, useState } from 'react'
import { useGetCryptosQuery } from '../services/cyptoApi';
import millify from 'millify';
import { Link } from 'react-router-dom';
import {  Typography, Row, Col } from 'antd';
import CardsHome from './CardsHome';
import './Home.css'
import Cards from './Cards';
import News from './News';


import './CardsHome.css'


const Home = ({title,icon,stats,price,market,change,rank}) => {
  
  // const {data,isFetching}=useGetCryptosQuery();
  //  const  globalStats=data?.data?.stats;
  //  const C=data?.data?.coins
  //  const[coin,setCoin]=useState();
  //  if(isFetching)return 'loading...'
  // console.log(data);


   
  

  
  const { data:cryptosList,isFetching } = useGetCryptosQuery();
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
  //const [searchTerm, setSearchTerm] = useState('');
    const t=cryptosList?.data?.coins;
    // const topVar=data?.data?.stats;
   
   

    
    
   console.log(cryptosList);
    
  useEffect(() => {
    setCryptos(t);

  //  const filteredData = cryptosList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm));

    //setCryptos(filteredData);
  }, [cryptosList]);

  
 

  return (
    <>


    
    {/* Home Page and total stats */}
     <div classNameName="top" style={{paddingBottom:'70px'}}>
     <h1 >Global <span style={{color:'#DC3545'}}>Crypto</span>  Stats</h1>
     
{/* First row */}
<>
<Row>

<Col span={20}>
     <div className="row my-4 ">
     <div className="col-lg-4 col-md-12  my-4">
  <Cards title={"Total"} stats={millify(cryptosList?.data?.stats?.total)}/>
</div>
  <div className="col-lg-4 col-md-12 my-4 ">
    <Cards title={"Total Volume"} stats={millify(cryptosList?.data?.stats?.total24hVolume)}/> 
  </div>
<div className="col-lg-4 col-md-12 my-4"> 
    <Cards title={"Total Coins"} stats={millify(cryptosList?.data?.stats?.totalCoins)}/>  
  </div>
</div>
</Col>
<Col span={4}>

</Col>
</Row>
</>
{/* 2nd row */}
<Row>
  <Col span={20}>
<div className="row my-2" >
<div className="col-lg-4 col-md-12 col-sm-12 my-4"> 
    <Cards title={"Total Exchanges"} stats={millify(cryptosList?.data?.stats?.totalExchanges)}/>  
  </div>
  <div className="col-lg-4 col-md-12 my-4">
    <Cards title={"Total Market Cap"} stats={millify(cryptosList?.data?.stats?.totalMarketCap)}/> 
  </div>
  <div className="col-lg-4 col-md-12 my-4">
  <Cards title={"Total   Markets"} stats={millify(cryptosList?.data?.stats?.totalMarkets)}/>
</div>
</div>
</Col>
</Row>
     </div>



    
     {/* TOP 10 CRYPTO SHOWING */}
     <Row>

<Col span={20}>
<h2 style={{marginLeft:'20px '}}>Top  <span style={{color:'#DC3545'}}>Cryptos</span> In The World  </h2>
</Col>
<Col span={4}>
<Link to="/cryptocurrencies" style={{textDecoration:'none'}}>
  <h3 >Show More</h3></Link>
</Col>
     </Row>
     
    <div className="box">
            

         
          <div className="row ">
           {cryptos?.map((element,index)=>
          index<=11 &&  (
         <div className="col-lg-3 col-md-12" key={element.uuid} >
          <Link   to={`/crypto/${element.uuid}`} style={{textDecoration:'none'}}>
          
        <CardsHome rank={element.rank} title={element.name} icon={element.iconUrl} price={millify(element.price)} market={millify(element.marketCap)} change={element.change} />
        
        </Link>
         </div>
          ))}
               </div>

               
               </div>
   
    

              


    {/* TRENDING NEWS */}
    <div className="box-3 my-4" style={{paddingTop:'30px'}}>
<Row>
    <Col span={20}>
<h2 style={{marginLeft:'20px '}}>Latest <span style={{color:'#DC3545'}}>Cryptos</span>  News </h2>
</Col>
<Col span={4}>
<Link to="/news" style={{textDecoration:'none'}}>
  <h3 >Show More</h3></Link>
</Col>

</Row>
    
    
    
    <div className="box" style={{padding:'20px'}}>
    <News />
    </div>
    
    </div>
    
    
   
    
    
    </>
  )
}

export default Home
