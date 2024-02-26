import React from 'react'
import Header from '../Header_footer/Header'
import Footer from '../Header_footer/Footer'
import Category from '../Filecomponent/Category'
import Products from '../Filecomponent/Products'
import Trend from '../Filecomponent/Trend'
import Discountpage from '../Filecomponent/Discountpage'
import Slider from '../Filecomponent/Common-Componant/Slider'

const Home = () => {
  return (
    <>
        <Header/>
        <Category/>
        <Products/>
        <Trend/>
        <Slider/>
        <Discountpage/>
        <Footer/>
    </>
  )
}

export default Home
