// import React from 'react'
// import { useState } from 'react';
// import { useGetCryptosQuery } from '../services/cyptoApi';
// import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
// import Cards from './Cards';
 import Spinner from './Spinner';

// const demoImage='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
// const News = () => {

 
  
//   const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory:'Cryptocurrency'});
//   console.log(cryptoNews);
  
//   if (!cryptoNews?.value) return <Spinner/>;
//   return (
//     <div>
//       <div className="row">
      
     
//       {cryptoNews.value.map((element,id)=>  id<=8  && (
//         <div className="col-4 my-4"  >
          
//           {/* <div className="card">
//           <img class="card-img-top" src={element?.image?.thumbnail?.contentUrl || demoImage}  alt="..." style={{height:"100px"}}/>
//             <div className="card-body">
//             <p>{element.name.slice(0,30)}</p>
        
        
//             </div>
//           </div> */}


// <div className="card bg-dark text-light" style={{border:"2px solid white",margin: '0 auto ',float:'none',marginBottom:'10px',paddingRight:'25px'}}  >
//   <div className="row">
//     <div className="col-8">
//     <h5 className="card-title " style={{marginTop:'12px',marginLeft:'10px'}}>{element.name.slice(0,40)}...</h5>
//     </div>
//     <div className="col-4">
//     <img src={element?.image?.thumbnail?.contentUrl || demoImage}  style={{height:'75px',overflow:'hidden',marginRight:'4px',marginTop:'10px'}} alt="..."  />
//     </div>
//   </div>
          
//           <div className="card-body"   >
            
//             <p className="card-text">{element.description.slice(0,100)}....</p>
//             <p className="card-text  "><small className="text-light">By Unknown on  {element.datePublished} </small></p>
//             <a
//               href={element.url}
//               className="btn btn-danger"
//             >
//               Read More
//             </a>
//           </div>
//         </div>
//         </div>
        
//       ))}
//        </div>
//     </div>
//   )
// }

// export default News


import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import "./News.css"
import{useGetCryptosQuery} from '../services/cyptoApi';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
//import Loader from './Loader';

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { data } = useGetCryptosQuery(100);
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });

  if (!cryptoNews?.value) return <Spinner/>;

  return (
  <div className="li box" style={{textDecoration:'none', backgroundColor:'#202020',marginTop:'50px'}}>
<Row gutter={[24, 24]}>
      {/* {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="Cryptocurency">Cryptocurrency</Option>
            {data?.data?.coins?.map((currency) => <Option value={currency.name}>{currency.name}</Option>)}
          </Select>
        </Col>
      )} */}



      {cryptoNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i} >
          <div className="newsStyle">
          <Card  className="news-card my-3 mx-2 " style={{backgroundColor:'black',borderRadius:'1.5rem',border:'none'}}>
            <a  style={{textDecoration:'none'}} href={news.url} >
              <div className="news-image-container" >
              <Row>
               
              <Col span={16}>
                
                <Title className="news-title" level={4} style={{color:'white'}}>{news.name.slice(0,50)}..</Title></Col>

                <Col span={6}>
                <img style={{borderRadius:'10%'}} src={news?.image?.thumbnail?.contentUrl || demoImage} alt="" />
                </Col>
              </Row>
              </div>
              <div className="gap my-3" >
              <p style={{color:'white',textDecoration:'none'}}>{news.description.length > 100 ? `${news.description.substring(0, 90)}...` : news.description}</p>
              </div>
              <div className="provider-container ">
                <div  style={{paddingTop:'13px',paddingBottom:'0px'}}>
                  <Row>

                    <Col span={16} 
                    > <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="" />
                    <Text className="provider-name" style={{color:'white'}}>{news.provider[0]?.name}</Text>
                    </Col>
                    <Col span={8}>
                    <Text style={{color:'aliceblue'}}>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                    </Col>
                  </Row>
                  <a href={news.url} class="btn btn-danger " style={{marginTop:'1.5rem'}}>Read More</a>
                </div>
                
              </div>
            </a>
          </Card>
          </div>
        </Col>
      ))}
    </Row>
  </div>
    
  );
};

export default News;
