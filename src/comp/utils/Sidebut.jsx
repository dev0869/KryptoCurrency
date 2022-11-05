import React from 'react'

const Sidebut = ({but}) => {
  return (
    but.map((ele)=>{
        return(



            <button className='but'>{ele.name}</button>
        )




    })


   
  )
}

export default Sidebut