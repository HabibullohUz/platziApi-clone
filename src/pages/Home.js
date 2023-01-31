import React from 'react'
import Categories from './Categories'
import Header from './Header'
import Products from './Products'
import Users from './Users'

function Home() {
  return (
    <div className='container'>
      <Header />
      <Products />
      <Categories />
      <Users />
    </div>
  )
}

export default Home