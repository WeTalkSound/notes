import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Overlay from 'Components/Utilities/Overlay/Overlay'
import Flex from 'Components/Utilities/Layout/Containers/Flex'
import SearchFormWithButton from 'Components/Entities/Search/Renders/SearchFormWithButton'
import ContainerWithRow from 'Components/Utilities/Layout/Containers/ContainerWithRow'
import Column from 'Components/Utilities/Layout/Containers/Column'

export default function Navbar() {

  const [ openMenuDrawer, setOpenMenuDrawer ] = useState(false)
  const [ openSearchDrawer, setOpenSearchDrawer ] = useState(false)

  const NavLinks = () => (
    <ul>
      <li><Link onClick={ () => {setOpenMenuDrawer(false)} } to="/">Home</Link></li>
      <li><Link onClick={ () => {setOpenMenuDrawer(false)} } to="/posts">All Posts</Link></li>
      <li><Link onClick={ () => {setOpenMenuDrawer(false)} } to="/categories/music">Music</Link></li>
      <li><Link onClick={ () => {setOpenMenuDrawer(false)} } to="/categories/insights">Insights</Link></li>
      <li><Link onClick={ () => {setOpenMenuDrawer(false)} } to="/categories/conversations">Conversations</Link></li>
      <li><Link onClick={ () => {setOpenMenuDrawer(false)} } to="/categories/community">Community</Link></li>
      <li>
        <a className="mr-3" href="https://facebook.com/wetalksound"><i className="fab fa-facebook"></i></a>&nbsp;
        <a className="mr-3" href="https://twitter.com/wetalksound"><i className="fab fa-twitter"></i></a>&nbsp;
        <a className="mr-3" href="https://instagram.com/wetalksound"><i className="fab fa-instagram"></i></a>
      </li>
    </ul>
  )

  return (
    <>
      <div className="Navbar">
        <div className="container">
          <div className="Navleft"> 
            <Link className="logo" to="/">
              <img src="https://services.etin.space/demos/wts-logo.png" alt="WTS Blog" className="img-fluid" />
            </Link>
          </div>
          <div className="Navright">
            <div className="NavLinks d-sm-block d-none">
              <NavLinks />
            </div>
            <div className="collapse-menu d-block d-sm-none">
              <i onClick={ () => { setOpenMenuDrawer(true) } } className="fas fa-bars"></i>
            </div>
            <div className="search-btn d-block d-sm-none">
              <i onClick={ () => { setOpenSearchDrawer(true) } } className="fas fa-search"></i>
            </div>
          </div>
          <div className="MenuDrawer">
            {
              openMenuDrawer ?
                <Overlay close={ () => {setOpenMenuDrawer(false)} }>
                  <Flex 
                    alignItems="center"
                    justifyContent="center"
                  >
                    <NavLinks />
                  </Flex>
                </Overlay>
                :
                ''
            }
          </div>
          <div className="SearchDrawer">
            {
              openSearchDrawer ?
                <Overlay close={ () => {setOpenSearchDrawer(false)} }>
                  <Flex 
                    alignItems="center"
                    justifyContent="center"
                  >
                    <ContainerWithRow style={{textAlign:"center"}}>
                      <Column size="12">
                        <h3>Search across our articles</h3>
                        <SearchFormWithButton 
                          onSearch={ () => {setOpenSearchDrawer(false)} } 
                        />
                      </Column>
                    </ContainerWithRow>
                  </Flex>
                </Overlay>
                :
                ''
            }
          </div>
        </div>
      </div>
    </>
  )
}
