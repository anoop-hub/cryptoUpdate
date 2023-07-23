import React, { useState } from 'react'
import { useGetCryptoDetailsQuery ,useGetCryptoHistoryQuery} from '../services/cyptoApi';
import HTMLReactParser from 'html-react-parser'; 
import millify from 'millify';
import {useParams} from 'react-router-dom'
import LineChart from './LineChart';
import{Row,Col} from 'antd';
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

const CryptoDetails = () => {


  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

const {coinId}=useParams();

const [timeperiod,setTimePeriod]=useState('7d');

const {data,isFetching}=useGetCryptoDetailsQuery(coinId);

 console.log(data);
 const cryptoDetails=data?.data?.coin;
const{data:coinHistory}=useGetCryptoHistoryQuery({coinId,timeperiod});
console.log(coinHistory);



// making inbuilt function

const stats = [
  {
    title: "Price to USD",
    value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
    icon: <DollarCircleOutlined />,
  },
  { title: "Rank", value: cryptoDetails?.rank, icon: <NumberOutlined /> },
  {
    title: "24h Volume",
    value: `$ 2400`,
    icon: <ThunderboltOutlined />,
  },
  {
    title: "Market Cap",
    value: `$ ${
      cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
    }`,
    icon: <DollarCircleOutlined />,
  },
  {
    title: "All-time-high(daily avg.) at",
    value: `$ ${
      cryptoDetails?.allTimeHigh?.price &&
      millify(cryptoDetails?.allTimeHigh?.price)
    }`,
    icon: <TrophyOutlined />,
  },
];

const genericStats = [
  {
    title: "Number Of Markets",
    value: cryptoDetails?.numberOfMarkets,
    icon: <FundOutlined />,
  },
  {
    title: "Number Of Exchanges",
    value: cryptoDetails?.numberOfExchanges,
    icon: <MoneyCollectOutlined />,
  },
  {
    title: "Aprroved Supply",
    value: cryptoDetails?.supply?.confirmed ? (
      <CheckOutlined />
    ) : (
      <StopOutlined />
    ),
    icon: <ExclamationCircleOutlined />,
  },
  {
    title: "Total Supply",
    value: `$ ${
      cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
    }`,
    icon: <ExclamationCircleOutlined />,
  },
  {
    title: "Circulating Supply",
    value: `$ ${
      cryptoDetails?.supply?.circulating &&
      millify(cryptoDetails?.supply?.circulating)
    }`,
    icon: <ExclamationCircleOutlined style={{color:'white'}} />,
  },
];
  
  return (
    <div style={{color: 'white',backgroundColor: 'black'}}>



      <div className="title my-4">
      <h1 className='text-center' style={{color: '#DC3545'}}>{data?.data?.coin.name} ({data?.data?.coin?.symbol}) Price</h1>
      <p className='text-center' >{cryptoDetails?.name} live price in US Dollar (USD). View value statistics, market cap and supply.</p>
      </div>
      
     
  
  
  
  
  
      
      <LineChart coinHistory={coinHistory} coinName={data?.data?.coin?.name} currentPrice={millify(data?.data?.coin?.price)}/>
      
     {/* STATISTICS */}
     <div className="row my-4 ">
      <div className="col-6">
      <h3 className="coin-details-heading my-2"> <span style={{color:'#DC3545'}}>{data?.data?.coin.name}</span> Value Statistics</h3>
        <p className='my-4'>An overview showing the statistics of {data?.data?.coin?.name}</p>
        {stats.map(({title,value,icon})=>(
          <>
          <div className="row my-3">
            <div className="col-5">
           
            <p>{icon} {title}</p>
            </div>
            <div className="col">
            <p>
              {value}
             </p>
            </div>
          </div>
                
             </>
        ))}
      </div>
     

      <div className="col-6">
      <h3 className="coin-details-heading my-2"><span style={{color:'#DC3545'}}>Other</span> Stats info</h3>
      <p className='my-4'>An overview showing the statistics of {data?.data?.coin.name}</p>
      {genericStats.map(({title,value,icon})=>(
             <div className="row my-3">
             <div className="col">
             
               <p>{icon} {title}</p>
             </div>
             <div className="col">
              <p>{value}</p>
             </div>
           </div>
      ))}
      </div>
     </div>
     
    

    {/* HISTORY COLUMN AND LINK  COLUMN */}
   
   
          <h3 style={{color: '#DC3545',marginTop:'3rem'}}>What is {data?.data?.coin.name} ?</h3>
          <p style={{lineHeight:'3'}}>{data?.data?.coin.description}</p>
      
          <h3 style={{marginTop:'3rem',color: '#DC3545'}} >{data?.data?.coin.name} Links</h3>
          {cryptoDetails?.links.map((element)=>(
            <Row>
              <Col span={8} style={{fontSize:'20px'}}>
                <p>{element.type}</p>
              </Col>
              <Col span={8}>
                
              </Col>

              <Col span={8} style={{fontSize:'20px'}}>
              <a style={{textDecoration:'none',color:'#DC3545'}} href={element.url}>{element.name}</a>
              </Col>
            </Row>
          ))}
      
      
    </div>
  )
}

export default CryptoDetails
