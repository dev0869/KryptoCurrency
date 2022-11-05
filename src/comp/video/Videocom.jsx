import React from 'react'
import { Card ,CardMedia,Typography,CardContent} from '@mui/material'

const Videocom = () => {
  return (
   <Card sx={{maxWidth:'300px'}} className='grid'>
    <CardMedia >

<img className='image' src="  https://mui.com/static/images/cards/contemplative-reptile.jpg " alt="" />

    </CardMedia>
    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>





   </Card>
  )
}

export default Videocom