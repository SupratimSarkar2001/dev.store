import React from 'react'
import { Link } from 'react-router-dom'
import { Search, PersonOutline, ShoppingCartOutlined } from '@mui/icons-material'
import './Navbar.scss'
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className='link' to="/products/books">Books</Link>
          </div>
          <div className="item">
            <Link className='link' to="/products/gadgets">Gadgets</Link>
          </div>
          <div className="item">
            <Link className='link' to="/products/Accessories">Accessories</Link>
          </div>
        </div>
        <div className="center">
          <Link className='link' to="/">DEV.STORE</Link>
        </div>
        <div className="right">
          <div className="icons">
            <Search />
            <PersonOutline />
            <div className="cartIcon">
            <ShoppingCartOutlined />
            <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

