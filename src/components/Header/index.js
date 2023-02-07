// Write your JS code here

// Write your JS code here

import {Component} from 'react'
import Home from '../Home'
import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <nav className="nav-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="logo"
          />

          <ul className="nav-links">
            <li className="nav-link">Home</li>
            <li className="nav-link">Products</li>
            <li className="nav-link">Cart</li>
            <li className="nav-link">
              <button type="button" className="log-btn">
                Logout
              </button>
            </li>
          </ul>
        </nav>
        <nav className="nav-container-md">
          <div className="logo-container1">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="logo"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png "
              alt="nav logout"
              className="nav-img"
            />
          </div>
          <ul className="nav-links-md">
            <li className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                alt="nav home"
                className="nav-img"
              />
            </li>
            <li className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                alt="nav products"
                className="nav-img"
              />
            </li>
            <li className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                alt="nav cart"
                className="nav-img"
              />
            </li>
          </ul>
        </nav>
        <Home />
      </div>
    )
  }
}

export default Header
