import React from 'react'
import { Card, CardContent } from '@mui/material'
import { useGetCryptosQuery } from '../../../services/cryptoApi'
import millify from 'millify'
const Ccom = ({ api }) => {
  const{data,isFetching}=useGetCryptosQuery();
  
  const states=data?.data?.stats;
  console.log(states)
  if(isFetching) return 'Loading.....'


    return (
        api.map((ele) => {

            return (



                <Card>
                    <CardContent>
                      <h2>{millify(ele.name)}</h2>  
                      <p>{millify(states.totalMarketCap)}</p>
                    </CardContent>
                </Card>
            )


        })



    )
}

export default Ccom