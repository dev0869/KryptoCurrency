import React from 'react'
import Header from './comp/header/header'
import { Routes, Route } from 'react-router-dom'
import Home from './comp/home/Home'
import Crypto from './comp/crytocurrency/Crypto'
import Newws from './comp/news/newws'
import Detail from './comp/Detail/detail'
import Footer from './comp/Footer/Footer'
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' exact element={<Home />}>   </Route>
        <Route path='/cryptocurency' exact element={<Crypto />}>   </Route>
        <Route path={`/cryptocurency/crypto/:uuid`} exact element={<Detail />}>   </Route>
        <Route path='/news' exact element={<Newws />}>   </Route>
    
      </Routes>
      
      <Footer/>
    </>
  )
}

export default App