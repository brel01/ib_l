import React, { useState, onClick} from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import TabPane from 'react-bootstrap/TabPane';

// import { Route, Switch, Redirect } from 'react-router-dom';

import { ListGroup, Card, CardColumns, Form, InputGroup, Dropdown,DropdownButton, NavLink, Figure} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import From from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Lato from './fonts/Lato/Lato-Light.ttf';
import SFProText from './fonts/SFProText.ttf';
import Ubuntu from './fonts/Ubuntu/Ubuntu-Bold.ttf';

import Logo from './vector/vector.png';
import Background from './m-4_M8uIfPEZw-unsplash.jpg';
import Background2 from './background2.png';
import Image1 from './images/image1.png';
import Lagos from './images/lagos.png';
import Accra from './images/accra.png';
import Amsterdam from './images/amsterdam.png';
import Texas from './images/texas.png';
import Seoul from './images/seoul.png';

import AppleStore from './images/appleStore.png';
import PlayStore from './images/playStore.png';

import Twitter from './images/twitter.png';
import Instagram from './images/instagram.png';
import Youtube from './images/youtube.png';

import Influencer1 from './images/influencer1.png';
import Influencer2 from './images/influencer2.png';
import Influencer3 from './images/influencer3.png';
import Influencer4 from './images/influencer4.png';
import Influencer5 from './images/influencer5.png';
import Influencer6 from './images/influencer6.png';


import PartyIcon from './icons/party.svg';

import Icon1 from './vector/icon1.png';

import Icon2 from './vector/icon2.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimes, faPortrait, faEyeSlash, faUser, faEnvelope, faInfo, faCoffee , faMoneyBill, faChartLine, faSync, faHandshake, faCheck, faArrowRight, faArrowLeft, faGlobe, faSearch} from '@fortawesome/free-solid-svg-icons'

import User1 from './icons/user1.svg';
import User2 from './icons/user2.svg';

import RecUser1 from './icons/recUser1.svg';
import RecUser2 from './icons/recUser2.svg';

import LoginSlideImg from './images/loginSlideImg.png';
import LoginSlideImg2 from './images/loginSlideImg2.png';
import LoginSlideImg3 from './images/loginSlideImg3.png';

import FacebookIcon from './icons/facebook.png';
import GoogleIcon from './icons/google.png';

import EnvelopeIcon from './icons/envelope.svg';
import PadLockIcon from './icons/padLock.svg';
import NgFlag from './icons/ngFlag.svg'
import SlashCircle from './icons/slashCircle.svg'
import './App.css';

import Aspect1 from './images/aspect1.svg';
import Aspect2 from './images/aspect2.svg';
import Aspect3 from './images/aspect3.svg';
import Aspect4 from './images/aspect4.svg';
import Aspect5 from './images/aspect5.svg';
import Aspect6 from './images/aspect6.svg';
import Aspect7 from './images/aspect7.svg';
import Aspect8 from './images/aspect8.svg';
import Aspect9 from './images/aspect9.svg';
import Aspect10 from './images/aspect10.svg';
import Aspect11 from './images/aspect11.svg';
import Aspect12 from './images/aspect12.svg';
import Aspect13 from './images/aspect13.svg';
import Aspect14 from './images/aspect14.svg';
import Aspect15 from './images/aspect15.svg';
import Aspect16 from './images/aspect16.svg';
import Aspect17 from './images/aspect17.svg';

class Ibloov extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      base_url: "https://ibloov-backend.herokuapp.com/",
      showLoginPage: false,

      showLoginBox: false,

      showLoginBtnColor: "",
      showLoginBtnBorderBottomColor: "#ffffff",

      showRegisterBox: false,

      showRegisterBoxBtnColor: "",
      showRegisterBtnBorderBottomColor: "rgba(0, 35, 123, 0.5)",

      userIcon: User1,
      userBoxBorderColor: '#ffffff',
      clickUser: false,
      userInfoIconColor: "#000000",
      userInfoIconBorderColor: "#000000",
      userInfoIconBackgroundColor: '#transparent',
      userBoxTxtColor: '#000000',

      eventMIcon: RecUser1,
      eventMBoxBorderColor: '#ffffff',
      clickEventM: false,
      eventMInfoIconColor: "#000000",
      eventMInfoIconBorderColor: "#000000",
      eventMInfoIconBackgroundColor: '#transparent',
      eventMBoxTxtColor: '#000000',

      selectUser: false,
      selectEventM: false,

      showUserEventM: false,
      showRegisterVerifyPhone: false,
      showForgotPwd: false,
      showForgotPwdBox2: false,
      errorTxt: "Facebook account not found",
      successTxt: 'SignUp Successful',

      aspect1: Aspect1,
      aspect2: Aspect2,
      aspect3: Aspect3,
      aspect4: Aspect4,
      aspect5: Aspect5,
      aspect6: Aspect6,
      aspect7: Aspect7,
      aspect8: Aspect8,
      aspect9: Aspect9,
      aspect10: Aspect10,
      aspect11: Aspect11,
      aspect12: Aspect12,
      aspect13: Aspect13,
      aspect14: Aspect14,
      aspect15: Aspect15,
      aspect16: Aspect16,
      aspect17: Aspect17,
    }
  }

  fetchEvents(){
    // window.base_url = "https://ibloov-backend.herokuapp.com/ ";
      var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImxvY2FsIjp7InBhc3N3b3JkIjoiJDJhJDEwJE5BQ2dCRjh1MlpBMGdkaUxCeGFndWUzcy9RbzN2aE93ZDhHUnBZSjl0em5TTVdnVWRRQVZHIiwiZmlyc3ROYW1lIjoiVG9rcyIsImxhc3ROYW1lIjoiT2pvIiwidmVyaWZpY2F0aW9uQ29kZSI6W119LCJpc1Bob25lTnVtYmVyVmVyaWZpZWQiOmZhbHNlLCJfaWQiOiI1ZTkyZTY0MjAzN2M3YmE1YmQzZGVkMDkiLCJlbWFpbCI6InRlc3Q3QHRlc3QuY29tIiwiYXV0aE1ldGhvZCI6ImxvY2FsIiwiaXNFbWFpbFZlcmlmaWVkIjpmYWxzZSwiY3JlYXRlZEF0IjoiMjAyMC0wNC0xMlQwOTo1ODoyNi4wNzhaIiwidXBkYXRlZEF0IjoiMjAyMC0wNC0xMlQwOTo1ODoyNi4wNzhaIn0sImlhdCI6MTU4NjY4NTUxNCwiZXhwIjoxNTg2NzI4NzE0fQ.SH6bfa-Px0v_XM7dSZr5Ug0vnA2YlE_kWOUDph9ltyM");

    var raw = "";

    var requestOptions = {
      method: 'GET',
      headers: {
        myHeaders,
      },
      redirect: 'follow',
    };

    fetch(this.state.base_url+"v1/event?category=house warming", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

  }

  componentDidMount(){
    var that = this;
    this.fetchEvents();
  }

  showHomePage(){
    this.setState({showLoginPage: false});
  }

  showLoginPage(){
    this.setState({showLoginPage:true});
  }

  showLoginBox(){
    this.setState({showLoginBox:true});
    this.setState({showLoginBtnColor:"#00237B"});
    this.setState({showLoginBtnBorderBottomColor:'rgba(0, 35, 123, 0.5)'});

    this.setState({showRegisterBoxBtnColor:"rgba(0, 35, 123, 0.5)"});
    this.setState({showRegisterBtnBorderBottomColor:'#ffffff'});
  }

  showRegisterBox(){
    this.setState({showLoginBox:false});
    this.setState({showRegisterBoxBtnColor:"#00237B"});
    this.setState({showRegisterBtnBorderBottomColor:'rgba(0, 35, 123, 0.5)'});

    this.setState({showLoginBtnColor:"rgba(0, 35, 123, 0.5)"});
    this.setState({showLoginBtnBorderBottomColor:'#ffffff'});

    this.hideUserEventM();
    if(this.state.selectUser == true){
      this.switchBox("user");
    }else if(this.state.selectEventM == true){
      this.switchBox("eventM");
    }
  }

  switchBox(type){
    if(type == 'user'){
      if(this.state.clickUser == false){
        this.setState({selectUser:true, selectEventM:false, userIcon: User2});
          this.setState({clickUser: true});
          this.setState({userBoxBorderColor:'rgba(0, 35, 123, 1)', userBoxTxtColor:'rgba(0, 35, 123, 1)', userInfoIconBorderColor: "rgba(0, 35, 123, 1)"});
          this.setState({userInfoIconBackgroundColor: "rgba(0, 35, 123, 1)", userInfoIconColor:'#ffffff'});
      }else {
          this.setState({selectUser:false, userIcon: User1});
          this.setState({clickUser: false});
          this.setState({userBoxBorderColor:'#ffffff', userBoxTxtColor:'#000000', userInfoIconBorderColor: "#000000"});
          this.setState({userInfoIconBackgroundColor: "transparent", userInfoIconColor:'#000000'});
      }

      this.setState({eventMIcon: RecUser1});
      this.setState({clickEventM: false});
      this.setState({eventMBoxBorderColor:'#ffffff', eventMBoxTxtColor:'#000000', eventMInfoIconBorderColor: "#000000"});
      this.setState({eventMInfoIconBackgroundColor: "transparent", eventMInfoIconColor:'#000000'});

    }else if(type == 'eventM'){
      if(this.state.clickEventM == false){
        this.setState({selectEventM:true, selectUser:false, eventMIcon: RecUser2});
        this.setState({clickEventM: true});
        this.setState({eventMBoxBorderColor:'rgba(0, 35, 123, 1)', eventMBoxTxtColor:'rgba(0, 35, 123, 1)', eventMInfoIconBorderColor: "rgba(0, 35, 123, 1)"});
        this.setState({eventMInfoIconBackgroundColor: "rgba(0, 35, 123, 1)", eventMInfoIconColor:'#ffffff'});
      }else {
        this.setState({selectEventM:false, eventMIcon: RecUser1});
        this.setState({clickEventM: false});
        this.setState({eventMBoxBorderColor:'#ffffff', eventMBoxTxtColor:'#000000', eventMInfoIconBorderColor: "#000000"});
        this.setState({eventMInfoIconBackgroundColor: "transparent", eventMInfoIconColor:'#000000'});
      }

      this.setState({userIcon: User1});
      this.setState({clickUser: false});
      this.setState({userBoxBorderColor:'#ffffff', userBoxTxtColor:'#000000', userInfoIconBorderColor: "#000000"});
      this.setState({userInfoIconBackgroundColor: "transparent", userInfoIconColor:'#000000'});
    }
  }

  showUserEventM(){
    if(this.state.selectUser == true){
      this.setState({showUserEventM:true});
    }else if(this.state.selectEventM == true){
      this.setState({showUserEventM:true});
    }
  }

  hideUserEventM(){
    this.setState({showUserEventM:false});
  }

  showForgotPwd(){
    this.setState({showLoginPage:false, showForgotPwd:true});
  }

  showRegisterVerifyPhone(){
    this.setState({showLoginPage:false, showForgotPwd:false, showRegisterVerifyPhone:true});
  }

  showForgotPwdBox2(){
    this.setState({showForgotPwdBox2:true});
  }

  render() {
    const nextIcon = (
      <span style={{borderColor:'#ffffff',  borderRadius:360, borderStyle:'solid', borderColor:'#ffffff', borderWidth:2}}>
        <FontAwesomeIcon icon={faArrowRight} size="xl" style={{color:"#ffffff",
         backgroundColor:'transparent', margin:2, marginTop:4.5, marginRight:5.5, marginLeft:5.5}}/>
      </span>
    );
    const prevIcon = (
      <span style={{borderColor:'#ffffff',  borderRadius:360, borderStyle:'solid', borderColor:'#ffffff', borderWidth:2}}>
        <FontAwesomeIcon icon={faArrowLeft} size="xl" style={{color:"#ffffff",
         backgroundColor:'transparent', margin:2, marginTop:4.5, marginRight:5.5, marginLeft:5.5}}/>
      </span>
    );

    const nextIcon2 = (
      <span style={{borderColor:'#000000',  borderRadius:360, borderStyle:'solid', borderColor:'#000000', borderWidth:2}}>
        <FontAwesomeIcon icon={faArrowRight} size="xl" style={{color:"#000000",
         backgroundColor:'transparent', margin:2, marginTop:4.5, marginRight:5.5, marginLeft:5.5}}/>
      </span>
    );
    const prevIcon2 = (
      <span style={{borderColor:'#000000',  borderRadius:360, borderStyle:'solid', borderColor:'#000000', borderWidth:2}}>
        <FontAwesomeIcon icon={faArrowLeft} size="xl" style={{color:"#000000",
         backgroundColor:'transparent', margin:2, marginTop:4.5, marginRight:5.5, marginLeft:5.5}}/>
      </span>
    );

    const ShowLoginPage = this.state.showLoginPage;

    const ShowLoginBox = this.state.showLoginBox;
    const ShowLoginBtnColor =  this.state.showLoginBtnColor;
    const ShowLoginBtnBorderBottomColor = this.state.showLoginBtnBorderBottomColor

    const ShowRegisterBox = this.state.showRegisterBox;
    const ShowRegisterBoxBtnColor =  this.state.showRegisterBoxBtnColor;
    const ShowRegisterBtnBorderBottomColor = this.state.showRegisterBtnBorderBottomColor;

    const UserIcon = this.state.userIcon;
    const UserBoxBorderColor = this.state.userBoxBorderColor;
    const UserInfoIconColor = this.state.userInfoIconColor;
    const UserInfoIconBorderColor =  this.state.userInfoIconBorderColor;
    const UserInfoIconBackgroundColor =  this.state.userInfoIconBackgroundColor;
    const UserBoxTxtColor = this.state.userBoxTxtColor;

    const EventMIcon = this.state.eventMIcon;
    const EventMBoxBorderColor = this.state.eventMBoxBorderColor;
    const EventMInfoIconColor = this.state.eventMInfoIconColor;
    const EventMInfoIconBorderColor =  this.state.eventMInfoIconBorderColor;
    const EventMInfoIconBackgroundColor =  this.state.eventMInfoIconBackgroundColor;
    const EventMBoxTxtColor = this.state.eventMBoxTxtColor;

    const ErrorTxt = this.state.errorTxt;
    const SuccessTxt =  this.state.successTxt;

    const TheAspect1 = this.state.aspect1;
    const TheAspect2 = this.state.aspect2;
    const TheAspect3 = this.state.aspect3;
    const TheAspect4 = this.state.aspect4;
    const TheAspect5 = this.state.aspect5;
    const TheAspect6 = this.state.aspect6;
    const TheAspect7 = this.state.aspect7;
    const TheAspect8 = this.state.aspect8;
    const TheAspect9 = this.state.aspect9;
    const TheAspect10 = this.state.aspect10;
    const TheAspect11 = this.state.aspect11;
    const TheAspect12 = this.state.aspect12;
    const TheAspect13 = this.state.aspect13;
    const TheAspect14 = this.state.aspect14;
    const TheAspect15 = this.state.aspect15;
    const TheAspect16 = this.state.aspect16;
    const TheAspect17 = this.state.aspect17;

    const RegisterLabel = (
      <p className="registerLabel">I agree to the <a><span style={{color:'blue', textDecoration: 'underline'}}>terms and conditions</span></a> and <a><span style={{color:'blue', textDecoration: 'underline'}}>privacy policy</span></a></p>
    )

    const ErrorBar = (
      <div className="errorBar">
        <img src={SlashCircle} id="successSlashCircle"></img>
        <p id="successTxt">{ErrorTxt}</p>
        <FontAwesomeIcon className="flexEnd"  id="successIcon" icon={faTimes} />
      </div>
    )

    const SuccessBar = (
      <div className="successBar">
        <FontAwesomeIcon className="flexEnd"  id="successSlashCircle" color="#00BA88" icon={faCheckCircle} />
        <p id="successTxt">{SuccessTxt}</p>
        <FontAwesomeIcon className="flexEnd"  id="successIcon" icon={faTimes} />
      </div>
    )
    const ShowRegisterVerifyPhone = this.state.showRegisterVerifyPhone;



    const SelectUser = this.state.selectUser;
    const SelectEventM =  this.state.selectEventM;

    const ShowUserEventM = this.state.showUserEventM;

    const ShowForgotPwd = this.state.showForgotPwd;

    const ShowForgotPwdBox2 = this.state.showForgotPwdBox2;

    const ForgotPwdBox1 = (
      <div>

        <div className="forgotPwdBox1">
          <p id="forgotPwdTxt1">Forgot Password</p>
          <p id="forgotPwdTxt2">If you need help resetting your password. we can help by sending you a link to reset it.</p>
          <div>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <div className="flexDirectionRow forgotPwdEmailInputBox" >
                  <div>
                    <img src={EnvelopeIcon} className="envelopeIcon"/>
                  </div>
                  <Form.Control type="email" size="sm" placeholder="Email Address" className="emailInput" style={{borderColor:'#ffffff'}}/>
                </div>
              </Form.Group>
              <button variant="primary" type="button" onClick={()=>{this.showForgotPwdBox2()}} className="forgotPwdBtn3">
                Send Instructions
              </button>
            </Form>
          </div>
        </div>
      </div>
    )

    const ForgotPwdBox2 = (
      <div className="forgotPwdBox2">
        <p id="forgotPwdTxt3">Check your mail</p>
        <p id="forgotPwdTxt4">We have sent password recovery instructions to your <span id="forgotPwdTxt5"> name@email.com</span></p>
        <p id="forgotPwdTxt6">If you have not received the email after a few minutes, please check your spam folder</p>
        <div>
            <div className="flexDirectionRow">
              <button variant="primary" type="button" className="forgotPwdBtn1">
                Resend Email
              </button>
              <button variant="primary" type="button" className="forgotPwdBtn2">
                Skip, I’ll confirm later
              </button>
            </div>
        </div>

        <div className="forgotPwdTxtContainer">
          <p id="forgotPwdTxt7">
            Did not receive the email? Check your spam filter, or <a id="forgotPwdTxt8">try another email address</a>
          </p>
        </div>
      </div>
    )

    const ForgotPwd = (
      <div>
         <div className="loginBanner1"  style={{margin:0, backgroundColor:'#00237B'}}>
           <div className="navContainer2" style={{backgroundColor:'#00021d'}}>
             <Container>
                <Navbar collapseOnSelect expand="lg" variant="dark" style={{margin:0,  backgroundColor:'#00021d'}}>
                  <Navbar.Brand href="#home">
                    <div id="logo">
                      <img src={Logo} id="vector"/>
                    </div>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                      <Nav.Link href="#features" id="nav1" >Home</Nav.Link>
                      <Nav.Link href="#pricing" id="nav2">LiveEvents</Nav.Link>
                      <Nav.Link href="#pricing" id="nav3" >Contact</Nav.Link>
                      <Nav.Link href="#pricing" id="nav4">Blog</Nav.Link>
                    </Nav>
                    <Nav>

                        <div className="flexRow flexStart">
                          <div className="flexStart">
                            <Button variant="primary" id="loginBtn" onClick={()=>{this.showLoginPage()}}><span id="loginBtnTxt">Login</span></Button>{' '}
                            <Button variant="primary" id="signUpBtn"><span id="signUpBtnTxt"> Sign Up</span></Button>{' '}
                          </div>

                          <FontAwesomeIcon className="flexEnd" style={{marginTop:10, color:'#ffffff'}} icon={faGlobe}/>
                          <p style={{marginLeft:3, color:'#ffffff', marginTop:8, fontSize:13}}>EN</p>
                        </div>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </Container>
            </div>
          </div>
          <div className="center loginBanner1">
            <div className="forgotPwdBoxBanner ">
              <Row style={{margin:0}}>
                <Col sm={5} style={{margin:0, padding:0}} >

                  <div  style={{height:'100%',}}>
                    <img src={LoginSlideImg2} style={{width:'100%', height:'100%'}} />
                  </div>
                </Col>
                <Col sm={7} style={{margin:0, padding:0}}>
                  {SuccessBar}
                  <div className="loginRegisterBox">
                    {ShowForgotPwdBox2 == true ? ForgotPwdBox2 : ForgotPwdBox1}
                  </div>
                </Col>
              </Row>
            </div>
          </div>
      </div>
    )

    const Intrest = (
      <div>
         <div className="loginBanner1"  style={{margin:0, backgroundColor:'#00237B'}}>
           <div className="navContainer2" style={{backgroundColor:'#00021d'}}>
             <Container>
                <Navbar collapseOnSelect expand="lg" variant="dark" style={{margin:0,  backgroundColor:'#00021d'}}>
                  <Navbar.Brand href="#home">
                    <div id="logo">
                      <img src={Logo} id="vector"/>
                    </div>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                      <Nav.Link href="#features" id="nav1" >Home</Nav.Link>
                      <Nav.Link href="#pricing" id="nav2">LiveEvents</Nav.Link>
                      <Nav.Link href="#pricing" id="nav3" >Contact</Nav.Link>
                      <Nav.Link href="#pricing" id="nav4">Blog</Nav.Link>
                    </Nav>
                    <Nav>

                        <div className="flexRow flexStart">
                          <div className="flexStart">
                            <Button variant="primary" id="loginBtn" onClick={()=>{this.showLoginPage()}}><span id="loginBtnTxt">Login</span></Button>{' '}
                            <Button variant="primary" id="signUpBtn"><span id="signUpBtnTxt"> Sign Up</span></Button>{' '}
                          </div>

                          <FontAwesomeIcon className="flexEnd" style={{marginTop:10, color:'#ffffff'}} icon={faGlobe}/>
                          <p style={{marginLeft:3, color:'#ffffff', marginTop:8, fontSize:13}}>EN</p>
                        </div>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </Container>
            </div>
          </div>
          <div className="center loginBanner1">

            <div className="aspectBoxBanner">
            <p id="aspectTxt">Select Interests</p>
              <div className="aspectBox">
                <div className="aspectBox1">
                  <img src={TheAspect1} style={{width:'80%'}} ></img>
                </div>
                <div className="aspectBox2">
                  <img src={TheAspect2} style={{width:'80%'}} ></img>
                </div>
                <div className="aspectBox3">
                  <img src={TheAspect3} style={{width:'80%'}} ></img>
                </div>
                <div className="aspectBox4">
                  <img src={TheAspect4} style={{width:'80%'}} ></img>
                </div>
                <div className="aspectBox5">
                  <img src={TheAspect5} style={{width:'80%'}} ></img>
                </div>
                <div className="aspectBox6">
                  <img src={TheAspect6} style={{width:'80%'}} ></img>
                </div>
                <div className="aspectBox7">
                  <img src={TheAspect7} style={{width:'80%'}} ></img>
                </div>
                <div className="aspectBox8">
                  <img src={TheAspect8} style={{width:'80%'}} ></img>
                </div>
                <div className="aspectBox9">
                  <img src={TheAspect9} style={{width:'80%'}} ></img>
                </div>
                <div className="aspectBox10">
                  <img src={TheAspect10} style={{width:'80%'}} ></img>
                </div>
                <div className="aspectBox11">
                  <img src={TheAspect11} style={{width:'80%'}} ></img>
                </div>
                <div className="aspectBox12">
                  <img src={TheAspect12} style={{width:'80%'}} ></img>
                </div>
                <div className="aspectBox13">
                  <img src={TheAspect13} style={{width:'80%'}} ></img>
                </div>
                <div className="aspectBox14">
                  <img src={TheAspect14} style={{width:'80%'}} ></img>
                </div>
                <div className="aspectBox15">
                  <img src={TheAspect15} style={{width:'80%'}} ></img>
                </div>
                <div className="aspectBox16">
                  <img src={TheAspect16} style={{width:'80%'}} ></img>
                </div>
                <div className="aspectBox17">
                  <img src={TheAspect17} style={{width:'80%'}} ></img>
                </div>
              </div>
              <button variant="primary" type="button" className="aspectBtn">
                Next
              </button>
            </div>
          </div>
      </div>
    )

    const LoginBox = (
      <div>
        <div>
          <p id="signInWithTxt">Sign in with</p>
          <div className="flexDirectionRow">
            <div id="googleLoginIcon1">
              <img src={GoogleIcon} />
            </div>
            <div id="googleLoginIcon2">
              <img src={FacebookIcon} />
            </div>
          </div>
        </div>
        <div>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <div className="flexDirectionRow emailInputBox" >
                <div>
                  <img src={EnvelopeIcon} className="envelopeIcon"/>
                </div>
                <Form.Control type="email" size="sm" placeholder="Email Address" className="emailInput" style={{borderColor:'#ffffff'}}/>
              </div>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <div className="flexDirectionRow emailInputBox" >
                <div>
                  <img src={PadLockIcon} className="padLockIcon"/>
                </div>
                <Form.Control type="password"size="sm" placeholder="Password" className="emailInput" style={{borderColor:'#ffffff'}}/>
              </div>
            </Form.Group>

            <div onClick={()=>{this.showForgotPwd()}}>
              <p id="signInWithTxt" style={{color:'#00237B', fontSize:12}}>
                Forgot Password
              </p>
            </div>

            <Form.Group controlId="formBasicCheckbox" style={{paddingLeft:10}}>
              <Form.Check
                custom
                inline
                label="Keep me signed in"
                type='radio'
                id={`custom-inline-radio-3`}
              />
            </Form.Group>
            <button variant="primary" type="button" className="signInBtn">
              Submit
            </button>
          </Form>
        </div>
      </div>
    )


    const RegisterBoxContent = (
      <div>
        <p id="registerBoxTxt1">Select account type</p>
        <div className="flexDirectionRow">
            <div>
              <div className="switchBox" style={{borderColor:UserBoxBorderColor}} onClick={()=>{this.switchBox('user')}}>
                <div className="infoIcon" style={{borderColor:UserInfoIconBorderColor, backgroundColor:UserInfoIconBackgroundColor}}>
                  <FontAwesomeIcon className="flexEnd center" style={{padding:0, paddingTop:3, color:UserInfoIconColor}} size='sm' icon={faInfo}/>
                </div>
                <div className='userIcon1'><img src={UserIcon} /></div>
                <p id="switchBoxTxt1" style={{color:UserBoxTxtColor}}>User</p>
              </div>
            </div>
            <div>
              <div className="switchBox" style={{borderColor:EventMBoxBorderColor}} onClick={()=>{this.switchBox('eventM')}}>
                <div className="infoIcon" style={{borderColor:EventMInfoIconBorderColor, backgroundColor:EventMInfoIconBackgroundColor}}>
                  <FontAwesomeIcon className="flexEnd center" style={{padding:0, paddingTop:3, color:EventMInfoIconColor}} size='sm' icon={faInfo}/>
                </div>
                <div className='userIcon2'><img src={EventMIcon} /></div>
                <p id="switchBoxTxt2" style={{color:EventMBoxTxtColor}}>Event Manager</p>
              </div>
            </div>
        </div>

        <Button id="loginBoxBtn" onClick={()=>{this.showUserEventM()}} style={{backgroundColor:'#000000'}}><span id="loginBtnTxt">Next</span></Button>{' '}
      </div>
    )


    const RegisterVerifyPhoneBox1 = (

      <div className="registerUserBox registerVerifyPhoneBox">
          <p id="verifyPhoneTxt0">Verify phone number</p>
         <div>
         <p id="verifyPhoneTxt1">Enter the code sent via SMS to</p>
         <p id="verifyPhoneTxt2">+234 802 345 6789</p>
           <Form>
             <div className="flexDirectionRow">
               <div className="flexDirectionRow codeInputBox" >
                 <input type="text"
                 placeholder=""
                 className="codeInput"
                // ref={(input) => { this.secondTextInput = input; }}
                onSubmitEditing={() => { this.secondTextInput.focus(); }}
                 maxLength="1" style={{borderColor:'#ffffff'}}></input>
               </div>

               <div className="flexDirectionRow codeInputBox" >
                 <input type="text"
                 placeholder=""
                 className="codeInput"
                  maxLength="1"
                  ref={(input) => { this.secondTextInput = input}}
                  style={{borderColor:'#ffffff'}}></input>
               </div>

               <div className="flexDirectionRow codeInputBox" >
                 <input type="text"  placeholder="" className="codeInput"  maxLength="1" style={{borderColor:'#ffffff'}}></input>
               </div>

               <div className="flexDirectionRow codeInputBox" >
                 <input type="text"  placeholder="" className="codeInput"  maxLength="1" style={{borderColor:'#ffffff'}}></input>
               </div>
             </div>

           </Form>
         </div>
         <div className="flexDirectionRow verifyTxtContainer">
          <p id="verifyPhoneTxt3">00:34</p>
          <p id="verifyPhoneTxt5"> Didn’t get code?</p>
          <p id="verifyPhoneTxt4"><a>Resend code</a></p>
         </div>
      </div>
    )

    const RegisterVerifyPhone = (
      <div>
         <div className="loginBanner1"  style={{margin:0, backgroundColor:'#00237B'}}>
           <div className="navContainer2" style={{backgroundColor:'#00021d'}}>
             <Container>
                <Navbar collapseOnSelect expand="lg" variant="dark" style={{margin:0,  backgroundColor:'#00021d'}}>
                  <Navbar.Brand href="#home">
                    <div id="logo">
                      <img src={Logo} id="vector"/>
                    </div>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                      <Nav.Link href="#features" id="nav1" >Home</Nav.Link>
                      <Nav.Link href="#pricing" id="nav2">LiveEvents</Nav.Link>
                      <Nav.Link href="#pricing" id="nav3" >Contact</Nav.Link>
                      <Nav.Link href="#pricing" id="nav4">Blog</Nav.Link>
                    </Nav>
                    <Nav>

                        <div className="flexRow flexStart">
                          <div className="flexStart">
                            <Button variant="primary" id="loginBtn" onClick={()=>{this.showLoginPage()}}><span id="loginBtnTxt">Login</span></Button>{' '}
                            <Button variant="primary" id="signUpBtn"><span id="signUpBtnTxt"> Sign Up</span></Button>{' '}
                          </div>

                          <FontAwesomeIcon className="flexEnd" style={{marginTop:10, color:'#ffffff'}} icon={faGlobe}/>
                          <p style={{marginLeft:3, color:'#ffffff', marginTop:8, fontSize:13}}>EN</p>
                        </div>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </Container>
            </div>
          </div>
          <div className="center loginBanner1">

            <div className="forgotPwdBoxBanner ">
              <Row style={{margin:0}}>
                <Col sm={5} style={{margin:0, padding:0}} >
                  <div style={{height:'100%',}}>
                    <img src={LoginSlideImg3} style={{width:'100%', height:'100%'}} />
                  </div>
                </Col>
                <Col sm={7} style={{margin:0}}>
                  <div className="loginRegisterBox">
                    {RegisterVerifyPhoneBox1}
                  </div>
                </Col>
              </Row>
            </div>
          </div>
      </div>
    )

    const RegisterUserBox = (
      <div className="registerUserBox">
         <div className="flexDirectionRow" style={{marginLeft:10}}>
            <div className="userIconBox flexDirectionRow">
              <FontAwesomeIcon className="" style={{marginLeft:10, paddingTop:3, color:"#00237B"}} size='sm' icon={faUser}/>
              <p id="userIconBoxTxt">USER</p>
            </div>
              <p id="userIconBoxTxt2" onClick={()=>{this.switchBox('eventM')}}>CHANGE</p>
         </div>
         <div>
           <Form>
             <Form.Group controlId="formBasicEmail">
               <div className="flexDirectionRow emailInputBox2" >
                 <div>
                   <img src={EnvelopeIcon} className="envelopeIcon"/>
                 </div>
                 <Form.Control type="email" size="sm" placeholder="Email Address" className="emailInput" style={{borderColor:'#ffffff'}}/>
               </div>
             </Form.Group>

             <Form.Group controlId="formBasicEmail">
               <div className="flexDirectionRow emailInputBox2" >
                 <div>
                   <FontAwesomeIcon className="envelopeIcon" style={{marginLeft:10, paddingTop:3, color:"#00237B"}} size='sm' icon={faUser}/>
                 </div>
                 <Form.Control type="email" size="sm" placeholder="Email Address" className="emailInput" style={{borderColor:'#ffffff'}}/>
               </div>
             </Form.Group>

             <Form.Group controlId="formBasicEmail">
               <div className="flexDirectionRow emailInputBox2" >
                 <div>
                   <img src={NgFlag} className="envelopeIcon"/>
                 </div>
                 <Form.Control type="email" size="sm" placeholder="Email Address" className="emailInput" style={{borderColor:'#ffffff'}}/>
               </div>
             </Form.Group>

             <Form.Group controlId="formBasicPassword">
               <div className="flexDirectionRow emailInputBox2" >
                 <div>
                   <img src={PadLockIcon} className="padLockIcon"/>
                 </div>
                 <Form.Control type="password"size="sm" placeholder="Password" className="emailInput" style={{borderColor:'#ffffff'}}/>
                 <FontAwesomeIcon className="envelopeIcon" style={{marginLeft:10, paddingTop:3, color:"#000000", margin:8}} size='sm' icon={faEyeSlash}/>
               </div>
             </Form.Group>

             <Form.Group controlId="formBasicCheckbox" style={{paddingLeft:10}}>
               <Form.Check
                 custom
                 inline
                 label= {RegisterLabel}
                 type='radio'
                 id={`custom-inline-radio-3`}
               />
             </Form.Group>
             <div className="flexDirectionRow">
               <button variant="primary" type="button" onClick={()=>{this.showRegisterVerifyPhone()}} className="signInBtn2">
                 Submit
               </button>
               <div>
                 <div className="flexDirectionRow">
                   <div id="googleLoginIcon1x">
                     <img src={GoogleIcon} />
                   </div>
                   <div id="googleLoginIcon2x">
                     <img src={FacebookIcon} />
                   </div>
                 </div>
               </div>
             </div>
           </Form>
         </div>
      </div>
    )

    const RegisterEventMBox = (
      <div className="registerUserBox">
         <div className="flexDirectionRow" style={{marginLeft:10}}>
            <div className="userIconBox2 flexDirectionRow">
              <FontAwesomeIcon className="" style={{marginLeft:10, paddingTop:3, color:"#00237B"}} size='sm' icon={faPortrait}/>
              <p id="userIconBoxTxt_x">EVENT MANAGER</p>
            </div>
              <p id="userIconBoxTxt2" onClick={()=>{this.switchBox('user')}}>CHANGE</p>
         </div>
         <div>
           <Form>
             <Form.Group controlId="formBasicEmail">
               <div className="flexDirectionRow emailInputBox2" >
                 <div>
                   <img src={EnvelopeIcon} className="envelopeIcon"/>
                 </div>
                 <Form.Control type="email" size="sm" placeholder="Email Address" className="emailInput" style={{borderColor:'#ffffff'}}/>
               </div>
             </Form.Group>

             <Form.Group controlId="formBasicEmail">
               <div className="flexDirectionRow emailInputBox2" >
                 <div>
                   <FontAwesomeIcon className="envelopeIcon" style={{marginLeft:10, paddingTop:3, color:"#00237B"}} size='sm' icon={faUser}/>
                 </div>
                 <Form.Control type="email" size="sm" placeholder="Full name" className="emailInput" style={{borderColor:'#ffffff'}}/>
               </div>
             </Form.Group>

             <Form.Group controlId="formBasicEmail">
               <div className="flexDirectionRow emailInputBox2" >
                 <div>
                   <img src={NgFlag} className="envelopeIcon"/>
                 </div>
                 <Form.Control type="email" size="sm" placeholder="Phone number" className="emailInput" style={{borderColor:'#ffffff'}}/>
               </div>
             </Form.Group>

             <Form.Group controlId="formBasicPassword">
               <div className="flexDirectionRow emailInputBox2" >
                 <div>
                   <img src={PadLockIcon} className="padLockIcon"/>
                 </div>
                 <Form.Control type="password"size="sm" placeholder="Password" className="emailInput" style={{borderColor:'#ffffff'}}/>
                 <FontAwesomeIcon className="envelopeIcon" style={{marginLeft:10, paddingTop:3, color:"#000000", margin:8}} size='sm' icon={faEyeSlash}/>
               </div>
             </Form.Group>

             <Form.Group controlId="formBasicCheckbox" style={{paddingLeft:10}}>
               <Form.Check
                 custom
                 inline
                 label= {RegisterLabel}
                 type='radio'
                 id={`custom-inline-radio-3`}
               />
             </Form.Group>
             <div className="flexDirectionRow">
               <button variant="primary" type="button" className="signInBtn2">
                 Submit
               </button>
               <div>
                 <div className="flexDirectionRow">
                   <div id="googleLoginIcon1x">
                     <img src={GoogleIcon} />
                   </div>
                   <div id="googleLoginIcon2x">
                     <img src={FacebookIcon} />
                   </div>
                 </div>
               </div>
             </div>
           </Form>
         </div>
      </div>
    )

    const UserEventMBox = (
      <div>
        {SelectUser == true ? RegisterUserBox : SelectEventM == true ? RegisterEventMBox :  RegisterBoxContent}
      </div>
    )

    const RegisterBox = (
      <div>
        {ShowUserEventM == true ? UserEventMBox : RegisterBoxContent }
      </div>
    )


    const LoginPage = (
      <div>
         <div className="loginBanner1"  style={{margin:0, backgroundColor:'#00237B'}}>
           <div className="navContainer2" style={{backgroundColor:'#00021d'}}>
             <Container>
                <Navbar collapseOnSelect expand="lg" variant="dark" style={{margin:0,  backgroundColor:'#00021d'}}>
                  <Navbar.Brand href="#home">
                    <div id="logo">
                      <img src={Logo} id="vector"/>
                    </div>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                      <Nav.Link href="#features" id="nav1" >Home</Nav.Link>
                      <Nav.Link href="#pricing" id="nav2">LiveEvents</Nav.Link>
                      <Nav.Link href="#pricing" id="nav3" >Contact</Nav.Link>
                      <Nav.Link href="#pricing" id="nav4">Blog</Nav.Link>
                    </Nav>
                    <Nav>

                        <div className="flexRow flexStart">
                          <div className="flexStart">
                            <Button variant="primary" id="loginBtn" onClick={()=>{this.showLoginPage()}}><span id="loginBtnTxt">Login</span></Button>{' '}
                            <Button variant="primary" id="signUpBtn"><span id="signUpBtnTxt"> Sign Up</span></Button>{' '}
                          </div>

                          <FontAwesomeIcon className="flexEnd" style={{marginTop:10, color:'#ffffff'}} icon={faGlobe}/>
                          <p style={{marginLeft:3, color:'#ffffff', marginTop:8, fontSize:13}}>EN</p>
                        </div>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </Container>
            </div>
          </div>
          <div className="center loginBanner1">

            <div className="loginBoxBanner">
              <Row style={{margin:0}}>
                <Col sm={5} style={{margin:0, padding:0}} >
                  <div class="loginSlide" style={{height:'100%', backgroundImage:`url("${LoginSlideImg}")`}}>
                    <div class="loginSlideBox">
                        <Carousel prevIcon = "" nextIcon = "" className="loginSlideBoxCar" >
                          <Carousel.Item>
                              <div style={{marginTop:40}}>
                                <p id="loginSlideTxt">
                                  Your next event in an instant
                                </p>
                              </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div style={{marginTop:40}}>
                                  <p id="loginSlideTxt">
                                    Your next event in an instant
                                  </p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div style={{marginTop:40}}>
                                  <p id="loginSlideTxt">
                                    Your next event in an instant
                                  </p>
                                </div>
                            </Carousel.Item>
                          </Carousel>
                      </div>
                    </div>
                  </Col>
                <Col sm={7} style={{margin:0}}>
                  <div className="loginRegisterBox">
                    <Row style={{margin:0}}>
                      <Col style={{margin:0}} sm={12}>
                        <div className="flexRow flexStart">
                          <div className="flexStart" style={{marginTop:20}}>
                            <div  id="registerBtn1" onClick={()=>{this.showRegisterBox()}} style={{borderBottomColor:ShowRegisterBtnBorderBottomColor}}>
                              <p id="registerBtn1Txt" style={{color:ShowRegisterBoxBtnColor}} >Create Account</p>
                            </div>
                            <div id="loginBtn1" onClick={()=>{this.showLoginBox()}} style={{borderBottomColor:ShowLoginBtnBorderBottomColor}}>
                              <p id="loginBtn1Txt" style={{color:ShowLoginBtnColor}} >Login</p>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col style={{margin:0}} sm={12}>
                        <div>
                          {ShowLoginBox==false ? RegisterBox : LoginBox }
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
      </div>
    )

    const WelcomePage = (
      <div>
      {Intrest}
         <div className="banner1"  style={{margin:0, backgroundImage: `url("${Background}")`}}>
            <Navbar collapseOnSelect expand="lg" variant="dark" className="navMargin" style={{backgroundColor:'transparent'}}>
              <Navbar.Brand href="#home">
                <div id="logo">
                  <img src={Logo} id="vector"/>
                </div>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#features" id="nav1" >Home</Nav.Link>
                  <Nav.Link href="#pricing" id="nav2">LiveEvents</Nav.Link>
                  <Nav.Link href="#pricing" id="nav3" >Contact</Nav.Link>
                  <Nav.Link href="#pricing" id="nav4">Blog</Nav.Link>
                </Nav>
                <Nav>

                    <div className="flexRow flexStart">
                      <div className="flexStart">
                        <Button variant="primary" id="loginBtn" onClick={()=>{this.showLoginPage()}}><span id="loginBtnTxt">Login</span></Button>{' '}
                        <Button variant="primary" id="signUpBtn" onClick={()=>{this.showLoginPage()}}><span id="signUpBtnTxt"> Sign Up</span></Button>{' '}
                      </div>

                      <FontAwesomeIcon className="flexEnd" style={{marginTop:10, color:'#ffffff'}} icon={faGlobe}/>
                      <p style={{marginLeft:3, color:'#ffffff', marginTop:8, fontSize:13}}>EN</p>
                    </div>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Jumbotron className="banner2" style={{backgroundColor:'transparent',  height:'100%',  borderRadius:0, color:'#ffffff'}}>
              <Carousel prevIcon = {prevIcon} nextIcon ={nextIcon}>
                <Carousel.Item interval={1000}>
                  <div className="innerBox">
                    <Button variant="primary" id="innerBoxBtn" style={{backgroundColor:'transparent'}}>
                      <span id="innerBoxBtnTxt">Concert</span></Button>{' '}
                    <h1 id="innerBoxTxt1">Tiwa Savage:</h1>
                    <h2 id="innerBoxTxt1">Savage 3.0 Concert</h2>
                    <p id="innerBoxTxt2">25th December</p>


                    <p id="innerBoxTxt3" >a pharetra augue mollis interdum Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </div>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <div className="innerBox">
                    <Button variant="primary" id="innerBoxBtn" style={{backgroundColor:'transparent'}}>
                      <span id="innerBoxBtnTxt">Concert</span></Button>{' '}
                    <h1 id="innerBoxTxt1">Tiwa Savage:</h1>
                    <h2 id="innerBoxTxt1">Savage 3.0 Concert</h2>
                    <p id="innerBoxTxt2">25th December</p>


                    <p id="innerBoxTxt3" >a pharetra augue mollis interdum Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </div>
                </Carousel.Item>
              </Carousel>
            </Jumbotron>
          </div>
          <div>
            <Row className="session2">
              <Col sm={8} className="flexEndCol">
                <div>
                  <Row>
                    <Col>
                      <Row>
                        <Col sm={12}>
                          <h2 style={{fontSize:'10px'}}>LOOKING FOR</h2>
                        </Col>
                        <Col sm={12}>
                          <InputGroup size="sm" className="mb-3">
                            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" style={{borderColor:'#757171', borderRadius:0, borderStyle:'solid', borderWidth:0, borderBottomWidth:2 }}/>
                          </InputGroup>
                        </Col>
                      </Row>
                    </Col>
                    <Col>
                      <Row>
                        <Col sm={12}>
                          <h2 style={{fontSize:'10px'}}>IN</h2>
                        </Col>
                        <Col sm={12}>
                          <InputGroup size="sm" className="mb-3">
                            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" style={{borderColor:'#757171', borderRadius:0, borderStyle:'solid', borderWidth:0, borderBottomWidth:2 }}/>
                          </InputGroup>
                        </Col>
                      </Row>
                    </Col>
                    <Col>
                      <Row>
                        <Col sm={12}>
                          <h2 style={{fontSize:'10px'}}>WHEN</h2>
                        </Col>
                        <Col sm={12}>

                          <InputGroup size="sm" className="mb-3">
                            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" style={{borderColor:'#757171', borderRadius:0, borderStyle:'solid', borderWidth:0, borderBottomWidth:2 }}/>
                          </InputGroup>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col sm={4}>
                <div>
                <Row>
                  <Col sm={8}   style={{marginTop:30,}}>
                    <div className="flexRow" id="search1">
                      <FontAwesomeIcon icon={faSearch} size="xl" style={{marginTop:4}}/>
                      <p id="searchTxt" style={{marginLeft:20, fontWeight:'bold'}}>Search</p>
                    </div>
                  </Col>
                  <Col sm={4} className="flexRow">
                    <div id="search2">
                      <img src={Icon1} id="vector" style={{widthmarginBottom:20}} />
                    </div>
                  </Col>
                </Row>
                </div>
              </Col>
            </Row>
          </div>
          <div style={{backgroundColor: '#E8EEFF'}}>
            <Row style={{margin:0, marginTop:0}}>
              <Col className=" smallBox"  style={{backgroundColor:'#ffffff',}}>
                <div style={{marginTop:40, marginBottom:40, marginRight:32, marginLeft:32}}>
                  <h3 id="smallBoxTxt1">
                    Invite
                  </h3>
                  <p id="smallBoxTxt2">
                    Invite your guest and get notified when they accept the invitation
                  </p>
                </div>
              </Col>
              <Col className="smallBox "  style={{backgroundColor:'#ffffff',}}>
                <div style={{marginTop:40, marginBottom:40, marginRight:32, marginLeft:32}}>
                  <h3 id="smallBoxTxt1">
                    Share
                  </h3>
                  <p id="smallBoxTxt2">
                    Share your next event from the comfort of your mobile device in an instant
                  </p>
                </div>
              </Col>
              <Col className="smallBox"  style={{backgroundColor:'#ffffff',}}>
                <div style={{marginTop:40, marginBottom:40, marginRight:32, marginLeft:32}}>
                  <h3 id="smallBoxTxt1">
                    Create
                  </h3>
                  <p id="smallBoxTxt2">
                  Create your event with your larger audience privately or publicly

                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div class="session3">
              <div id="sessionSub">
                <h1 id="text5" style={{textAlign:'center', color:'#18191F'}}>Popular Categories</h1>
                <p id="text6" style={{textAlign:'center'}}>Select any of the category below to display the featured</p>
              </div>
              <div>
                <Row>
                  <Col sm={2}>
                    <div className="card iconBoxBig1" style={{borderRadius:16, }}>
                      <div className='iconBox' id='iconBox1' style={{borderRadius:16,  paddingTop:25, paddingBottom:20}}>
                          <div id="alignSelfCenter" className="iconBox1Sub" style={{}} >

                          </div>
                          <div>
                            <p id="iconTxt" style={{margin:0,marginTop:10}}>Party</p>
                            <p id="iconTxt2" style={{margin:0}}>20 Events</p>
                          </div>
                      </div>
                    </div>
                  </Col>
                  <Col sm={2}>
                    <div className="card iconBoxBig2" style={{borderRadius:16, }}>
                      <div className='iconBox' id='iconBox2' style={{borderRadius:16,  paddingTop:25, paddingBottom:20}}>
                          <div id="alignSelfCenter" className="iconBox2Sub" style={{}} >

                          </div>
                          <div>
                            <p id="iconTxt" style={{margin:0,marginTop:10}}>Sport</p>
                            <p id="iconTxt2" style={{margin:0}}>20 Events</p>
                          </div>
                      </div>
                    </div>
                  </Col>
                  <Col sm={2}>
                    <div className="card iconBoxBig3" style={{borderRadius:16, }}>
                      <div className='iconBox' id='iconBox3' style={{borderRadius:16,  paddingTop:25, paddingBottom:20}}>
                          <div id="alignSelfCenter" className="iconBox3Sub" style={{}} >

                          </div>
                          <div>
                            <p id="iconTxt" style={{margin:0,marginTop:10}}>Movies</p>
                            <p id="iconTxt2" style={{margin:0}}>20 Events</p>
                          </div>
                      </div>
                    </div>
                  </Col>
                  <Col sm={2}>
                    <div className="card iconBoxBig4" style={{borderRadius:16, }}>
                      <div className='iconBox' id='iconBox4' style={{borderRadius:16,  paddingTop:25, paddingBottom:20}}>
                          <div id="alignSelfCenter" className="iconBox4Sub" style={{}} >

                          </div>
                          <div>
                            <p id="iconTxt" style={{margin:0,marginTop:10}}>Movies</p>
                            <p id="iconTxt2" style={{margin:0}}>20 Events</p>
                          </div>
                      </div>
                    </div>
                  </Col>
                  <Col sm={2}>
                    <div className="card iconBoxBig5" style={{borderRadius:16, }}>
                      <div className='iconBox' id='iconBox5' style={{borderRadius:16,  paddingTop:25, paddingBottom:20}}>
                          <div id="alignSelfCenter" className="iconBox5Sub" style={{}} >

                          </div>
                          <div>
                            <p id="iconTxt" style={{margin:0,marginTop:10}}>Movies</p>
                            <p id="iconTxt2" style={{margin:0}}>20 Events</p>
                          </div>
                      </div>
                    </div>
                  </Col>
                  <Col sm={2}>
                    <div className="card iconBoxBig6" style={{borderRadius:16, }}>
                      <div className='iconBox' id='iconBox6' style={{borderRadius:16,  paddingTop:25, paddingBottom:20}}>
                          <div id="alignSelfCenter" className="iconBox6Sub" style={{}} >

                          </div>
                          <div>
                            <p id="iconTxt" style={{margin:0,marginTop:10}}>Movies</p>
                            <p id="iconTxt2" style={{margin:0}}>20 Events</p>
                          </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
          </div>
          <div style={{backgroundColor: '#F1F1F1'}}>
            <div class="session3" style={{margin:0}}>
              <div>
                <h1 id="text5" style={{textAlign:'center', color:'#18191F'}}>Upcoming Events</h1>
                <p id="text6" style={{textAlign:'center'}}>Select any of the category below to display the featured</p>
              </div>
              <div>
                <Row style={{paddingLeft:60, margin: 'auto', width: '90%', }}>

                  <div style={{padding:10}}>
                    <div>
                      <div class="card" style={{borderRadius:10, width:250}}>
                        <div>
                          <img src={Image1} id="vector" style={{width:'100%', marginBottom:20,}} />
                        </div>
                        <p id="displayBoxTxt1" style={{margin:0, padding:0, marginLeft:20,}}>25th December</p>

                        <div className="flexDirectionRow" id="spaceBetween" style={{marginLeft:20}}>
                          <div><p id="displayBoxTxt2">Marlian Fest</p></div>
                          <div id="alignSelfEnd" className="flexEnd" style={{marginRight:20, marginBottom:20}}>
                            <Dropdown>
                              <Dropdown.Toggle variant="secondary" as={NavLink} style={{backgroundColor:'#ffffff', borderColor:'#ffffff', color:'#000000', }}>
                              </Dropdown.Toggle>

                              <Dropdown.Menu style={{ borderColor:'#ffffff',}}>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                        </div>
                        <div>
                          <div style={{borderTopStyle:'solid', borderTopWidth:'0.5px', borderColor:'#E7E7E7'}}>
                            <p id="displayBoxTxt1" style={{margin:0, padding:0, marginLeft:20,}}>Attendee List </p>
                            <div></div>
                          </div>
                        </div>

                        <div></div>
                        <div></div>
                      </div>
                    </div>
                  </div>

                  <div style={{padding:10}}>
                    <div>
                      <div class="card" style={{borderRadius:10, width:250}}>
                        <div>
                          <img src={Image1} id="vector" style={{width:'100%', marginBottom:20,}} />
                        </div>
                        <p id="displayBoxTxt1" style={{margin:0, padding:0, marginLeft:20,}}>25th December</p>

                        <div className="flexDirectionRow" id="spaceBetween" style={{marginLeft:20}}>
                          <div><p id="displayBoxTxt2">Marlian Fest</p></div>
                          <div id="alignSelfEnd" className="flexEnd" style={{marginRight:20, marginBottom:20}}>
                            <Dropdown>
                              <Dropdown.Toggle variant="secondary" as={NavLink} style={{backgroundColor:'#ffffff', borderColor:'#ffffff', color:'#000000', }}>
                              </Dropdown.Toggle>

                              <Dropdown.Menu style={{ borderColor:'#ffffff',}}>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                        </div>
                        <div>
                          <div style={{borderTopStyle:'solid', borderTopWidth:'0.5px', borderColor:'#E7E7E7'}}>
                            <p id="displayBoxTxt1" style={{margin:0, padding:0, marginLeft:20,}}>Attendee List </p>
                            <div></div>
                          </div>
                        </div>

                        <div></div>
                        <div></div>
                      </div>
                    </div>
                  </div>


                  <div style={{padding:10}}>
                    <div>
                      <div class="card" style={{borderRadius:10, width:250}}>
                        <div>
                          <img src={Image1} id="vector" style={{width:'100%', marginBottom:20,}} />
                        </div>
                        <p id="displayBoxTxt1" style={{margin:0, padding:0, marginLeft:20,}}>25th December</p>

                        <div className="flexDirectionRow" id="spaceBetween" style={{marginLeft:20}}>
                          <div><p id="displayBoxTxt2">Marlian Fest</p></div>
                          <div id="alignSelfEnd" className="flexEnd" style={{marginRight:20, marginBottom:20}}>
                            <Dropdown>
                              <Dropdown.Toggle variant="secondary" as={NavLink} style={{backgroundColor:'#ffffff', borderColor:'#ffffff', color:'#000000', }}>
                              </Dropdown.Toggle>

                              <Dropdown.Menu style={{ borderColor:'#ffffff',}}>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                        </div>
                        <div>
                          <div style={{borderTopStyle:'solid', borderTopWidth:'0.5px', borderColor:'#E7E7E7'}}>
                            <p id="displayBoxTxt1" style={{margin:0, padding:0, marginLeft:20,}}>Attendee List </p>
                            <div></div>
                          </div>
                        </div>

                        <div></div>
                        <div></div>
                      </div>
                    </div>
                  </div>


                  <div style={{padding:10, paddingRight:0}}>
                    <div>
                      <div class="card" style={{borderRadius:10, width:250}}>
                        <div>
                          <img src={Image1} id="vector" style={{width:'100%', marginBottom:20,}} />
                        </div>
                        <p id="displayBoxTxt1" style={{margin:0, padding:0, marginLeft:20,}}>25th December</p>

                        <div className="flexDirectionRow" id="spaceBetween" style={{marginLeft:20}}>
                          <div><p id="displayBoxTxt2">Marlian Fest</p></div>
                          <div id="alignSelfEnd" className="flexEnd" style={{marginRight:20, marginBottom:20}}>
                            <Dropdown>
                              <Dropdown.Toggle variant="secondary" as={NavLink} style={{backgroundColor:'#ffffff', borderColor:'#ffffff', color:'#000000', }}>
                              </Dropdown.Toggle>

                              <Dropdown.Menu style={{ borderColor:'#ffffff',}}>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                        </div>
                        <div>
                          <div style={{borderTopStyle:'solid', borderTopWidth:'0.5px', borderColor:'#E7E7E7'}}>
                            <p id="displayBoxTxt1" style={{margin:0, padding:0, marginLeft:20,}}>Attendee List </p>
                            <div></div>
                          </div>
                        </div>

                        <div></div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </Row>
              </div>
            </div>
          </div>

          <div style={{marginTop:20}}>
            <div>
              <h1 id="text5" style={{paddingTop:10, textAlign:'center', color:'#18191F'}}>Trending Places</h1>
              <p id="text6" style={{textAlign:'center'}}>Cities with the most trending events</p>
            </div>

            <Jumbotron className="banner2" style={{backgroundColor:'transparent',  borderRadius:0, color:'#274385'}}>
                  <Carousel prevIcon = {prevIcon2} nextIcon ={nextIcon2} id="center">
                    <Carousel.Item interval={1000}>
                        <div className="places flexDirectionRow" id="justifyContentSpaceBettween">
                          <Col style={{}}>
                              <img src={Lagos} className="innnerOverlay"></img>
                              <div className="overlayLeft">
                                <p id="placesTxt1">Lagos</p>
                                <p id="placesTxt2">102 Events</p>
                              </div>
                          </Col>

                          <Col>
                              <img src={Accra} className="innnerOverlay"></img>
                              <div className="overlayLeft">
                                <p id="placesTxt1">Lagos</p>
                                <p id="placesTxt2">102 Events</p>
                              </div>
                          </Col>

                          <Col>
                              <img src={Amsterdam} className="innnerOverlay"></img>
                              <div className="overlayLeft">
                                <p id="placesTxt1">Lagos</p>
                                <p id="placesTxt2">102 Events</p>
                              </div>
                          </Col>

                          <Col>
                              <img src={Texas} className="innnerOverlay"></img>
                              <div className="overlayLeft">
                                <p id="placesTxt1">Lagos</p>
                                <p id="placesTxt2">102 Events</p>
                              </div>
                          </Col>

                          <Col>
                              <img src={Seoul} className="innnerOverlay"></img>
                              <div className="overlayLeft">
                                <p id="placesTxt1">Lagos</p>
                                <p id="placesTxt2">102 Events</p>
                              </div>
                          </Col>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <div className="places flexDirectionRow" id="justifyContentSpaceBettween">
                          <Col style={{}}>
                              <img src={Lagos} className="innnerOverlay"></img>
                              <div className="overlayLeft">
                                <p id="placesTxt1">Lagos</p>
                                <p id="placesTxt2">102 Events</p>
                              </div>
                          </Col>

                          <Col>
                              <img src={Accra} className="innnerOverlay"></img>
                              <div className="overlayLeft">
                                <p id="placesTxt1">Accra</p>
                                <p id="placesTxt2">102 Events</p>
                              </div>
                          </Col>

                          <Col>
                              <img src={Amsterdam} className="innnerOverlay"></img>
                              <div className="overlayLeft">
                                <p id="placesTxt1">Amsterdam</p>
                                <p id="placesTxt2">102 Events</p>
                              </div>
                          </Col>

                          <Col>
                              <img src={Texas} className="innnerOverlay"></img>
                              <div className="overlayLeft">
                                <p id="placesTxt1">Texas</p>
                                <p id="placesTxt2">102 Events</p>
                              </div>
                          </Col>

                          <Col>
                              <img src={Seoul} className="innnerOverlay"></img>
                              <div className="overlayLeft">
                                <p id="placesTxt1">Seoul</p>
                                <p id="placesTxt2">102 Events</p>
                              </div>
                          </Col>
                        </div>
                    </Carousel.Item>
                  </Carousel>
              </Jumbotron>
          </div>

          <div className="bigBanner">
            <div style={{paddingTop:'10vh'}}>
              <h1 id="text5" style={{textAlign:'center', color:'#18191F'}}>Hottest Influencers</h1>
              <p id="text6" style={{textAlign:'center'}}>Meet the hottest event influencers</p>
            </div>

            <div className="banner3">
              <Row className="alignItemsCenter">
                <Col sm={3}>
                  <div className="influencerBox " id="influencerBox1">
                    <img src={Influencer1} id="influencerImg"></img>
                    <p id="influencerBoxTxt1" style={{fontFamily:SFProText}}>Joke Nwosu</p>
                    <p id="influencerBoxTxt3"><span id="influencerBoxTxt2" style={{color:'red'}}>500+</span> Events Promoted</p>
                  </div>
                </Col>
                <Col sm={3}>
                  <div className="influencerBox" id="influencerBox2">
                    <img src={Influencer2} id="influencerImg"></img>
                    <p id="influencerBoxTxt1" style={{fontFamily:SFProText}}>Joke Nwosu</p>
                    <p id="influencerBoxTxt3"><span id="influencerBoxTxt2" style={{color:'#0047FF'}}>100+</span> Events Promoted</p>
                  </div>
                  <div className="influencerBox" id="influencerBox3">
                    <img src={Influencer3} id="influencerImg"></img>
                    <p id="influencerBoxTxt1">Joke Nwosu</p>
                    <p id="influencerBoxTxt3"><span id="influencerBoxTxt2" style={{color:'#7000FF'}}>500+</span> Events Promoted</p>
                  </div>
                </Col>
                <Col sm={3}>
                  <div className="influencerBox" id="influencerBox4">
                    <img src={Influencer4} id="influencerImg"></img>
                    <p id="influencerBoxTxt1">Joke Nwosu</p>
                    <p id="influencerBoxTxt3"><span id="influencerBoxTxt2" style={{color:'#FF0000;'}}>500+</span> Events Promoted</p>
                  </div>
                  <div className="influencerBox" id="influencerBox5">
                    <img src={Influencer5} id="influencerImg"></img>
                    <p id="influencerBoxTxt1">Joke Nwosu</p>
                    <p id="influencerBoxTxt3"><span id="influencerBoxTxt2" style={{color:' #0047FF;'}}>500+</span> Events Promoted</p>
                  </div>
                </Col>
                <Col sm={3}>
                  <div className="influencerBox" id="influencerBox6">
                    <img src={Influencer6} id="influencerImg"></img>
                    <p id="influencerBoxTxt1">Joke Nwosu</p>
                    <p id="influencerBoxTxt3"><span id="influencerBoxTxt2" style={{color:' #0047FF;'}}>500+</span> Events Promoted</p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>

          <div className="bigBanner4">
            <div className="banner4">
              <div style={{paddingTop:'10vh'}}>
                <h1 id="text5" style={{textAlign:'center', color:'#18191F'}}>Raving Hashtags</h1>
                <p id="text6" style={{textAlign:'center'}}>The event hashtags that are making the rave</p>
              </div>
            </div>

            <Col>
            <div className="hashtagBox1">
              <div className="alignItemsCenter hashtagBox2" >
                <button id="hashtagBtn" >#Davido</button>{' '}
                <button id="hashtagBtn" >#Lagos</button>{' '}
                <button id="hashtagBtn" >#Abuja</button>{' '}
                <button id="hashtagBtn" style={{width:150}}>#ChristmasCarol</button>{' '}
                <button id="hashtagBtn" style={{width:120}} >#MalianFest</button>{' '}
              </div>
              <div className="alignItemsCenter hashtagBox2" >
                <button id="hashtagBtn" >#Davido</button>{' '}
                <button id="hashtagBtn" >#Lagos</button>{' '}
                <button id="hashtagBtn" >#Abuja</button>{' '}
                <button id="hashtagBtn" style={{width:150}}>#ChristmasCarol</button>{' '}
                <button id="hashtagBtn" style={{width:120}} >#MalianFest</button>{' '}
              </div>
            </div>
            </Col>
          </div>

          <div className="footer">
            <Row style={{margin:0}}>
              <Col>
                <Row>
                  <Col>
                    <div>
                      <a><p id="textFooterTop">Company</p></a>
                      <a><p id="textFooter2">About</p></a>
                      <a><p id="textFooter2">Blog</p></a>
                      <a><p id="textFooter2">Careers</p></a>
                      <a><p id="textFooter2">Contact Us</p></a>
                    </div>
                  </Col>
                  <Col>
                    <div>
                      <a><p id="textFooterTop">Support</p></a>
                      <a><p id="textFooter2">Help Center</p></a>
                      <a><p id="textFooter2">Safety Center</p></a>
                    </div>
                  </Col>
                </Row>
              </Col>

              <Col>
                <Row>
                  <Col>
                    <div>
                      <a><p id="textFooterTop">Legal</p></a>
                      <a><p id="textFooter2">Cookies Policy</p></a>
                      <a><p id="textFooter2">Privacy Policy</p></a>
                      <a><p id="textFooter2">Terms Of Service</p></a>
                    </div>
                  </Col>
                  <Col>
                    <div>
                      <a><p id="textFooterTop">Install App</p></a>
                      <img src={PlayStore} />
                      <img src={AppleStore} id="appleStore"/>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <div id="footer2">
              <div style={{float:'left'}}>
                <p id="copyRightText">
                  © 2021 ibloov. All rights reserved
                </p>
              </div>
              <div style={{float:'right'}}>

                  <img src={Instagram} id="instagramIcon" />
                  <img src={Twitter} id="instagramIcon" />
                  <img src={Youtube} id="instagramIcon1" />

              </div>
            </div>
          </div>
      </div>
    )

    return(
        <>
          {ShowLoginPage == true ? LoginPage : ShowForgotPwd == true ? ForgotPwd :  ShowRegisterVerifyPhone == true ? RegisterVerifyPhone : WelcomePage}
        </>
    )
  }
}

export default Ibloov;
