import React from 'react'
import Categories from './Categories'
import Header from './Header'
import Products from './Products'
import Users from './Users'

function Home() {
  return (
    <>
      <Header />
      <Products />
      <Categories />
      <Users />
    </>
  )
}

export default Home