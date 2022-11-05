import React from 'react'
import { Stack } from '@mui/system';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Chart as Chartjs, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
Chartjs.register(...registerables)



const LineChart = ({ coinHistory, currentPrice, coinName }) => {




  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 10; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleTimeString());
  }

  const data = {
    labels: coinPrice,
    datasets: [
      {
        // fillColor : "rgba(151,187,205,0.5)",
        //         strokeColor : "rgba(151,187,205,1)",
        //         pointColor : "rgba(151,187,205,1)",
        //         pointStrokeColor : "#fff",
        //         data : [1,3,0,0,6,2,10]
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    

    scales: {

      xAxes: {
        gridLines: {
          display:false,
         
      },

        ticks: {
          display: false,

        }
      },

      
      yAxes: [{

        ticks: {
          beginAtZero: true,

        }
      }]
    }
  };

  return (

    <>
      <Stack p={4} flexWrap={'wrap'} justifyContent={'space-between'}>
        <h1 style={{color:'#191934'}}>{coinName} Price Chart</h1>
        
      
        {coinHistory?.data?.change <0 ? ( <h2 style={{color:'#264D89'}}>24H Change: <span className='red'><ArrowDownOutlined />  {coinHistory?.data?.change}</span></h2>):       (<h2 style={{color:'#264D89'}} >24H Change  :<span  className='blue'> <ArrowUpOutlined/>  {coinHistory?.data?.change}</span> </h2>)
        }
   

        <Line data={data} options={options} />

      </Stack>



    </>
  )
}

export default LineChart