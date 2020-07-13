import React, { Component } from "react";
import {MDBNavbar, MDBNavbarBrand } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

class NavbarPage extends Component {
render() {
  return (
    <Router>
      <MDBNavbar className="justify-content-center" color="blue darken-2" dark expand="md">
        <MDBNavbarBrand>
          <i className="fa fa-shopping-cart" aria-hidden="true"></i><strong className="white-text"> GROCERY SHOPPING LIST</strong>
        </MDBNavbarBrand>
      </MDBNavbar>
    </Router>
    );
  }
}

export default NavbarPage;