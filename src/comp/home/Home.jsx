
import { Link } from 'react-router-dom'
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react'
import { useGetCryptosQuery } from '../../services/cryptoApi'
import { Card, CardContent, Stack, Button } from '@mui/material';
import millify from 'millify';
import News from '../news/news';

import Loader from '../loader/loader';
import Cardsss from './card/card'

const Home = () => {

  const { data, isFetching } = useGetCryptosQuery();
  console.log(data)
  const [sttes, setsttes] = useState(data?.data?.coins)
  const numberFormat = (value) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'USD'
    }).format(value);

  useEffect(() => {

    setsttes(data?.data?.coins)


  }, [data])

  if (isFetching) return <Loader />
  return (
// 450
    <>
    

      <Stack className='sup' direction="row" spacing={2} sx={{padding:{xs:'5px',sm:'24px',md:'4px'},textAlign:{xs:'center',sm:'left'}}}   flexWrap={'wrap'} justifyContent={'center'}  alignItems={'center'}>
        <CardContent sx={{ width:{xs:500,sm:800,md:425,lg:500} }}>
          <h1 className='home_h1' >
            Be the first to know about <b style={{ color: '#F65603' }}>crypto news every day.</b>
          </h1>
          <p className='home_p'>
            Get crypto analysis, news and updates right to your inbox! Sign up here so you don't miss a single newsletter.
          </p><br></br>
          <Link className='home_butt' to={'/cryptocurency'} >Explore-More</Link>

        </CardContent>

        <CardContent sx={{width:450} }>

          <img className='home_img' src="https://s2.coinmarketcap.com/static/cloud/img/newsletter_bg_light.svg?_=872fb24" alt="" />

        </CardContent>

      </Stack><br /><br /><br /><br />
      {/* ======================================= */}



      {/* <Stack className='nav2' p={4} fontSize={12} direction={'row'} gap={4}  justifyContent={'center'} alignItems={'center'}> */}
      
      {/* </Stack> */}



 

      <div style={{ backgroundColor: '#DEE0E1' }}>
        


      <Stack backgroundColor={'#191934'}>a</Stack>

 

        <CardContent sx={{ padding: 6, textAlign: 'center' }}>
          <h1 className='home_h1' >
            Explore Top Crypto's Like <span style={{ color: '#F65603' }}>Bitcoin, Etherium and Dogecoin.</span>
          </h1>
        </CardContent>
        {/*  */}

        <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'center'} p={4} gap={3}>

          {


            sttes && sttes.slice(0, 7).map((ele) => {
              console.log(ele)
              return (
                <Stack key={ele.uuid} justifyContent={'center'}>

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

          <CardContent sx={{textAlign:'center'}}>
            <p className='home_p'>
              See All Awailable Assets.          </p><br></br>
            <Link className='home_butt' to={'/cryptocurency'}>See more-Coins</Link>
          </CardContent>
        </Stack>
        

 <br />

    <Stack backgroundColor={'#191934'}>a</Stack>
      </div>

      <Cardsss />
    <br />

      <News />























    </>
  )
}

export default Home