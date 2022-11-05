// import React from 'react';
// import { CardContent, Stack } from '@mui/material';
// import { Link } from 'react-router-dom';
// import { useGetMDetailsQuery } from '../../services/cryptoApi';
// // import Loader from '../loader/loader';


// const Exchanges = () => {
//     const { data, isFetching } = useGetMDetailsQuery();
//     const BCoin = data?.data?.bestCoins;
//     const NCoin = data?.data?.newestCoins;
//     console.log(BCoin)
//     if (isFetching) return <Loader />;

//     return (
//         <>

//             <h1 style={{textAlign:'center',padding:4}}><img src="https://s2.coinmarketcap.com/static/cloud/img/TrendingIcon.png?_=e77707c" alt='img' loading="lazy" /> Best Coins..</h1>
//             <Stack direction={'row'}  justifyContent={'space-around'} flexWrap={'wrap'}>

//                 {BCoin && BCoin.map((ele) => {

//                     return (
//                         <Stack direction={'row'} justifyContent={'space-between'} key={ele.uuid}>
//                             <Link style={{ textDecoration: 'none', }} to={`/cryptocurency/crypto/${ele.uuid}`} key={ele.uuid} >
//                                 <CardContent>
//                                     <Stack direction={'row'} p={2} >

//                                         <CardContent sx={{ width: 200, textAlign: 'center', padding: 4 }} className='DESIGNN'>
//                                             <img src={ele.iconUrl} alt="img" width={40} />
//                                             <h3> {(ele.name)} ({(ele.symbol)}) </h3>
//                                         </CardContent>
//                                     </Stack>

//                                 </CardContent>
//                             </Link>
//                         </Stack>

//                     )
//                 })}
//             </Stack>

//         </>
//     );
// };

// export default Exchanges;