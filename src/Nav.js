import React from 'react'


const Nav = () => {

  return (
    <div>
      <nav>
      <div className="logo">
        <h1>
          sneakers
        </h1>
      </div>
      <div className='tabs' className='tabs'>
        <h2>Collections</h2>
        <h2>Men</h2>
        <h2>Women</h2>
        <h2>About</h2>
        <h2>Contact</h2>
      </div>
      <div className="nav-right">
        <div className="cart-icon">
        shopping cart here
        </div>
        <div className="profile-icon">
          profile image here
        </div>
      </div>
      </nav>
    </div>
    
  )
}

export default Nav