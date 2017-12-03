import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import sections from '../../config/Sections.json';

class AppNav extends Component {

  render() {
    const navItem = sections.map((navItem, index) => {
      return (
        <NavItem key={index}>
          <Link to={`/sections/${navItem.value}`}>{navItem.label}</Link>
        </NavItem>
      );
    });
    
    return (
      <Navbar fixedTop={true}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">News Site</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          {navItem}  
        </Nav>
      </Navbar>
    )
  }
}

export default AppNav;