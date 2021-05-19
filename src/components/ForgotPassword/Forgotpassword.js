import React, { useState, onClick} from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import TabPane from 'react-bootstrap/TabPane';

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
import Lato from '../../fonts/Lato/Lato-Light.ttf';
import SFProText from '../../fonts/SFProText.ttf';
import Ubuntu from '../../fonts/Ubuntu/Ubuntu-Bold.ttf';

import Logo from '../../vector/vector.png';
import Background from '../../m-4_M8uIfPEZw-unsplash.jpg';
import Background2 from '../../background2.png';
import Image1 from '../../images/image1.png';
import Lagos from '../../images/lagos.png';
import Accra from '../../images/accra.png';
import Amsterdam from '../../images/amsterdam.png';
import Texas from '../../images/texas.png';
import Seoul from '../../images/seoul.png';

import AppleStore from '../../images/appleStore.png';
import PlayStore from '../../images/playStore.png';

import Twitter from '../../images/twitter.png';
import Instagram from '../../images/instagram.png';
import Youtube from '../../images/youtube.png';

import Influencer1 from '../../images/influencer1.png';
import Influencer2 from '../../images/influencer2.png';
import Influencer3 from '../../images/influencer3.png';
import Influencer4 from '../../images/influencer4.png';
import Influencer5 from '../../images/influencer5.png';
import Influencer6 from '../../images/influencer6.png';


import PartyIcon from '../../icons/party.svg';

import Icon1 from '../../vector/icon1.svg';

import Icon2 from '../../vector/icon2.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimes, faPortrait, faEyeSlash, faUser, faEnvelope, faInfo, faCoffee , faMoneyBill, faChartLine, faSync, faHandshake, faCheck, faArrowRight, faArrowLeft, faGlobe, faSearch} from '@fortawesome/free-solid-svg-icons'

import User1 from '../../icons/user1.svg';
import User2 from '../../icons/user2.svg';

import RecUser1 from '../../icons/recUser1.svg';
import RecUser2 from '../../icons/recUser2.svg';

import LoginSlideImg from '../../images/loginSlideImg.png';
import LoginSlideImg2 from '../../images/loginSlideImg2.png';
import LoginSlideImg3 from '../../images/loginSlideImg3.png';

import FacebookIcon from '../../icons/facebook.png';
import GoogleIcon from '../../icons/google.png';

import EnvelopeIcon from '../../icons/envelope.svg';
import PadLockIcon from '../../icons/padLock.svg';
import NgFlag from '../../icons/ngFlag.svg'
import SlashCircle from '../../icons/slashCircle.svg'

import NavBar from "..//NavBar/NavBar"

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      base_url: "https://ibloov-backend.herokuapp.com/",

      userEmail:'',
      userEmailBoxShadow: 'transparent',
      userEmailBackgroundColor:'transparent',
      userEmailErrorTxt:'',
      lockUserEmail: false,

      showForgotPwd: false,
      showForgotPwdBox2: false,
      errorTxt: "Facebook account not found",
      successTxt: 'SignUp Successful',

      showSuccessBar: false,
      successTxt: '',

      showErrorBar: false,
      errorTxt: '',
    }
    this.changeUserEmail = this.changeUserEmail.bind(this);
  }

  changeUserEmail(event){
    this.setState({userEmailBackgroundColor:'transparent', userEmailBoxShadow:'0 0 0 0rem rgba(237, 46, 126, 1)'});
    this.setState({userEmail: event.target.value});
  }

  sendUserEmail(){
    var email = this.state.userEmail;
    if(email.length > 0){
      if(email.search('@') > -1){
        if(email.indexOf('.') > -1){

        }else{
          this.setState({userEmailBackgroundColor:'#FFF3F8', userEmailBoxShadow:'0 0 0 0.1rem rgba(237, 46, 126, 1)'});
        }
      }else{
        this.setState({userEmailBackgroundColor:'#FFF3F8', userEmailBoxShadow:'0 0 0 0.1rem rgba(237, 46, 126, 1)'});
      }
    }else{
      this.setState({userEmailBackgroundColor:'#FFF3F8', userEmailBoxShadow:'0 0 0 0.1rem rgba(237, 46, 126, 1)'});
    }
  }


  componentDidMount(){
    var that = this;
  }


  showForgotPwd(){
    this.setState({showLoginPage:false, showForgotPwd:true});
  }

  showForgotPwdBox2(){
    this.setState({showForgotPwdBox2:true});
  }

  showErrorBar(text1){
    this.setState({showSuccessBar:false, successTxt:""});
    this.setState({showErrorBar:true, errorTxt:text1});
    setTimeout(
        function() {
            this.setState({showErrorBar:false, errorTxt:''});
        }
        .bind(this),
        5000
    )
  }

  showSuccessBar(text1){
    this.setState({showErrorBar:false, errorTxt:""});
    this.setState({showSuccessBar:true, successTxt:text1});
    setTimeout(
        function() {
          this.setState({showSuccessBar:false, errorTxt:''});
        }
        .bind(this),
        5000
    )
  }

  sendEmail(){
    // if
  }

  render() {
    const ErrorTxt = this.state.errorTxt;
    const SuccessTxt =  this.state.successTxt;

    const UserEmailBackgroundColor = this.state.userEmailBackgroundColor;
    const UserEmailBoxShadow = this.state.userEmailBoxShadow;
    const UserEmailErrorTxt = this.state.userEmailErrorTxt;

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
                <div className="flexDirectionRow emailInputBox2" style={{backgroundColor:UserEmailBackgroundColor, boxShadow:UserEmailBoxShadow}}>
                  <div>
                    <img src={EnvelopeIcon} className="envelopeIcon"/>
                  </div>
                    <Form.Control
                      type="email"
                      size="sm"
                      placeholder="Email Address"
                      className="emailInput"
                      style={{borderColor:'#ffffff'}}
                      value = {this.state.userEmail}
                      onChange = {this.changeUserEmail}
                      readOnly = {this.state.lockUserEmail}
                    />
                </div>
              </Form.Group>
              <button variant="primary" type="button" onClick={()=>{this.sendUserEmail()}} className="forgotPwdBtn3">
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
                <NavBar />
            </div>
          </div>
          <div className="center loginBanner1" stye={{minHeight:'100vh'}}>
            <div className="forgotPwdBoxBanner ">
              <Row style={{margin:0}}>
                <Col sm={5} style={{margin:0, padding:0}} >

                  <div  style={{height:'100%',}}>
                    <img src={LoginSlideImg2} style={{width:'100%', height:'100%'}} />
                  </div>
                </Col>
                <Col sm={7} style={{margin:0, padding:0, backgroundColor:'#ffffff', borderRadius:'18px'}} >
                  {this.state.showSuccessBar == true ? SuccessBar : null}
                  {this.state.showErrorBar ==  true ? ErrorBar : null}
                  <div className="loginRegisterBox">
                    {ShowForgotPwdBox2 == true ? ForgotPwdBox2 : ForgotPwdBox1}
                  </div>
                </Col>
              </Row>
            </div>
          </div>
      </div>
    )


    return(
        <>
          { ForgotPwd}
        </>
    )
  }
}

export default ForgotPassword;
