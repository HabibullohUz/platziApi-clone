import React from 'react'

function Header() {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header-left">
            <div className="header-logo">
              <svg width="60" height="60" fill="#98ca3f" viewBox="0 0 24 24">
                <path d="M10.64 1.127L2.487 9.282a3.842 3.842 0 000 5.436l8.155 8.155a3.842 3.842 0 005.436 0l2.719-2.718-2.719-2.718-2.718 2.718L5.204 12l8.155-8.155 5.437 5.437-5.437 5.436 2.718 2.719L21.514 12a3.842 3.842 0 000-5.437l-5.448-5.436a3.828 3.828 0 00-5.425 0Z"></path>
              </svg>
              <span className='site-name'>Platzi Fake Store API</span>
            </div>
            <p className='header-p'>
              Fake store rest API for your e-commerce or shopping website prototype.
            </p>
            <button className='header-btn'><a href="1">VIEW DOCS</a></button>
          </div>
          <div className="header-right">
            <img className='header-img' src="https://fakeapi.platzi.com/fake-api.png" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header