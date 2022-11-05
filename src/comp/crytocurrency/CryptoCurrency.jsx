import React, { useEffect, useState } from 'react'
import { useGetCryptosQuery } from '../../services/cryptoApi'
import { Card, CardContent, Stack, Button } from '@mui/material';
import millify from 'millify';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Loader from '../loader/loader';
import Cardsss from '../home/card/card';

const CryptoCurrency = () => {
 

  const { data, isFetching } = useGetCryptosQuery();

  const [sttes, setsttes] = useState([])
  const [Bhai, setBhai] = useState('')
  const numberFormat = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'USD'
  }).format(value);

  useEffect(() => {



    const filteredData = data?.data?.coins.filter((ele) => ele.name.toLowerCase().includes(Bhai.toLowerCase()))

    setsttes(filteredData);

  }, [Bhai, data])

  if (isFetching) return <Loader />
  return (
    <>
      <br />

      <h1 style={{ textAlign: 'center' }}>Explore the CryptoEconomy</h1>
      <p  style={{ textAlign: 'center',fontWeight:600,fontSize:'16px' }}>All cryptocurrencies ranked by market cap.</p>

      <Stack className='Seerch'>
        <input type="text" placeholder='Search Coins...' onChange={(e) => { setBhai(e.target.value) }} />

      </Stack>




      
     


      <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'center'} p={4} gap={3}>
        {
          sttes && sttes.map((ele) => {
            return (

              <Stack key={ele.uuid}>

              <Link style={{ textDecoration: 'none' }} to={`/cryptocurency/crypto/${ele.uuid}`}>

                <Card sx={{ width: {xs:360,sm:500, md:300}}} className='carding'  >
                  <Stack direction={'column'} justifyContent={'space-between'} p={1} alignItems={'center'} className='DESIGN' >
                    <h1>  <img className='cryptoImg' src={ele.iconUrl} alt="" /></h1>
                    <h2 className='h1'> {ele.name}</h2>

                  </Stack>

                  <CardContent>
                    <Button sx={{ fontWeight: 'bold' }} variant="contained" disabled>
                      <h3 className='h1' style={{ color: 'gray' }}>Rank: #{ele.rank}</h3>
                    </Button><br />
                    <CardContent sx={{ backgroundColor: '#DEE0E1', marginTop: '12px', borderRadius: '10PX', padding: '5PX' }}>

                      <h3 className='h3'> Price : {numberFormat(ele.price)}</h3>
                    </CardContent>

                    <CardContent sx={{ backgroundColor: '#DEE0E1', marginTop: '12px', borderRadius: '10PX', padding: '5PX' }}>
                      {
                        ele.change < 0 ? (<h3>Change:  <span className='red'><ArrowDownOutlined />{(ele.change)}%</span></h3>) : (<h3 className='h3'>Change: <span className='blue'><ArrowUpOutlined />{(ele.change)}%</span></h3>)
                      }

                    </CardContent>
                    <CardContent sx={{ backgroundColor: '#DEE0E1', marginTop: '12px', borderRadius: '10PX', padding: '5PX' }}>

                      <h3 className='h3'>Market Capital : {millify(ele.marketCap)}</h3>

                    </CardContent>


                  </CardContent>
                </Card>
              </Link>

            </Stack>
            )
          })

        }
      </Stack>

      <div style={{backgroundColor:'#0E1B62'}}>
         <Cardsss />
      </div>
     

    </>




  )
}

export default CryptoCurrency