import React from 'react'
import Banner from '../components/Banner';
import Category from '../components/Category';
import Products from './Products';
import NewArrivals from './NewArrivals';
import Discount from './Discount';
import OrderMethod from './OrderMethod';


const Home = () => {
  return (
   <>
   <Banner />
   <Category/>
   <Products/>
   <NewArrivals/>
   <Discount/>
   <OrderMethod/>
   </> 
  )
}

export default Home;