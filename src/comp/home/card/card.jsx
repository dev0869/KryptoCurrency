import React from 'react'
import millify from 'millify'
import { CardContent } from '@mui/material'
import { useGetCryptosQuery } from '../../../services/cryptoApi'
import {Stack} from '@mui/material'
const Cardsss = () => {

  const { data, isFetching } = useGetCryptosQuery();

  const states = data?.data?.stats;
  console.log(states)
  if (isFetching) return 'Loading.....'


  return (

    <>
  <Stack className='nav2' flexDirection={'row'} alignItems={'center'} fontSize={18} p={2}>


    
  <CardContent>
                    <h1 style={{textAlign:'center'}}> Cryptocurrency market statistics</h1>
                    <p style={{textAlign:'center',marginTop:'10px'}}>
                    An overview of the complete cryptocurrency market, including the number of cryptocurrencies, the total market cap, and trading volume.
                    </p>

                    <CardContent>
                        <Stack direction={'row'} pt={3} pb={3} justifyContent={'space-between'} alignItems={'center'}>
                            <p style={{    marginBottom: '0em'}}> <span style={{ paddingRight: 5 }}><img src="https://cdn.coinranking.com/assets/393c694ac4e62408003ed1617d009626.svg" loading="lazy" alt="" className="stats__img" /></span> Crypto market cap</p>
                            <h2>$ {millify(states.totalMarketCap)}</h2>
                        </Stack>
                        <hr />
                        <Stack direction={'row'} pt={3} pb={3}  justifyContent={'space-between'} alignItems={'center'}>
                            <p style={{    marginBottom: '0em'}}><span style={{ paddingRight: 5 }}><img src="https://cdn.coinranking.com/assets/b78e552433d71e96938327c805491a88.svg" loading="lazy" alt="" className="stats__img" /></span> 24h volume</p>
                            <h2> $ {millify(states.total24hVolume)} </h2>
                        </Stack>
                        <hr />
                        <Stack direction={'row'} pt={3} pb={3} justifyContent={'space-between'} alignItems={'center'}>
                            <p style={{    marginBottom: '0em'}}><span style={{ paddingRight: 5 }}><img src="https://cdn.coinranking.com/assets/3bc76b90ac5fa7a9d0ebb3eadd0db736.svg" loading="lazy" alt="" className="stats__img" /></span>  ALL Coins</p>
                            <h2>{millify(states.total)}</h2>
                        </Stack>
                        <hr />

                        <Stack direction={'row'} pt={3} pb={3}  justifyContent={'space-between'} alignItems={'center'}>
                            <p style={{    marginBottom: '0em'}}><span style={{ paddingRight: 5 }}><img src="https://cdn.coinranking.com/assets/eb68dd1c3c620bff1687822404ce1dd1.svg" loading="lazy" alt="" className="stats__img" /></span>  All crypto exchanges</p>
                            <h2> {millify(states.totalExchanges)}</h2>
                        </Stack>
                        <hr />
                        <Stack direction={'row'} pt={3} pb={3}  justifyContent={'space-between'} alignItems={'center'}>
                            <p style={{    marginBottom: '0em'}}><span style={{ paddingRight: 5 }}><img src="https://cdn.coinranking.com/assets/592583da48b859913050d84ee6c2cc77.svg" loading="lazy" alt="" className="stats__img" /></span>  All crypto markets</p>
                            <h2>{millify(states.totalMarkets)}</h2>
                        </Stack>
                        <hr />
                        
                     
                        </CardContent>
                    </CardContent>




      </Stack>
    </>












  )
}

export default Cardsss