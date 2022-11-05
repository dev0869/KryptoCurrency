import React, { useEffect, useState } from 'react'
import HTMLReactParser from 'html-react-parser'
import { useParams } from 'react-router-dom'
import { useGetDetailsQuery } from '../../services/cryptoApi'
import { useGetHistoryQuery } from '../../services/cryptoApi'
import Loader from '../loader/loader'
import {  CardContent, Button, Stack } from '@mui/material'
import LineChart from '../LineChart/lineChart'
import millify from 'millify'



const Detail = () => {

    const { uuid } = useParams();

    const { data, isFetching } = useGetDetailsQuery(uuid);

    const [settes, setsettes] = useState(data?.data?.coin)

    const [timePeriod] = useState('')


    const { data: coinHistory } = useGetHistoryQuery(uuid, timePeriod);
    console.log(coinHistory?.data)
    const numberFormat = (value) =>
        new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'USD'
        }).format(value);

    useEffect(() => {
        setsettes(data?.data?.coin)
    }, [data]);

    if (isFetching) return <Loader />

    return (
        <Stack sx={{ backgroundColor: '#DEE0E1',paddingTop:'18px' }} >
            <Stack direction={'row'} p={1} flexWrap={'wrap'} justifyContent={'space-between'} >
                <CardContent >
                    <Stack p={2}>
                        <h1 style={{ alignItems: 'center' }}><img className='logos' src={settes && settes.iconUrl} alt="" /><span className='Span'>{settes && settes.name}</span></h1>
                    </Stack>

                    <Stack direction={'row'} gap={1} flexWrap={'wrap'}>
                        <Button sx={{ fontWeight: 'bold' }} variant="contained" disabled>
                            <h3 className='h1' style={{ color: 'gray' }}>Rank: #{settes && settes.rank}</h3>
                        </Button>

                        <Button sx={{ fontWeight: 'bold' }} variant="contained" disabled>
                            <h3 className='h1' style={{ color: 'gray' }}>{settes && settes.symbol}</h3>
                        </Button>

                        <Button sx={{ fontWeight: 'bold' }} variant="contained" disabled>
                            <h3 className='h1' style={{ color: 'gray' }}> {settes && settes.tags}</h3>
                        </Button>
                    </Stack>

                </CardContent>



                <CardContent>

                    <Stack p={2} sx={{ fontSize: 18 }}>
                        <h4 style={{ color: '#F65603' }}>{settes && settes.name} price <span>({settes && settes.symbol})</span></h4>
                        <Stack direction={'row'} gap={2} p={1}>

                            <Button sx={{ fontWeight: 'bold', cursor: 'none' }} variant="contained" diabled >
                                <h1>{numberFormat(settes && settes.price)}</h1>

                            </Button>


                        </Stack>
                        <Stack p={1} fontSize={14} color={'black'}>
                            <h3>All Time High Price : <span style={{ color: '#0071BD' }}>${millify(settes && settes.allTimeHigh?.price)}</span> </h3>
                            <h3>Total exchanges : <span style={{ color: '#0071BD' }}>{millify(settes && settes.numberOfExchanges)}</span></h3>
                            <h3>Total Markets : <span style={{ color: '#0071BD' }}>{millify(settes && settes.numberOfMarkets)}</span></h3>
                        </Stack>
                    </Stack>
                </CardContent>
            </Stack>
            <hr />
            {/* asjdddddddddd */}
            {/* <LineChart coinHistory={coinHistory} currentPrice={millify(settes && settes.price)} coinName={settes && settes.name} /> */}

            <LineChart coinHistory={coinHistory} currentPrice={millify(settes && settes.price)} coinName={settes && settes.name} />
            {/* -------------------------------------------- */}

            <Stack flexWrap={'wrap'} direction={'row'} sx={{ padding: { xs: '10px', sm: '48px', md: '48px' } }} justifyContent={'center'}>
                <CardContent>
                    <h1 style={{textAlign:'center'}}>Value statistics</h1>
                    <p style={{textAlign:'center',marginTop:'10px'}}>An overview showing the statistics of Bitcoin, such as the base and quote currency, the rank, and trading volume.</p>

                    <CardContent>
                        <Stack direction={'row'} pt={3} pb={3} justifyContent={'space-between'} alignItems={'center'}>
                            <p style={{    marginBottom: '0em'}}> <span style={{ paddingRight: 5 }}><img src="https://cdn.coinranking.com/assets/3bc76b90ac5fa7a9d0ebb3eadd0db736.svg" loading="lazy" alt="" class="stats__img" /></span> Price to USD</p>
                            <h2>$ {millify(settes && settes.price)}</h2>
                        </Stack>
                        <hr />
                        <Stack direction={'row'} pt={3} pb={3}  justifyContent={'space-between'} alignItems={'center'}>
                            <p style={{    marginBottom: '0em'}}><span style={{ paddingRight: 5 }}><img src="https://cdn.coinranking.com/assets/d5dc50712c0ee405fdacef50c1076d7f.svg" loading="lazy" alt="" class="stats__img" /></span> Price to BTC</p>
                            <h2>{millify(settes && settes.btcPrice)} BTC</h2>
                        </Stack>
                        <hr />
                        <Stack direction={'row'} pt={3} pb={3} justifyContent={'space-between'} alignItems={'center'}>
                            <p style={{    marginBottom: '0em'}}><span style={{ paddingRight: 5 }}><img src="https://cdn.coinranking.com/assets/71798b73ccd1acf2b7cecd584238b810.svg" loading="lazy" alt="" class="stats__img" /></span> Rank</p>
                            <h2>#{millify(settes && settes.rank)}</h2>
                        </Stack>
                        <hr />

                        <Stack direction={'row'} pt={3} pb={3}  justifyContent={'space-between'} alignItems={'center'}>
                            <p style={{    marginBottom: '0em'}}><span style={{ paddingRight: 5 }}><img src="https://cdn.coinranking.com/assets/393c694ac4e62408003ed1617d009626.svg" loading="lazy" alt="" class="stats__img" /></span> Fully diluted market cap</p>
                            <h2>$ {settes && millify(settes.fullyDilutedMarketCap)}</h2>
                        </Stack>
                        <hr />
                        <Stack direction={'row'} pt={3} pb={3}  justifyContent={'space-between'} alignItems={'center'}>
                            <p style={{    marginBottom: '0em'}}><span style={{ paddingRight: 5 }}><img src="https://cdn.coinranking.com/assets/393c694ac4e62408003ed1617d009626.svg" loading="lazy" alt="" class="stats__img" /></span> Market cap</p>
                            <h2>$ {millify(settes && settes.marketCap)}</h2>
                        </Stack>
                        <hr />
                        <Stack direction={'row'}pt={3} pb={3}  justifyContent={'space-between'} alignItems={'center'}>
                            <p style={{    marginBottom: '0em'}}><span style={{ paddingRight: 5 }}><img src="https://cdn.coinranking.com/assets/6dc3ae58ba61dc653ea96cfc969c581a.svg" loading="lazy" alt="" class="stats__img" /></span> All-time high (daily avg.)</p>
                            <h2>$ {millify(settes && settes.allTimeHigh?.price)}</h2>
                        </Stack>
                        <hr />
                    </CardContent>




                </CardContent>



                {/* ----------------------------------------- */}


                <CardContent>


                    <h1 style={{textAlign:'center'}}>Supply information</h1>
                    <p style={{textAlign:'center',paddingTop:'5px' }}>View the total and circulating supply of Bitcoin, including details on how the supplies are calculated.</p>
                    <CardContent>
                        <Stack direction={'row'}pt={3} pb={3} justifyContent={'space-between'} alignItems={'center'}>
                            <p style={{    marginBottom: '0em'}}> Circulating Supply</p>
                            <h2> {millify(settes && settes.supply?.circulating)} {settes && settes.symbol}</h2>
                        </Stack>
                        <hr />
                        <Stack direction={'row'}pt={3} pb={3} justifyContent={'space-between'} alignItems={'center'}>
                            <p style={{    marginBottom: '0em'}}> Total supply</p>
                            <h2>{millify(settes && settes.supply?.total)} {settes && settes.symbol}</h2>
                        </Stack>
                        <hr />
                        <Stack direction={'row'}pt={3} pb={3} justifyContent={'space-between'} alignItems={'center'}>
                            <p style={{    marginBottom: '0em'}}> Max supply </p>
                            <h2>{millify(settes && settes.supply?.max)} {settes && settes.symbol}</h2>
                        </Stack>
                        <hr />


                    </CardContent>

                </CardContent>






            </Stack>

















































{/* 

            <Stack p={4} direction={'row'} flexWrap={'wrap'} gap={2} justifyContent={'center'}>
                <Card style={{ fontSize: 18, textAlign: 'center' }} sx={{ width: 250 }}>
                    <Stack p={3}>
                        <CardContent><p>Market Cap</p>
                            <h2>${settes && millify(settes.marketCap)}</h2>
                            {
                                settes && settes.change < 0 ? (<h3> <span className='red'><ArrowDownOutlined />{millify(settes && settes.change)}%</span></h3>) : (<h3 className='h3'> <span className='blue'><ArrowUpOutlined />{millify(settes && settes.change)}%</span></h3>)
                            }


                        </CardContent>
                    </Stack>
                </Card>


                <Card style={{ fontSize: 18, textAlign: 'center' }} sx={{ width: 250 }}>
                    <Stack p={4} >
                        <CardContent  ><p>fullyDilutedMarketCap</p>
                            <h2>${settes && millify(settes.fullyDilutedMarketCap)}</h2>
                            {
                                settes && settes.change < 0 ? (<h3> <span className='red'><ArrowDownOutlined />{millify(settes && settes.change)}%</span></h3>) : (<h3 className='h3'> <span className='blue'><ArrowUpOutlined />{millify(settes && settes.change)}%</span></h3>)
                            }
                        </CardContent>
                    </Stack>
                </Card>


                <Card style={{ fontSize: 18 }} sx={{ width: 350, textAlign: 'center' }}>
                    <CardContent>
                        <p>Circullating Supply</p>
                        <h2>${settes && millify(settes?.supply?.circulating)}  {settes && settes.symbol}</h2>
                    </CardContent>
                    <Stack justifyContent={'center'} direction={'row'}>
                        <CardContent>
                            <p>Max Supply</p>
                            <h4>${settes && millify(settes?.supply?.max)} </h4>
                        </CardContent>
                        <CardContent>
                            <p>Total Supply</p>
                            <h4>${settes && millify(settes?.supply?.total)} </h4>
                        </CardContent>
                    </Stack>
                </Card>
            </Stack> */}

            <Stack p={4} fontSize={18}>
                <CardContent className='content'>
                    <h1>what is <span style={{ color: 'red' }}> {settes && settes.name}</span></h1>
                   <p style={{textAlign:'justify'}}> {HTMLReactParser(`${settes && settes.description}`)}</p>
                </CardContent>
            </Stack>
        </Stack>

    )
}

export default Detail