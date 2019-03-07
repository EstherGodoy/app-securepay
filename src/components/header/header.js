import React, { Component } from 'react';
import logo from './images/logo.png';
import {
  Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
      	<figure className="container">
	      	<img className="logo" src={logo} alt="SecurePay" />
	      	{/*<Link to="/">Home</Link>
	      	 <Link to="/Contact">Contact</Link>*/}
      	</figure>
      </header>
    );
  }
}

export default Header;