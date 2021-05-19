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
import Lato from '../../fonts/Lato/Lato-Light.ttf';
import SFProText from '../../fonts/SFProText.ttf';
import Ubuntu from '../../fonts/Ubuntu/Ubuntu-Bold.ttf';

import Logo from '../../vector/vector.png';
import Background from '../../m-4_M8uIfPEZw-unsplash.jpg';
import Background2 from '../../background2.png';
import Image1 from '../../images/image1.png';

import AppleStore from '../../images/appleStore.png';
import PlayStore from '../../images/playStore.png';


import Icon1 from '../../vector/icon1.svg';

import Icon2 from '../../vector/icon2.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faCalendar, faCheckCircle, faTimes, faPortrait, faEyeSlash, faUser, faEnvelope, faInfo, faCoffee , faMoneyBill, faChartLine, faSync, faHandshake, faCheck, faArrowRight, faArrowLeft, faGlobe, faSearch} from '@fortawesome/free-solid-svg-icons'

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
import '../../App.css';
import {Link, Redirect} from 'react-router-dom';

import NavBar from "..//NavBar/NavBar";


class Ibloov extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id:'',
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
      errorTxt: "",
      successTxt: '',

      // login
      logUEmail:'',
      logUEmailBoxShadow: 'transparent',
      logUEmailBackgroundColor:'transparent',
      logUEmailErrorTxt:'',
      lockLogUEmail: false,

      logUPwd: '',
      logUPwdBoxShadow: 'transparent',
      logUPwdBackgroundColor:'transparent',
      logUPwdErrorTxt:'',
      lockLogUPwd:false,
      showLogUPwd:false,

      loginSuccessful:false,

      // register user
      regUEmail:'',
      regUEmailBoxShadow: 'transparent',
      regUEmailBackgroundColor:'transparent',
      regUEmailErrorTxt:'',
      lockRegUEmail: false,

      regUFname: '',
      regUFnameBoxShadow: 'transparent',
      regUFnameBackgroundColor:'transparent',
      regUFnameErrorTxt:'',
      lockRegUFname:false,

      regULname: '',
      regULnameBoxShadow: 'transparent',
      regULnameBackgroundColor:'transparent',
      regULnameErrorTxt:'',
      lockRegULname:false,

      regUPhone: '+234',
      regUPhoneBoxShadow: 'transparent',
      regUPhoneBackgroundColor:'transparent',
      regUPhoneErrorTxt:'',
      lockRegUPhone:false,

      regUDob: '',
      regUDobBoxShadow: 'transparent',
      regUDobBackgroundColor:'transparent',
      regUDobErrorTxt:'',
      lockRegUDob:false,

      regUGender: '',
      regUGenderError: false,

      regUPwd: '',
      regUPwdBoxShadow: 'transparent',
      regUPwdBackgroundColor:'transparent',
      regUPwdErrorTxt:'',
      lockRegUPwd:false,
      showRegUPwd:false,

      regUAgreement: false,
      regUAgreementError: false,

      regUSuccess: "",
      regUError: '',

      // register eventm

      regEmEmail:'',
      regEmEmailBoxShadow: 'transparent',
      regEmEmailBackgroundColor:'transparent',
      regEmEmailErrorTxt:'',
      lockRegEmEmail: false,

      regEmFname: '',
      regEmFnameBoxShadow: 'transparent',
      regEmFnameBackgroundColor:'transparent',
      regEmFnameErrorTxt:'',
      lockRegEmFname:false,

      regEmLname: '',
      regEmLnameBoxShadow: 'transparent',
      regEmLnameBackgroundColor:'transparent',
      regEmLnameErrorTxt:'',
      lockRegEmLname:false,

      regEmPhone: '+234',
      regEmPhoneBoxShadow: 'transparent',
      regEmPhoneBackgroundColor:'transparent',
      regEmPhoneErrorTxt:'',
      lockRegEmPhone:false,

      regEmDob: '',
      regEmDobBoxShadow: 'transparent',
      regEmDobBackgroundColor:'transparent',
      regEmDobErrorTxt:'',
      lockRegEmDob:false,

      regEmGender: '',
      regEmGenderError: false,

      regEmPwd: '',
      regEmPwdBoxShadow: 'transparent',
      regEmPwdBackgroundColor:'transparent',
      regEmPwdErrorTxt:'',
      lockRegEmPwd:false,
      showRegEmPwd:false,

      regEmAgreement: false,
      regEmAgreementError: false,

      regEmSuccess: "",
      regEmError: '',

      registrationComplete: false,

      showSuccessBar:false,
      successBarTxt:'',

      showErrorBar:false,
      errorBarTxt:'',

      verifyCode1:'',
      lockVerifyCode1: false,
      verifyCode2:'',
      lockVerifyCode2: false,
      verifyCode3:'',
      lockVerifyCode3: false,
      verifyCode4:'',
      lockVerifyCode4: false,

      verifyPhoneNumber:'',
    }

    // verify code
    this.verifyCode1 =  this.verifyCode1.bind(this);
    this.verifyCode2 =  this.verifyCode2.bind(this);
    this.verifyCode3 =  this.verifyCode3.bind(this);
    this.verifyCode4 =  this.verifyCode4.bind(this);

    // login
    this.changeLogUEmail = this.changeLogUEmail.bind(this);
    this.changeLogUPwd =  this.changeLogUPwd.bind(this);

    // regsiter user
    this.changeRegUEmail = this.changeRegUEmail.bind(this);
    this.changeRegUFname =  this.changeRegUFname.bind(this);
    this.changeRegULname =  this.changeRegULname.bind(this);
    this.changeRegUPhone = this.changeRegUPhone.bind(this);
    this.changeRegUDob = this.changeRegUDob.bind(this);
    this.changeRegUPwd =  this.changeRegUPwd.bind(this);

    // regsiter eventM
    this.changeRegEmEmail = this.changeRegEmEmail.bind(this);
    this.changeRegEmFname =  this.changeRegEmFname.bind(this);
    this.changeRegEmLname =  this.changeRegEmLname.bind(this);
    this.changeRegEmPhone = this.changeRegEmPhone.bind(this);
    this.changeRegEmDob = this.changeRegEmDob.bind(this);
    this.changeRegEmPwd =  this.changeRegEmPwd.bind(this);
  }

  // verify code
  verifyCode1(event){
    if(event.target.value.length <= 1){
      var r = event.target.value;
      var rr = r*1;

      if(Number.isInteger(rr) == true){
        this.setState({verifyCode1: event.target.value});


        var c1 = event.target.value;

        var c2 = this.state.verifyCode2;

        var c3 = this.state.verifyCode3;

        var c4 = this.state.verifyCode4;

        var code = c1.concat(c2,c3,c4);
        var code = code*1;

        if(event.target.value.length == 1 && this.state.verifyCode2.length == 1 && this.state.verifyCode3.length == 1 && this.state.verifyCode4.length == 1){
          this.verifyCode(code);
        }

        if(event.target.value.length > this.state.verifyCode1 ){
          document.getElementById('verifyCode2').focus();
        }
      }
    }
  }

  verifyCode2(event){
    if(event.target.value.length <= 1){
      var r = event.target.value;
      var rr = r*1;

      if(Number.isInteger(rr) == true){
        this.setState({verifyCode2: event.target.value})


        var c1 = this.state.verifyCode1;

        var c2 = event.target.value;

        var c3 = this.state.verifyCode3;

        var c4 = this.state.verifyCode4;

        var code = c1.concat(c2,c3,c4);
        var code = code*1;

        if(this.state.verifyCode1.length == 1 && event.target.value.length == 1 && this.state.verifyCode3.length == 1 && this.state.verifyCode4.length == 1){
          this.verifyCode(code);
        }

        if(event.target.value.length > this.state.verifyCode2 ){
          document.getElementById('verifyCode3').focus();
        }else if(this.state.verifyCode2.length == 0 && event.target.value.length == 0){
          document.getElementById('verifyCode1').focus();
        }
      }
    }
  }

  verifyCode3(event){
    if(event.target.value.length <= 1){
      var r = event.target.value;
      var rr = r*1;

      if(Number.isInteger(rr) == true){
        this.setState({verifyCode3: event.target.value})


        console.log(this.state.verifyCode3.length);
        console.log(event.target.value.length);


        var c1 = this.state.verifyCode1;

        var c2 = this.state.verifyCode2;

        var c3 = event.target.value;

        var c4 = this.state.verifyCode4;

        var code = c1.concat(c2,c3,c4);
        var code = code*1;

        if(this.state.verifyCode1.length == 1 && this.state.verifyCode2.length == 1 && event.target.value.length == 1 && this.state.verifyCode4.length == 1){
          this.verifyCode(code);
        }

        if(event.target.value.length > this.state.verifyCode3 ){
          document.getElementById('verifyCode4').focus();
        }else if(this.state.verifyCode3.length == 0 && event.target.value.length == 0){
          document.getElementById('verifyCode2').focus();
          console.log(this.state.verifyCode3.length);
          console.log(event.target.value.length);
        }

      }
    }
  }

  verifyCode4(event){
    if(event.target.value.length <= 1){
      var r = event.target.value;
      var rr = r*1;

      if(Number.isInteger(rr) == true){
        this.setState({verifyCode4: event.target.value})
        var c1 = this.state.verifyCode1;

        var c2 = this.state.verifyCode2;

        var c3 = this.state.verifyCode3;

        var c4 = event.target.value;

        var code = c1.concat(c2,c3,c4);
        var code = code*1;

        console.log(code);

        if(this.state.verifyCode1.length == 1 && this.state.verifyCode2.length == 1 && this.state.verifyCode3.length == 1 && event.target.value.length == 1){
          this.verifyCode(code);
        }
        if(this.state.verifyCode4.length == 0 && event.target.value.length == 0){
          document.getElementById('verifyCode3').focus();
        }
      }
    }
  }
  // loginBtn
  changeLogUEmail(event){
    this.setState({logUEmail: event.target.value});
    this.setState({logUEmailBackgroundColor:'transparent', logUEmailBoxShadow:'0 0 0 0rem rgba(237, 46, 126, 1)'});
  }

  changeLogUPwd(event){
    this.setState({logUPwdBackgroundColor:'transparent', logUPwdBoxShadow:'0 0 0 0rem rgba(237, 46, 126, 1)'});
    this.setState({logUPwd: event.target.value});
  }

  // regsiter user
  changeRegUEmail(event){
    this.setState({regUEmail: event.target.value});
    this.setState({regUEmailBackgroundColor:'transparent', regUEmailBoxShadow:'0 0 0 0rem rgba(237, 46, 126, 1)'});
  }

  changeRegUFname(event){
    this.setState({regUFname: event.target.value});
    this.setState({regUFnameBackgroundColor:'transparent', regUFnameBoxShadow:'0 0 0 0rem rgba(237, 46, 126, 1)'});
  }

  changeRegULname(event){
    this.setState({regULname: event.target.value});
    this.setState({regULnameBackgroundColor:'transparent', regULnameBoxShadow:'0 0 0 0rem rgba(237, 46, 126, 1)'});
  }

  changeRegUPhone(event){
    this.setState({regUPhoneBackgroundColor:'transparent', regUPhoneBoxShadow:'0 0 0 0rem rgba(237, 46, 126, 1)'});
    if(event.target.value.length <= 15){
      if(event.target.value.length < 4){
        this.setState({regUPhone: "+234"});
      }else{
        var u =  event.target.value;
        var uu = u*1;
        if(Number.isInteger(uu) == true){
          var v = '+234'+event.target.value;
          this.setState({regUPhone: event.target.value});
        }
      }
    }
  }

  changeRegUDob(event){
    this.setState({regUDobBackgroundColor:'transparent', regUDobBoxShadow:'0 0 0 0rem rgba(237, 46, 126, 1)'});
    if(event.target.value.length > this.state.regUDob.length){
      if(event.target.value.length <= 10){
        console.log(event.target.value.length);
        console.log(this.state.regUDob.length);
        if(event.target.value.length == 1 || event.target.value.length == 2 || event.target.value.length == 3 ){
          var t =  event.target.value;
          var tt = t*1;
          if(Number.isInteger(tt) == true){
            this.setState({regUDob: event.target.value});
          }
        }else if(event.target.value.length == 4){
          var t =  event.target.value;
          var tt = t*1;
          if(Number.isInteger(tt) == true){
            var newValue = event.target.value.concat("-");
            this.setState({regUDob: newValue});
          }
        }else if(event.target.value.length > 4){
          var op = event.target.value;
          var p  = op.split("-");

          console.log(p);
          // if(p.length == 1){
          //
          // }
          if(p.length == 2){
            var pz =  p[1];
            var p1 = pz*1;
            if(Number.isInteger(p1) == true){
              if(p[1].length == 1){
                this.setState({regUDob: event.target.value});
              }else if (p[1].length == 2) {
                var newValue = event.target.value.concat("-");
                this.setState({regUDob: newValue});
              }
            }
          }else if(p.length == 3){
            var pz =  p[2];
            var p2 = pz*1;
            if(Number.isInteger(p2) == true){
              if(p[2].length == 1){
                this.setState({regUDob: event.target.value});
              }else if (p[2].length == 2) {
                this.setState({regUDob: event.target.value});
              }
            }
          }
        }
      }
    }else{
      this.setState({regUDob: event.target.value});
    }
  }

  changeRegUPwd(event){
    this.setState({regUPwdBackgroundColor:'transparent', regUPwdBoxShadow:'0 0 0 0rem rgba(237, 46, 126, 1)'});
    this.setState({regUPwd: event.target.value});
  }

  selectRegUGender(gender){
    if(gender ==  "male"){
      this.setState({regUGender: 'male', regUGenderError:false});
      document.getElementById("femaleRegUCheckBox").checked = false;
    }else if(gender ==  "female"){
      this.setState({regUGender: 'female', regUGenderError:false});
      document.getElementById("maleRegUCheckBox").checked = false;
    }
  }

  selectRegUAgreement(){
    if(this.state.regUAgreement ==  true){
      this.setState({regUAgreement: false, regUAgreementError:true});
    }else if(this.state.regUAgreement ==  false){
      this.setState({regUAgreement: true, regUAgreementError:false});
    }
  }

  // regsiter eventM
  changeRegEmEmail(event){
    this.setState({regEmEmail: event.target.value});
    this.setState({regEmEmailBackgroundColor:'transparent', regEmEmailBoxShadow:'0 0 0 0rem rgba(237, 46, 126, 1)'});
  }

  changeRegEmFname(event){
    this.setState({regEmFname: event.target.value});
    this.setState({regEmFnameBackgroundColor:'transparent', regEmFnameBoxShadow:'0 0 0 0rem rgba(237, 46, 126, 1)'});
  }

  changeRegEmLname(event){
    this.setState({regEmLname: event.target.value});
    this.setState({regEmLnameBackgroundColor:'transparent', regEmLnameBoxShadow:'0 0 0 0rem rgba(237, 46, 126, 1)'});
  }

  changeRegEmPhone(event){
    this.setState({regEmPhoneBackgroundColor:'transparent', regEmPhoneBoxShadow:'0 0 0 0rem rgba(237, 46, 126, 1)'});
    if(event.target.value.length <= 15){
      if(event.target.value.length < 4){
        this.setState({regEmPhone: "+234"});
      }else{
        var u =  event.target.value;
        var uu = u*1;
        if(Number.isInteger(uu) == true){
          var v = '+234'+event.target.value;
          this.setState({regEmPhone: event.target.value});
        }
      }
    }
  }

  changeRegEmDob(event){
    this.setState({regEmDobBackgroundColor:'transparent', regEmDobBoxShadow:'0 0 0 0rem rgba(237, 46, 126, 1)'});
    if(event.target.value.length > this.state.regEmDob.length){
      if(event.target.value.length <= 10){
        console.log(event.target.value.length);
        console.log(this.state.regEmDob.length);
        if(event.target.value.length == 1 || event.target.value.length == 2 || event.target.value.length == 3 ){
          var t =  event.target.value;
          var tt = t*1;
          if(Number.isInteger(tt) == true){
            this.setState({regEmDob: event.target.value});
          }
        }else if(event.target.value.length == 4){
          var t =  event.target.value;
          var tt = t*1;
          if(Number.isInteger(tt) == true){
            var newValue = event.target.value.concat("-");
            this.setState({regEmDob: newValue});
          }
        }else if(event.target.value.length > 4){
          var op = event.target.value;
          var p  = op.split("-");

          console.log(p);
          // if(p.length == 1){
          //
          // }
          if(p.length == 2){
            var pz =  p[1];
            var p1 = pz*1;
            if(Number.isInteger(p1) == true){
              if(p[1].length == 1){
                this.setState({regEmDob: event.target.value});
              }else if (p[1].length == 2) {
                var newValue = event.target.value.concat("-");
                this.setState({regEmDob: newValue});
              }
            }
          }else if(p.length == 3){
            var pz =  p[2];
            var p2 = pz*1;
            if(Number.isInteger(p2) == true){
              if(p[2].length == 1){
                this.setState({regEmDob: event.target.value});
              }else if (p[2].length == 2) {
                this.setState({regEmDob: event.target.value});
              }
            }
          }
        }
      }
    }else{
      this.setState({regEmDob: event.target.value});
    }
  }

  changeRegEmPwd(event){
    this.setState({regEmPwdBackgroundColor:'transparent', regEmPwdBoxShadow:'0 0 0 0rem rgba(237, 46, 126, 1)'});
    this.setState({regEmPwd: event.target.value});
  }

  selectRegEmGender(gender){
    if(gender ==  "male"){
      this.setState({regEmGender: 'male', regEmGenderError:false});
      document.getElementById("femaleRegEmCheckBox").checked = false;
    }else if(gender ==  "female"){
      this.setState({regEmGender: 'female', regEmGenderError:false});
      document.getElementById("maleRegEmCheckBox").checked = false;
    }
  }

  selectRegEmAgreement(){
    if(this.state.regEmAgreement ==  true){
      this.setState({regEmAgreement: false, regEmAgreementError:true});
    }else if(this.state.regEmAgreement ==  false){
      this.setState({regEmAgreement: true, regEmAgreementError:false});
    }
  }


  submitURegister(){
    // box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    var success = [0,0,0,0,0,0,0,0];
    var email =  this.state.regUEmail;
    var fname =  this.state.regUFname;
    var lname = this.state.regULname;
    var phone = this.state.regUPhone;
    var dob = this.state.regUDob;
    var gender = this.state.regUGender;
    var pwd = this.state.regUPwd;
    var agreement = this.state.regUAgreement;

    if(email.length > 0){
      if(email.search('@') > -1){
        if(email.indexOf('.') > -1){
          if(email.length > 4){
            success[0] = 1;
          }else{
            this.setState({regUEmailBackgroundColor:'#FFF3F8', regUEmailBoxShadow:'0 0 0 0.1rem rgba(237, 46, 126, 1)'});
          }
        }else{
          this.setState({regUEmailBackgroundColor:'#FFF3F8', regUEmailBoxShadow:'0 0 0 0.1rem rgba(237, 46, 126, 1)'});
        }
      }else{
        this.setState({regUEmailBackgroundColor:'#FFF3F8', regUEmailBoxShadow:'0 0 0 0.1rem rgba(237, 46, 126, 1)'});
      }
    }else{
      this.setState({regUEmailBackgroundColor:'#FFF3F8', regUEmailBoxShadow:'0 0 0 0.1rem rgba(237, 46, 126, 1)'});
    }

    // fname
    if(fname.length > 0){
      success[1] = 1;
    }else{
      this.setState({regUFnameBackgroundColor:'#FFF3F8', regUFnameBoxShadow:'0 0 0 0.1rem rgba(237, 46, 126, 1)'});
    }

    // lname
    if(lname.length > 0){
      success[2] = 1;
    }else{
      this.setState({regULnameBackgroundColor:'#FFF3F8', regULnameBoxShadow:'0 0 0 0.1rem rgba(237, 46, 126, 1)'});
    }

    // Phone
    if(phone.length > 4){
      success[3] = 1;
    }else{
      this.setState({regUPhoneBackgroundColor:'#FFF3F8', regUPhoneBoxShadow:'0 0 0 0.1rem rgba(237, 46, 126, 1)'});
    }

    // dob
    if(dob.length > 0){
      success[4] = 1;
    }else{
      this.setState({regUDobBackgroundColor:'#FFF3F8', regUDobBoxShadow:'0 0 0 0.1rem rgba(237, 46, 126, 1)'});
    }

    // Gender
    if(gender.length > 0){
      if(gender == 'male' || gender == 'female'){
        success[5] = 1;
      }else{
        this.setState({regUGenderError:true})
      }
    }else{
      this.setState({regUGenderError:true});
    }

    // pwd
    if(pwd.length > 0){
      if(pwd.length >= 8){
        success[6] = 1;
      }else{
        this.setState({regUPwdBackgroundColor:'#FFF3F8', regUPwdBoxShadow:'0 0 0 0.1rem rgba(237, 46, 126, 1)', regUPwdErrorTxt:'Password must have atleast 8 characters'});
      }
    }else{
      this.setState({regUPwdBackgroundColor:'#FFF3F8', regUPwdBoxShadow:'0 0 0 0.1rem rgba(237, 46, 126, 1)'});
    }

    // agreement
    if(agreement == true){
      success[7] = 1;
    }else{
      this.setState({regUAgreementError: true});
    }

    // execution
    if( success[0] == 1 && success[1] == 1 && success[2] == 1 && success[3] == 1 && success[4] == 1 && success[5] == 1 && success[6] == 1 && success[7] == 1){
      this.setState({lockRegUEmail:true, lockRegUFname:true, lockRegULname:true, lockRegUEmail:true, lockRegUPhone:true, lockRegUDob:true, lockRegUPwd:true});
      var raw = {
        "firstName": fname,
        "lastName": lname,
        "email": email,
        "phoneNumber": phone,
        "dob":dob,
        "password": pwd,
      }

      var requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(raw),
        redirect: 'follow'
      };

      fetch(this.state.base_url+"v1/user/register", requestOptions)
          .then((response) => response.json())
            .then((responseJson) => {
              this.setState({lockRegUEmail:false, lockRegUFname:false, lockRegULname:false, lockRegUEmail:false, lockRegUPhone:false, lockRegUDob:false, lockRegUPwd:false});
              console.log(responseJson["message"]);
              if(responseJson['success'] == true){
                this.setState({verifyPhoneNumber:phone});
                this.setState({regUEmail:'', regUFname:'', regULname:'', regUPhone:'', regUDob:'', regUGender:'', regUPwd:''});

                this.showSuccessBar(responseJson['message']);

                this.setState({id: responseJson['data']['id']});
                this.sendVerificationCode(responseJson['data']['id']);
                // console.log(responseJson['data']['id']);
                setTimeout(
                    function() {
                        this.showRegisterVerifyPhone();
                    }
                    .bind(this),
                    1000
                );
              }else{
                this.setState({regUSuccess: "failed"})
                this.setState({regUError: responseJson['message']});

                this.showErrorBar(responseJson['message']);
              }
            }).catch((error) => {
              console.log('error', error);
          });

        // .then(response => response.text())
        // .then(response => )
        // .then(response => console.log(response["message"]))
        // .then(result => console.log(result))
        // .catch(error => console.log('error', error));
    }
  }


  submitEmRegister(){
    var success = [0,0,0,0,0,0,0,0];
    var email =  this.state.regEmEmail;
    var fname =  this.state.regEmFname;
    var lname = this.state.regEmLname;
    var phone = this.state.regEmPhone;
    var dob = this.state.regEmDob;
    var gender = this.state.regEmGender;
    var pwd = this.state.regEmPwd;
    var agreement = this.state.regEmAgreement;

    if(email.length > 0){
      if(email.search('@') > -1){
        if(email.indexOf('.') > -1){
          if(email.length > 4){
            success[0] = 1;
          }else{
            this.setState({regEmEmailBackgroundColor:'#FFF3F8', regEmEmailBoxShadow:'0 0 0 0.1rem rgba(237, 46, 126, 1)'});
          }
        }else{
          this.setState({regEmEmailBackgroundColor:'#FFF3F8', regEmEmailBoxShadow:'0 0 0 0.1rem rgba(237, 46, 126, 1)'});
        }
      }else{
        this.setState({regEmEmailBackgroundColor:'#FFF3F8', regEmEmailBoxShadow:'0 0 0 0.1rem rgba(237, 46, 126, 1)'});
      }
    }else{
      this.setState({regEmEmailBackgroundColor:'#FFF3F8', regEmEmailBoxShadow:'0 0 0 0.1rem rgba(237, 46, 126, 1)'});
    }

    // fname
    if(fname.length > 0){
      success[1] = 1;
    }else{
      this.setState({regEmFnameBackgroundColor:'#FFF3F8', regEmFnameBoxShadow:'0 0 0 0.1rem rgba(237, 46, 126, 1)'});
    }

    // lname
    if(lname.length > 0){
      success[2] = 1;
    }else{
      this.setState({regEmLnameBackgroundColor:'#FFF3F8', regEmLnameBoxShadow:'0 0 0 0.1rem rgba(237, 46, 126, 1)'});
    }

    // Phone
    if(phone.length > 4){
      success[3] = 1;
    }else{
      this.setState({regEmPhoneBackgroundColor:'#FFF3F8', regEmPhoneBoxShadow:'0 0 0 0.1rem rgba(237, 46, 126, 1)'});
    }

    // dob
    if(dob.length > 0){
      success[4] = 1;
    }else{
      this.setState({regEmDobBackgroundColor:'#FFF3F8', regEmDobBoxShadow:'0 0 0 0.1rem rgba(237, 46, 126, 1)'});
    }

    // Gender
    if(gender.length > 0){
      if(gender == 'male' || gender == 'female'){
        success[5] = 1;
      }else{
        this.setState({regEmGenderError:true})
      }
    }else{
      this.setState({regEmGenderError:true});
    }

    // pwd
    if(pwd.length > 0){
      if(pwd.length >= 8){
        success[6] = 1;
      }else{
        this.setState({regEmPwdBackgroundColor:'#FFF3F8', regEmPwdBoxShadow:'0 0 0 0.1rem rgba(237, 46, 126, 1)', regEmPwdErrorTxt:'Password must have atleast 8 characters'});
      }
    }else{
      this.setState({regEmPwdBackgroundColor:'#FFF3F8', regEmPwdBoxShadow:'0 0 0 0.1rem rgba(237, 46, 126, 1)'});
    }

    // agreement
    if(agreement == true){
      success[7] = 1;
    }else{
      this.setState({regEmAgreementError: true});
    }

    // execution
    if( success[0] == 1 && success[1] == 1 && success[2] == 1 && success[3] == 1 && success[4] == 1 && success[5] == 1 && success[6] == 1 && success[7] == 1){
      this.setState({lockRegEmEmail:true, lockRegEmFname:true, lockRegEmLname:true, lockRegEmEmail:true, lockRegEmPhone:true, lockRegEmDob:true, lockRegEmPwd:true});
      var raw = {
        "firstName": fname,
        "lastName": lname,
        "email": email,
        "phoneNumber": phone,
        "dob":dob,
        "password": pwd,
      }

      var requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(raw),
        redirect: 'follow'
      };

      fetch(this.state.base_url+"v1/user/register", requestOptions)
          .then((response) => response.json())
            .then((responseJson) => {
              this.setState({lockRegEmEmail:false, lockRegEmFname:false, lockRegEmLname:false, lockRegEmEmail:false, lockRegEmPhone:false, lockRegEmDob:false, lockRegEmPwd:false});
              console.log(responseJson["message"]);
              if(responseJson['success'] == true){
                this.setState({verifyPhoneNumber:phone});
                this.setState({regEmEmail:'', regEmFname:'', regEmLname:'', regEmPhone:'', regEmDob:'', regEmGender:'', regEmPwd:''});


                this.setState({regEmSuccess: "success"});
                this.showSuccessBar(responseJson['message']);

                this.setState({id: responseJson['data']['id']});
                this.sendVerificationCode(responseJson['data']['id']);
                console.log(responseJson['data']['id']);
                setTimeout(
                    function() {
                        this.showRegisterVerifyPhone();
                    }
                    .bind(this),
                    1000
                );
              }else{
                this.setState({regEmSuccess: "failed"})
                this.setState({regEmError: responseJson['message']});

                this.setState({showSuccessBar:false, successTxt:''});

                this.showErrorBar(responseJson['message']);
              }
            }).catch((error) => {
              console.log('error', error);
          });

        // .then(response => response.text())
        // .then(response => )
        // .then(response => console.log(response["message"]))
        // .then(result => console.log(result))
        // .catch(error => console.log('error', error));
    }
  }



  userLoginFunction(){
    var email =  this.state.logUEmail;
    var pwd = this.state.logUPwd;

    var ar = [0,0];
    if(email.length > 0){
      if(email.search('@') > -1){
        if(email.indexOf('.') > -1){
          if(email.length > 4){
            ar[0] = 1;
          }else{
            this.setState({logUEmailBackgroundColor:'#FFF3F8', logUEmailBoxShadow:'0 0 0 0.1rem rgba(237, 46, 126, 1)'});
          }
        }else{
          this.setState({logUEmailBackgroundColor:'#FFF3F8', logUEmailBoxShadow:'0 0 0 0.1rem rgba(237, 46, 126, 1)'});
        }
      }else{
        this.setState({logUEmailBackgroundColor:'#FFF3F8', logUEmailBoxShadow:'0 0 0 0.1rem rgba(237, 46, 126, 1)'});
      }
    }else{
      this.setState({logUEmailBackgroundColor:'#FFF3F8', logUEmailBoxShadow:'0 0 0 0.1rem rgba(237, 46, 126, 1)'});
    }


    if(pwd.length > 0){
      if(pwd.length >= 8){
          ar[1] = 1;
      }else{
        this.setState({logUPwdBackgroundColor:'#FFF3F8', logUPwdBoxShadow:'0 0 0 0.1rem rgba(237, 46, 126, 1)'});
      }
    }else{
      this.setState({logUPwdBackgroundColor:'#FFF3F8', logUPwdBoxShadow:'0 0 0 0.1rem rgba(237, 46, 126, 1)'});
    }

    if(ar[0] == 1 && ar[1] == 1){
      var raw = {
        "email": email,
        "password": pwd,
      }

      var requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(raw),
        redirect: 'follow'
      };

      fetch(this.state.base_url+"auth/local/web", requestOptions)
        .then((response) => response.json())
        .then((responseJson) => {
           console.log(responseJson);
           if(responseJson['success'] == true){
             window.sessionStorage.setItem("i_user_xid", responseJson['data']);
             window.sessionStorage.setItem("loggedIn", true);
             this.showSuccessBar(responseJson['message']);
             this.setState({loginSuccessful: true});
           }else{
             this.showErrorBar(responseJson['message']);
           }
          }).catch((error) => {
            console.log('error', error);
        });
  }
}

sendVerificationCode(id){
  this.setState({lockVerifyCode1:true, lockVerifyCode2:true, lockVerifyCode3:true, lockVerifyCode4:true})
  var raw = "";
  var requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: raw,
    redirect: 'follow'
  };
  fetch(this.state.base_url+"v1/user/mobilenumber/sendverificationcode/"+id, requestOptions)
    .then((response) => response.json())
    .then((responseJson) => {
       if(responseJson['success'] == true){
         this.setState({lockVerifyCode1:false, lockVerifyCode2:false, lockVerifyCode3:false, lockVerifyCode4:false});
         this.setState({verifyCode1:'', verifyCode2:'', verifyCode3:'', verifyCode4:''})
         this.setState({showErrorBar:false, errorTxt:''});
         // this.setState({showSuccessBar:true, successTxt:responseJson['message']});
       }if(responseJson['success'] == false){
         this.setState({lockVerifyCode1:false, lockVerifyCode2:false, lockVerifyCode3:false, lockVerifyCode4:false});
         this.showErrorBar(responseJson['data']);
       }
      }).catch((error) => {
        console.log('error', error);
        this.setState({lockVerifyCode1:false, lockVerifyCode2:false, lockVerifyCode3:false, lockVerifyCode4:false});
        this.setState({showSuccessBar:false, successTxt:''});
        // this.setState({showErrorBar:true, errorTxt:responseJson['message']});
    });
}

verifyCode(code){
  var raw = "";
  var requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    // body: raw,
    redirect: 'follow'
  };
  fetch(this.state.base_url+"v1/user/mobilenumber/verifycode/"+this.state.id+"/"+code, requestOptions)
    .then((response) => response.json())
    .then((responseJson) => {
       if(responseJson['success'] == true){
         this.setState({lockVerifyCode1:true, lockVerifyCode2:true, lockVerifyCode3:true, lockVerifyCode4:true});
         this.setState({verifyCode1:'', verifyCode2:'', verifyCode3:'', verifyCode4:''})
         this.showSuccessBar(responseJson['message']);
         this.setState({showRegisterVerifyPhone: false});
         this.showLoginBox();
       }else if(responseJson['success'] == false){
         this.setState({lockVerifyCode1:false, lockVerifyCode2:false, lockVerifyCode3:false, lockVerifyCode4:false});
         this.showErrorBar(responseJson['message']);
       }
      }).catch((error) => {
        console.log('error', error);
        this.setState({lockVerifyCode1:false, lockVerifyCode2:false, lockVerifyCode3:false, lockVerifyCode4:false});
        this.setState({showSuccessBar:false, successTxt:''});
        // this.setState({showErrorBar:true, errorTxt:responseJson['message']});
    });
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
    this.setState({showRegisterVerifyPhone:true});
  }

  showForgotPwdBox2(){
    this.setState({showForgotPwdBox2:true});
  }

  showRegUPwd() {
    var x = document.getElementById("regUPwd");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }


  showRegEmPwd() {
    var x = document.getElementById("regEmPwd");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }


  showLogUPwd() {
    var x = document.getElementById("logUPwd");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
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

  render() {
    // login
    const LogUEmailBackgroundColor = this.state.logUEmailBackgroundColor;
    const LogUEmailBoxShadow = this.state.logUEmailBoxShadow;
    const LogUEmailErrorTxt = this.state.logUEmailErrorTxt;

    const LogUPwdBackgroundColor = this.state.logUPwdBackgroundColor;
    const LogUPwdBoxShadow = this.state.logUPwdBoxShadow;
    const LogUPwdErrorTxt = this.state.logUPwdErrorTxt;

    const LoginSuccessful =  this.state.loginSuccessful;


    // regsiter user
    const RegUEmailBackgroundColor = this.state.regUEmailBackgroundColor;
    const RegUEmailBoxShadow = this.state.regUEmailBoxShadow;
    const RegUEmailErrorTxt = this.state.regUEmailErrorTxt;

    const RegUFnameBackgroundColor = this.state.regUFnameBackgroundColor;
    const RegUFnameBoxShadow = this.state.regUFnameBoxShadow;
    const RegUFnameErrorTxt = this.state.regUFnameErrorTxt;

    const RegULnameBackgroundColor = this.state.regULnameBackgroundColor;
    const RegULnameBoxShadow = this.state.regULnameBoxShadow;
    const RegULnameErrorTxt = this.state.regULnameErrorTxt;

    const RegUPhoneBackgroundColor = this.state.regUPhoneBackgroundColor;
    const RegUPhoneBoxShadow = this.state.regUPhoneBoxShadow;
    const RegUPhoneErrorTxt = this.state.regUPhoneErrorTxt;

    const RegUDobBackgroundColor = this.state.regUDobBackgroundColor;
    const RegUDobBoxShadow = this.state.regUDobBoxShadow;
    const RegUDobErrorTxt = this.state.regUDobErrorTxt;

    const RegUPwdBackgroundColor = this.state.regUPwdBackgroundColor;
    const RegUPwdBoxShadow = this.state.regUPwdBoxShadow;
    const RegUPwdErrorTxt = this.state.regUPwdErrorTxt;

    // register em
    const RegEmEmailBackgroundColor = this.state.regEmEmailBackgroundColor;
    const RegEmEmailBoxShadow = this.state.regEmEmailBoxShadow;
    const RegEmEmailErrorTxt = this.state.regEmEmailErrorTxt;

    const RegEmFnameBackgroundColor = this.state.EmFnameBackgroundColor;
    const RegEmFnameBoxShadow = this.state.regEmFnameBoxShadow;
    const RegEmFnameErrorTxt = this.state.regEmFnameErrorTxt;

    const RegEmLnameBackgroundColor = this.state.regEmLnameBackgroundColor;
    const RegEmLnameBoxShadow = this.state.regEmLnameBoxShadow;
    const RegEmLnameErrorTxt = this.state.regEmLnameErrorTxt;

    const RegEmPhoneBackgroundColor = this.state.regEmPhoneBackgroundColor;
    const RegEmPhoneBoxShadow = this.state.regEmPhoneBoxShadow;
    const RegEmPhoneErrorTxt = this.state.regEmPhoneErrorTxt;

    const RegEmDobBackgroundColor = this.state.regEmDobBackgroundColor;
    const RegEmDobBoxShadow = this.state.regEmDobBoxShadow;
    const RegEmDobErrorTxt = this.state.regEmDobErrorTxt;

    const RegEmPwdBackgroundColor = this.state.regEmPwdBackgroundColor;
    const RegEmPwdBoxShadow = this.state.regEmPwdBoxShadow;
    const RegEmPwdErrorTxt = this.state.regEmPwdErrorTxt;


    const RegistrationComplete = this.state.registrationComplete;




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

    const RegisterLabel = (
      <p className="registerLabel">I agree to the <a><span style={{color:'blue', textDecoration: 'underline'}}>terms and conditions</span></a> and <a><span style={{color:'blue', textDecoration: 'underline'}}>privacy policy</span></a></p>
    )

    const ErrorBar = (
      <div className="errorBar">
        <img src={SlashCircle} id="successSlashCircle"></img>
        <p id="successTxt">{ErrorTxt}</p>
        <FontAwesomeIcon className="flexEnd" onClick={()=>{this.setState({showErrorBar:false})}} id="successIcon" icon={faTimes} />
      </div>
    )

    const SuccessBar = (
      <div className="successBar">
        <FontAwesomeIcon className="flexEnd"  id="successSlashCircle" color="#00BA88" icon={faCheckCircle} />
        <p id="successTxt">{SuccessTxt}</p>
        <FontAwesomeIcon className="flexEnd"  onClick={()=>{this.setState({showSuccessBar:false})}} id="successIcon" icon={faTimes} />
      </div>
    )
    const ShowRegisterVerifyPhone = this.state.showRegisterVerifyPhone;



    const SelectUser = this.state.selectUser;
    const SelectEventM =  this.state.selectEventM;

    const ShowUserEventM = this.state.showUserEventM;

    const ShowForgotPwd = this.state.showForgotPwd;

    const ShowForgotPwdBox2 = this.state.showForgotPwdBox2;




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
              <div className="flexDirectionRow emailInputBox2" style={{backgroundColor:LogUEmailBackgroundColor, boxShadow:LogUEmailBoxShadow}}>
                <div>
                  <img src={EnvelopeIcon} className="envelopeIcon"/>
                </div>
                <Form.Control
                 type="text"
                 size="sm"
                 placeholder="Email Address"
                 className="emailInput"
                 style={{borderColor:'#ffffff'}}
                 value = {this.state.logUEmail}
                 onChange = {this.changeLogUEmail}
                 readOnly = {this.state.lockLogUEmail}
                 style={{height:'auto', borderColor:'transparent'}}
                 />
              </div>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <div className="flexDirectionRow emailInputBox2" style={{backgroundColor:LogUPwdBackgroundColor, boxShadow:LogUPwdBoxShadow}}>
                <div>
                  <img src={PadLockIcon} className="padLockIcon"/>
                </div>
                <Form.Control
                  type="password"
                  size="sm"
                  placeholder="Password"
                  className="emailInput"
                  style={{borderColor:'#ffffff'}}
                  value = {this.state.logUPwd}
                  onChange = {this.changeLogUPwd}
                  readOnly = {this.state.lockLogUPwd}
                  id = "logUPwd"
                  style={{height:'auto', borderColor:'transparent'}}
                />
                <FontAwesomeIcon className="envelopeIcon" style={{marginLeft:10, paddingTop:3, color:"#000000", margin:8}} size='sm' icon={faEyeSlash}/>
              </div>
              <p className="inputErrorTxt">{LogUPwdErrorTxt}</p>
            </Form.Group>

            <div onClick={()=>{this.userLoginFunction()}}>
              <Link to="/forgotPassword">
                <p id="signInWithTxt" style={{color:'#00237B', fontSize:12}}>
                  Forgot Password
                </p>
              </Link>
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
            <button variant="primary" type="button" onClick={()=>{this.userLoginFunction()}} className="signInBtn">
              Submit
            </button>
          </Form>
        </div>
      </div>
    )


    const RegisterBoxContent = (
      <div style={{width:'100%', backgroundColor:'#ffffff'}}>
        <p id="registerBoxTxt1">Select account type</p>
        <div className="flexDirectionRow" style={{width:'100%', }}>
            <div className="switchBigBox">
              <div className="switchBox" style={{borderColor:UserBoxBorderColor}} onClick={()=>{this.switchBox('user')}}>
                <div className="infoIcon" style={{borderColor:UserInfoIconBorderColor, backgroundColor:UserInfoIconBackgroundColor}}>
                  <FontAwesomeIcon className="infoIconIcon" style={{color:UserInfoIconColor}} size='sm' icon={faInfo}/>
                </div>
                <div className="boxbox">
                  <div className='userIcon1'><img src={UserIcon} /></div>
                </div>
                <p id="switchBoxTxt1" style={{color:UserBoxTxtColor}}>User</p>
              </div>
            </div>
            <div className="switchBigBox">
              <div className="switchBox" style={{borderColor:EventMBoxBorderColor}} onClick={()=>{this.switchBox('eventM')}}>
                <div className="infoIcon" style={{borderColor:EventMInfoIconBorderColor, backgroundColor:EventMInfoIconBackgroundColor}}>
                  <FontAwesomeIcon className="infoIconIcon" style={{color:EventMInfoIconColor}} size='sm' icon={faInfo}/>
                </div>
                <div className="boxbox">
                  <div className='userIcon2'><img src={EventMIcon} /></div>                  
                </div>
                <p id="switchBoxTxt2" style={{color:EventMBoxTxtColor}}>Event Manager</p>
              </div>
            </div>
        </div>

        <Button id="loginBoxBtn" onClick={()=>{this.showUserEventM()}} style={{backgroundColor:'#000000', borderRadius:8}}><span id="loginBtnTxt">Next</span></Button>{' '}
      </div>
    )


    const RegisterVerifyPhoneBox1 = (

      <div className="registerUserBox registerVerifyPhoneBox">
          <p id="verifyPhoneTxt0">Verify phone number</p>
         <div>
         <p id="verifyPhoneTxt1">Enter the code sent via SMS to</p>
         <p id="verifyPhoneTxt2">{this.state.verifyPhoneNumber}</p>
           <Form>
             <div className="flexDirectionRow">
               <div className="flexDirectionRow codeInputBox" >
                 <input
                   type="text"
                   placeholder=""
                   className="codeInput"
                   style={{borderColor:'#ffffff'}}
                   value={this.state.verifyCode1}
                   onChange={this.verifyCode1}
                   id="verifyCode1"
                   readOnly = {this.state.lockVerifyCode1}
                 />
               </div>

               <div className="flexDirectionRow codeInputBox" >
                 <input
                  type="text"
                  placeholder=""
                  className="codeInput"
                  style={{borderColor:'#ffffff'}}
                  value={this.state.verifyCode2}
                  onChange={this.verifyCode2}
                  id="verifyCode2"
                  readOnly = {this.state.lockVerifyCode2}
                 />
               </div>

               <div className="flexDirectionRow codeInputBox" >
                 <input
                   type="text"
                   placeholder=""
                   className="codeInput"
                   style={{borderColor:'#ffffff'}}
                   value={this.state.verifyCode3}
                   onChange={this.verifyCode3}
                   id="verifyCode3"
                   readOnly = {this.state.lockVerifyCode3}
                 />
               </div>

               <div className="flexDirectionRow codeInputBox" >
                 <input
                   type="text"
                   placeholder=""
                   className="codeInput"
                   style={{borderColor:'#ffffff'}}
                   value={this.state.verifyCode4}
                   onChange={this.verifyCode4}
                   id="verifyCode4"
                   readOnly = {this.state.lockVerifyCode4}
                 />
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
                <Col sm={7} style={{margin:0, padding:0}}>
                {this.state.showSuccessBar == true ? SuccessBar : null}
                {this.state.showErrorBar == true ? ErrorBar : null}
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
               <div className="flexDirectionRow emailInputBox2" style={{backgroundColor:RegUEmailBackgroundColor, boxShadow:RegUEmailBoxShadow}}>
                 <div>
                   <img src={EnvelopeIcon} className="envelopeIcon"/>
                 </div>
                 <Form.Control
                  type="text"
                  size="sm"
                  placeholder="Email Address"
                  className="emailInput"
                  style={{borderColor:'#ffffff'}}
                  value = {this.state.regUEmail}
                  onChange = {this.changeRegUEmail}
                  readOnly = {this.state.lockRegUEmail}
                  style={{height:'auto', borderColor:'transparent'}}
                  />
               </div>
             </Form.Group>

             <Form.Group controlId="formBasicEmail">
               <div className="flexDirectionRow emailInputBox2" style={{backgroundColor:RegUFnameBackgroundColor, boxShadow:RegUFnameBoxShadow}}>
                 <div>
                   <FontAwesomeIcon className="envelopeIcon" style={{marginLeft:10, paddingTop:3, color:"#00237B"}} size='sm' icon={faUser}/>
                 </div>
                 <Form.Control
                   type="text"
                   size="sm"
                   placeholder="First Name"
                   className="emailInput"
                   style={{borderColor:'#ffffff'}}
                   value = {this.state.regUFname}
                   onChange = {this.changeRegUFname}
                   readOnly = {this.state.lockRegUFname}
                   style={{height:'auto', borderColor:'transparent'}}
                 />
               </div>
             </Form.Group>

             <Form.Group controlId="formBasicEmail">
               <div className="flexDirectionRow emailInputBox2" style={{backgroundColor:RegULnameBackgroundColor, boxShadow:RegULnameBoxShadow}}>
                 <div>
                   <FontAwesomeIcon className="envelopeIcon" style={{marginLeft:10, paddingTop:3, color:"#00237B"}} size='sm' icon={faUser}/>
                 </div>
                 <Form.Control
                   type="text"
                   size="sm"
                   placeholder="Last Name"
                   className="emailInput"
                   style={{borderColor:'#ffffff'}}
                   value = {this.state.regULname}
                   onChange = {this.changeRegULname}
                   readOnly = {this.state.lockRegULname}
                   style={{height:'auto', borderColor:'transparent'}}
                 />
               </div>
             </Form.Group>

             <Form.Group controlId="formBasicEmail">
               <div className="flexDirectionRow emailInputBox2" style={{backgroundColor:RegUPhoneBackgroundColor, boxShadow:RegUPhoneBoxShadow}} >
                 <div>
                   <img src={NgFlag} className="envelopeIcon"/>
                 </div>
                 <Form.Control
                    type="text"
                    size="sm"
                    placeholder="Phone Number"
                    className="emailInput"
                    style={{borderColor:'#ffffff'}}
                    value = {this.state.regUPhone}
                    onChange = {this.changeRegUPhone}
                    readOnly = {this.state.lockRegUPhone}
                    style={{height:'auto', borderColor:'transparent'}}
                  />
               </div>
             </Form.Group>


             <Form.Group controlId="formBasicEmail">
               <div className="flexDirectionRow emailInputBox2" style={{backgroundColor:RegUDobBackgroundColor, boxShadow:RegUDobBoxShadow}} >
                 <div>
                   <FontAwesomeIcon className="envelopeIcon" style={{marginLeft:10, paddingTop:3, color:"#00237B"}} size='sm' icon={faCalendar}/>
                 </div>
                 <Form.Control
                   type="text"
                   size="sm"
                   placeholder="Y-M-D Date Of Birth"
                   className="emailInput"
                   style={{borderColor:'#ffffff'}}
                   value = {this.state.regUDob}
                   onChange = {this.changeRegUDob}
                   readOnly = {this.state.lockRegUDob}
                   style={{height:'auto', borderColor:'transparent'}}
                 />
               </div>
             </Form.Group>

             <div className="flexDirectionRow genderInput" style={{margin:0,}}>
              <p id="genderInputTxt">Gender</p>
              <Form.Check
                custom
                inline
                label= "Male"
                type='radio'
                id="maleRegUCheckBox"
                onClick={()=>{this.selectRegUGender('male')}}
              />
              <Form.Check
                custom
                inline
                label= "Female"
                type='radio'
                id="femaleRegUCheckBox"
                onClick={()=>{this.selectRegUGender('female')}}
              />
              {this.state.regUGenderError == true ?
              <FontAwesomeIcon className="envelopeIcon" style={{marginLeft:10, paddingTop:3, color:"#ED2E7E", margin:0}} size='lg' icon={faTimes}/> : null }
             </div>

             <Form.Group controlId="formBasicPassword">
               <div className="flexDirectionRow emailInputBox2" style={{backgroundColor:RegUPwdBackgroundColor, boxShadow:RegUPwdBoxShadow}}>
                 <div>
                   <img src={PadLockIcon} className="padLockIcon"/>
                 </div>
                 <Form.Control
                   type="password"
                   size="sm"
                   placeholder="Password"
                   className="emailInput"
                   style={{borderColor:'#ffffff'}}
                   value = {this.state.regUPwd}
                   onChange = {this.changeRegUPwd}
                   readOnly = {this.state.lockRegUPwd}
                   id = "regUPwd"
                   style={{height:'auto', borderColor:'transparent'}}
                 />
                 <FontAwesomeIcon className="envelopeIcon" onClick={()=>{this.showRegUPwd()}} style={{marginLeft:10, paddingTop:3, color:"#000000", margin:8}} size='sm' icon={faEyeSlash}/>
               </div>
               <p className="inputErrorTxt">{RegUPwdErrorTxt}</p>
             </Form.Group>

             <Form.Group controlId="formBasicCheckbox" style={{paddingLeft:10}}>
               <div className="flexDirectionRow">
                 <Form.Check
                   custom
                   inline
                   label= {RegisterLabel}
                   type='radio'
                   id='agreement'
                   onClick={()=>{this.selectRegUAgreement()}}
                 />
                 {this.state.regUAgreementError == true ?
                 <FontAwesomeIcon className="envelopeIcon" style={{marginLeft:10, paddingTop:3, color:"#ED2E7E", margin:8, marginRigth:10}} size='lg' icon={faTimes}/>
                 : null }
               </div>
             </Form.Group>
             <div className="flexDirectionRow">
               <button variant="primary" type="button" onClick={()=>{this.submitURegister()}} className="signInBtn2">
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
               <div className="flexDirectionRow emailInputBox2" style={{backgroundColor:RegEmEmailBackgroundColor, boxShadow:RegEmEmailBoxShadow}}>
                 <div>
                   <img src={EnvelopeIcon} className="envelopeIcon"/>
                 </div>
                 <Form.Control
                  type="text"
                  size="sm"
                  placeholder="Email Address"
                  className="emailInput"
                  style={{borderColor:'#ffffff'}}
                  value = {this.state.regEmEmail}
                  onChange = {this.changeRegEmEmail}
                  readOnly = {this.state.lockRegEmEmail}
                  style={{height:'auto', borderColor:'transparent'}}
                  />
               </div>
             </Form.Group>

             <Form.Group controlId="formBasicEmail">
               <div className="flexDirectionRow emailInputBox2" style={{backgroundColor:RegEmFnameBackgroundColor, boxShadow:RegEmFnameBoxShadow}}>
                 <div>
                   <FontAwesomeIcon className="envelopeIcon" style={{marginLeft:10, paddingTop:3, color:"#00237B"}} size='sm' icon={faUser}/>
                 </div>
                 <Form.Control
                   type="text"
                   size="sm"
                   placeholder="First Name"
                   className="emailInput"
                   style={{borderColor:'#ffffff'}}
                   value = {this.state.regEmFname}
                   onChange = {this.changeRegEmFname}
                   readOnly = {this.state.lockRegEmFname}
                   style={{height:'auto', borderColor:'transparent'}}
                 />
               </div>
             </Form.Group>

             <Form.Group controlId="formBasicEmail">
               <div className="flexDirectionRow emailInputBox2" style={{backgroundColor:RegEmLnameBackgroundColor, boxShadow:RegEmLnameBoxShadow}}>
                 <div>
                   <FontAwesomeIcon className="envelopeIcon" style={{marginLeft:10, paddingTop:3, color:"#00237B"}} size='sm' icon={faUser}/>
                 </div>
                 <Form.Control
                   type="text"
                   size="sm"
                   placeholder="Last Name"
                   className="emailInput"
                   style={{borderColor:'#ffffff'}}
                   value = {this.state.regEmLname}
                   onChange = {this.changeRegEmLname}
                   readOnly = {this.state.lockRegEmLname}
                   style={{height:'auto', borderColor:'transparent'}}
                 />
               </div>
             </Form.Group>

             <Form.Group controlId="formBasicEmail">
               <div className="flexDirectionRow emailInputBox2" style={{backgroundColor:RegEmPhoneBackgroundColor, boxShadow:RegEmPhoneBoxShadow}} >
                 <div>
                   <img src={NgFlag} className="envelopeIcon"/>
                 </div>
                 <Form.Control
                    type="text"
                    size="sm"
                    placeholder="Phone Number"
                    className="emailInput"
                    style={{borderColor:'#ffffff'}}
                    value = {this.state.regEmPhone}
                    onChange = {this.changeRegEmPhone}
                    readOnly = {this.state.lockRegEmPhone}
                    style={{height:'auto', borderColor:'transparent'}}
                  />
               </div>
             </Form.Group>


             <Form.Group controlId="formBasicEmail">
               <div className="flexDirectionRow emailInputBox2" style={{backgroundColor:RegEmDobBackgroundColor, boxShadow:RegEmDobBoxShadow}} >
                 <div>
                   <FontAwesomeIcon className="envelopeIcon" style={{marginLeft:10, paddingTop:3, color:"#00237B"}} size='sm' icon={faCalendar}/>
                 </div>
                 <Form.Control
                   type="text"
                   size="sm"
                   placeholder="Y-M-D Date Of Birth"
                   className="emailInput"
                   style={{borderColor:'#ffffff'}}
                   value = {this.state.regEmDob}
                   onChange = {this.changeRegEmDob}
                   readOnly = {this.state.lockRegEmDob}
                   style={{height:'auto', borderColor:'transparent'}}
                 />
               </div>
             </Form.Group>

             <div className="flexDirectionRow genderInput" style={{margin:0,}}>
              <p id="genderInputTxt">Gender</p>
              <Form.Check
                custom
                inline
                label= "Male"
                type='radio'
                id="maleRegEmCheckBox"
                onClick={()=>{this.selectRegEmGender('male')}}
              />
              <Form.Check
                custom
                inline
                label= "Female"
                type='radio'
                id="femaleRegEmCheckBox"
                onClick={()=>{this.selectRegEmGender('female')}}
              />
              {this.state.regEmGenderError == true ?
              <FontAwesomeIcon className="envelopeIcon" style={{marginLeft:10, paddingTop:3, color:"#ED2E7E", margin:0}} size='lg' icon={faTimes}/> : null }
             </div>

             <Form.Group controlId="formBasicPassword">
               <div className="flexDirectionRow emailInputBox2" style={{backgroundColor:RegEmPwdBackgroundColor, boxShadow:RegEmPwdBoxShadow}}>
                 <div>
                   <img src={PadLockIcon} className="padLockIcon"/>
                 </div>
                 <Form.Control
                   type="password"
                   size="sm"
                   placeholder="Password"
                   className="emailInput"
                   style={{borderColor:'#ffffff'}}
                   value = {this.state.regEmPwd}
                   onChange = {this.changeRegEmPwd}
                   readOnly = {this.state.lockRegEmPwd}
                   id= "regEmPwd"
                   style={{height:'auto', borderColor:'transparent'}}
                 />
                 <FontAwesomeIcon className="envelopeIcon" onClick={()=>{this.showRegEmPwd()}} style={{marginLeft:10, paddingTop:3, color:"#000000", margin:8}} size='sm' icon={faEyeSlash}/>
               </div>
               <p className="inputErrorTxt">{RegEmPwdErrorTxt}</p>
             </Form.Group>

             <Form.Group controlId="formBasicCheckbox" style={{paddingLeft:10}}>
               <div className="flexDirectionRow">
                 <Form.Check
                   custom
                   inline
                   label= {RegisterLabel}
                   type='radio'
                   id='agreement'
                   onClick={()=>{this.selectRegEmAgreement()}}
                 />
                 {this.state.regEmAgreementError == true ?
                 <FontAwesomeIcon className="envelopeIcon" style={{marginLeft:10, paddingTop:3, color:"#ED2E7E", margin:8, marginRigth:10}} size='lg' icon={faTimes}/>
                 : null }
               </div>
             </Form.Group>
             <div className="flexDirectionRow">
               <button variant="primary" type="button" onClick={()=>{this.submitEmRegister()}} className="signInBtn2">
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
           <NavBar/>
          </div>
          <div className="center loginBanner1" style={{minHeight:'100vh', }}>
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
                <Col sm={7} style={{margin:0, padding:0, backgroundColor:'#ffffff', borderRadius:'18px'}}>
                  {this.state.showSuccessBar == true ? SuccessBar : null}
                  {this.state.showErrorBar == true ? ErrorBar : null}
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


    return(
        <>
          {ShowRegisterVerifyPhone == true ? RegisterVerifyPhone : LoginSuccessful == true ? <Redirect to="/dashboard" /> : LoginPage}
        </>
    )
  }
}

export default Ibloov;
