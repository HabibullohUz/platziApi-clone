import React from 'react'
import MainSection from './MainSection'

function Introduction() {
  return (
    <div>
      <div className="introduction-container">
        <div className="introduction-header-wrapper">
          <div className='introduction-logo'>
            <svg width="40" height="40" fill="#98ca3f" viewBox="0 0 24 24">
              <path d="M10.64 1.127L2.487 9.282a3.842 3.842 0 000 5.436l8.155 8.155a3.842 3.842 0 005.436 0l2.719-2.718-2.719-2.718-2.718 2.718L5.204 12l8.155-8.155 5.437 5.437-5.437 5.436 2.718 2.719L21.514 12a3.842 3.842 0 000-5.437l-5.448-5.436a3.828 3.828 0 00-5.425 0Z"></path>
            </svg>
            <span className='site-name'>Platzi Fake Store API</span>
          </div>
        </div>
        <div className="main-container">
          <div className="sidebar">
            <h3 className='sidebar-title'>REST API</h3>
            <ul>
              <li><a href="1">Introduction</a></li>
              <li><a href="1">Products</a></li>
              <li><a href="1">Filter Products</a> </li>
              <li><a href="1">Categories</a></li>
              <li><a href="1">Users</a></li>
              <li><a href="1">Auth JWT</a></li>
              <li><a href="1">Files</a></li>
              <li><a href="1">Swigger Docs</a></li>

              <h3 className='sidebar-title'>GRAPHQL</h3>
              <li><a href="1">Introduction</a></li>
              <li><a href="1">Products</a></li>
              <li><a href="1">Filter Products</a></li>
              <li><a href="1">Categories</a></li>
              <li><a href="1">Users</a></li>
              <li><a href="1">Auth JWT</a></li>
              <li><a href="1">Playground</a></li>

              <h3 className='sidebar-title'>RESOURCES</h3>
              <li><a href="1">Postman</a></li>
              <li><a href="1">Insomnia</a></li>
            </ul>
          </div>

          <div className="main">
            <MainSection />
          </div>

          <div className="on-this-page sidebar">
            <h3 className='sidebar-title'>ON THIS PAGE</h3>
            <ul>
              <li><a href="1">Filter by title</a></li>
              <li><a href="1">Filter by price</a></li>
              <li><a href="1">Filter by price range</a></li>
              <li><a href="1">Filter by category</a></li>
              <li><a href="1">Join filters</a></li>
            </ul>
          </div>
        </div>


      </div>
    </div >
  )
}
export default Introduction