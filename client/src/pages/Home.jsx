import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider' 
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
    <Announcement/>
    <Navbar/>
    <Slider/>
    <Categories/>
    <Products/> //There is logic of filtering and sorting inside it
    <Newsletter/>
    <Footer/>
    </div>
  )
}

export default Home
