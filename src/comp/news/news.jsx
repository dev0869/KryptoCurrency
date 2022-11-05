import React, { useState, useEffect } from 'react'
import { Card, CardContent } from '@mui/material';
import { useGetNewsQuery } from '../../services/newsAPi'
import { Stack } from '@mui/system';
import moment from 'moment/moment';
import { Typography } from '@mui/material';
import Loader from '../loader/loader';



const News = () => {
  const { data, isFetching } = useGetNewsQuery()

  const [Info, setInfo] = useState(data?.value)
  console.log(Info)


  useEffect(() => {
    setInfo(data?.value)

  }, [data])

  if (isFetching) return <Loader />
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Typography variant='h3' sx={{ padding: { xs: 3, md: 3 },textAlign:{xs:'center',sm:'left'} }} fontWeight={600} alignItems={'center'} >
        <span className='svg4'><svg className='svg3' focusable="false" viewBox="0 0 24 24"><path d="M12 11h6v2h-6v-2zm-6 6h12v-2H6v2zm0-4h4V7H6v6zm16-7.22v12.44c0 1.54-1.34 2.78-3 2.78H5c-1.64 0-3-1.25-3-2.78V5.78C2 4.26 3.36 3 5 3h14c1.64 0 3 1.25 3 2.78zM19.99 12V5.78c0-.42-.46-.78-1-.78H5c-.54 0-1 .36-1 .78v12.44c0 .42.46.78 1 .78h14c.54 0 1-.36 1-.78V12zM12 9h6V7h-6v2"></path></svg></span> <span className='svg2'>  Latest News  </span>

        <span className='svg'>           <svg className='news-svg' focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
        </span>
      </Typography>



      <Stack direction={'row'} flexWrap={'wrap'} gap={7} justifyContent={'center'} p={1}>


        {Info && Info.slice(0, 5).map((ele) => (


          <Card sx={{ width: { xs: 500, sm: 650, md: 500, lg: 500 } }}  >


            <Stack sx={{ flexDirection: { xs: 'column', md: 'row', sm: 'row' }, textAlign: { xs: 'left', sm: 'left', md: 'left' } }} justifyContent={'space-between'} p={2} gap={2} alignItems={'center'} key={ele.Id} >
              <h2>{ele.name}</h2>
              <img src={ele.image?.thumbnail?.contentUrl} alt="" />
            </Stack>
            <CardContent sx={{ fontSize: 16 }}>
              <p>
                {ele.description}
              </p>

              <Stack direction={'row'} p={3} alignItems={'center'} justifyContent={'space-between'} >

                <p className='p'><span>                <img className='logo' src={ele.provider[0]?.image?.thumbnail?.contentUrl} alt="" />
                </span>{moment(ele.datePublished).startOf('ss').from()}</p>

                <button className='home_butt' onClick={() => openInNewTab(ele.url)}>
                  Read-More
                </button>
              </Stack>
            </CardContent>
          </Card>



        ))}
      </Stack>
    </>
  )
}

export default News