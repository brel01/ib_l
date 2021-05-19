import React, { useEffect, useState, onClick} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faMoneyBill, faChartLine, faSync, faHandshake, faCheck, faArrowRight, faArrowLeft, faGlobe, faSearch} from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import {Link, Redirect} from 'react-router-dom';
import Logo from '../../vector/logo.svg';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
    }
  }

  componentDidMount(){
    if(window.sessionStorage.getItem("loggedIn") == "true"){
      // return true;
      this.setState({loggedIn:true})
    }else{
    }
  }

  logOutFunction(){
    window.sessionStorage.setItem("i_user_xid", "");
    window.sessionStorage.setItem("loggedIn", false);
    this.setState({loggedIn:false});
  }


  render() {
    // const LoggedIn = this.checkLogInStatus();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark" className="navMargin" style={{backgroundColor:'transparent'}}>
              <Link to="/">
                <Navbar.Brand>
                  <div id="logo">
                    <img src={Logo} id="vector"/>
                  </div>
                </Navbar.Brand>
              </Link>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Link>
                    <Nav.Link href="#features" id="nav1" >Home</Nav.Link>
                  </Link>
                  <Link to="/events">
                    <Nav.Link href="#pricing" id="nav2">LiveEvents</Nav.Link>
                  </Link>
                  <Link>
                    <Nav.Link href="#pricing" id="nav3" >Contact</Nav.Link>
                  </Link>
                  <Link>
                    <Nav.Link href="#pricing" id="nav4">Blog</Nav.Link>
                  </Link>
                </Nav>
                <Nav>

                    <div className="flexRow flexStart">

                      { this.state.loggedIn == true ?
                        <div className="flexStart navClass" >
                          <Link to="/dashboard">
                            <Button variant="primary" id="loginBtn"><span id="loginBtnTxt">Dashboard</span></Button>{' '}
                          </Link>
                          <Link to="/login">
                            <Button variant="primary" id="signUpBtn"><span id="signUpBtnTxt" onClick={()=>{this.logOutFunction()}}> Sign Out</span></Button>{' '}
                          </Link>                          
                        </div>
                        :
                        <div className="flexStart navClass" >
                          <Link to="/login">
                            <Button variant="primary" id="loginBtn"><span id="loginBtnTxt">Login</span></Button>{' '}
                          </Link>
                          <Link to="/login">
                            <Button variant="primary" id="signUpBtn"><span id="signUpBtnTxt"> Sign Up</span></Button>{' '}
                          </Link>
                        </div>
                       }

                      <div className="navClass flexDirectionRow">
                        <FontAwesomeIcon className="flexEnd" style={{marginTop:10, color:'#ffffff'}} icon={faGlobe}/>
                        <p style={{marginLeft:3, color:'#ffffff', marginTop:8, fontSize:13}}>EN</p>
                      </div>
                    </div>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
}

export default NavBar
