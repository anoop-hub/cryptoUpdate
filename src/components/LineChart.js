import React from 'react'
import { Line} from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import{Row,Col} from 'antd'
import millify from 'millify';
import "./CardsHome.css"
const LineChart = ({coinHistory,currentPrice,coinName}) => {

  const coinPrice = [];
  const coinTimestamp = [];

  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
  }
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#DC3545',
        borderColor: 'white',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div  style={{marginTop:'4rem'}}>
      <Row >
        <Col span={7}>
        <select class="form-select" aria-label="Default select example">
          {time.map((timestamp) => (
            <option key={timestamp}>{timestamp}</option>
          ))}
        </select>
        </Col>
        <Col span={10}>
        
        <h3 className='text-center' style={{color: '#DC3545'}}>{coinName} Price Chart</h3>
        </Col>
        
        <Col span={7}>
        <h5>Change:<strong> {coinHistory?.data?.change}%</strong></h5>
      <h5>Current {coinName} Price: <strong></strong>$ {millify(coinPrice)}</h5>
        </Col>
      </Row>
     
      <div className="box ">
      <Line data={data} options={options} />
      </div>
      </div>
  )
}

export default LineChart
