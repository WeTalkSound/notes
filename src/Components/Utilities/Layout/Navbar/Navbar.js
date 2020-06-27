import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Overlay from 'Components/Utilities/Overlay/Overlay'

export default function Navbar() {

  const [ openDrawer, setOpenDrawer ] = useState(false)

  const NavLinks = () => (
    <ul>
      <li><Link onClick={ () => {setOpenDrawer(false)} } to="/">Home</Link></li>
      <li><Link onClick={ () => {setOpenDrawer(false)} } to="/about">About Us</Link></li>
      <li><Link onClick={ () => {setOpenDrawer(false)} } to="/posts">Posts</Link></li>
      <li><Link onClick={ () => {setOpenDrawer(false)} } to="/categories">Categories</Link></li>
    </ul>
  )

  return (
    <>
      <div className="Navbar">
        <div className="container">
          <div className="Navleft"> 
            <Link className="logo" to="/">
              <img src="https://services.etin.space/wts/wp-content/uploads/2020/06/logo.png" alt="WTS Blog" class="img-fluid" />
            </Link>
          </div>
          <div className="Navright">
            <div className="NavLinks d-sm-block d-none">
              <NavLinks />
            </div>
            <div className="collapse-menu d-block d-sm-none">
              <i onClick={ () => { setOpenDrawer(true) } } className="fas fa-bars"></i>
            </div>
            <div className="search-btn d-block d-sm-none">
              <i className="fas fa-search"></i>
            </div>
          </div>
        </div>
      </div>
      {
        openDrawer ?
          <Overlay close={ () => {setOpenDrawer(false)} }>
            <NavLinks />
          </Overlay>
          :
          ''
      }
    </>
  )
}
