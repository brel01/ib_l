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
import Burna from '../../images/burna.svg';
import Background2 from '../../background2.png';
import Image1 from '../../images/image1.png';
import Lagos from '../../images/lagos.png';
import Accra from '../../images/accra.png';
import Amsterdam from '../../images/amsterdam.png';
import Texas from '../../images/texas.png';
import Seoul from '../../images/seoul.png';

import AppleStore from '../../images/appleStore.png';
import PlayStore from '../../images/playStore.png';

import Twitter from '../../images/twitter.svg';
import Instagram from '../../images/instagram.png';
import Youtube from '../../images/youtube.png';
import Share from '../../images/share.svg';
import LinkedIn from '../../images/linkedin.svg';
import FaceBook from '../../images/facebook.svg';

import Influencer1 from '../../images/influencer1.png';
import Influencer2 from '../../images/influencer2.png';
import Influencer3 from '../../images/influencer3.png';
import Influencer4 from '../../images/influencer4.png';
import Influencer5 from '../../images/influencer5.png';
import Influencer6 from '../../images/influencer6.png';

import Face1 from "../../images/face/face1.svg";

import FaceL1 from "../../images/face/faceL1.svg";

import Ellipse1  from '../../images/face/ellipse1.svg';
import Ellipse2  from '../../images/face/ellipse2.svg';
import Ellipse3  from '../../images/face/ellipse3.svg';
import Ellipse4  from '../../images/face/ellipse4.svg';

import PartyIcon from '../../icons/party.svg';

import Icon1 from '../../vector/icon1.svg';

import Icon2 from '../../vector/icon2.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimes, faPortrait, faEyeSlash, faUser, faEnvelope, faInfo, faCoffee , faMoneyBill, faChartLine, faSync, faHandshake, faCheck, faArrowRight, faArrowLeft, faGlobe, faSearch} from '@fortawesome/free-solid-svg-icons'

import NavBar from "..//NavBar/NavBar"
import Banner from '../Header/Banner'

import Star from '../../icons/star.svg';
import StarGreen from '../../icons/starGreen.svg';

import EnvelopeIcon from '../../icons/envelope.svg';
import PadLockIcon from '../../icons/padLock.svg';

import Love from '../../icons/love.svg';
import Background from '../../background.svg';

import {Link, Redirect} from 'react-router-dom';

class Ibloov extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      base_url: "https://ibloov-backend.herokuapp.com/",
      event: [],

      // co
      commentFname:'',
      commentFnameBoxShadow:'transparent',
      commentFnameBackgroundColor:'transparent',
      commentFnameErrorTxt:'',
      commentLockFname: false,

      commentEmail:'',
      commentEmailBoxShadow: 'transparent',
      commentEmailBackgroundColor:'transparent',
      commentEmailErrorTxt:'',
      commentLockEmail: false,

      commentMessage:'',
      commentMessageBoxShadow: 'transparent',
      commentMessageBackgroundColor: 'transparent',
      commentMessageErrorTxt:'',
      commentLockMessage:false,


      loginSuccesfull:false,
    }

    this.changeCommentFname = this.changeCommentFname.bind(this);
    this.changeCommentEmail = this.changeCommentEmail.bind(this);
    this.changeCommentMessage = this.changeCommentMessage.bind(this);
  }

  changeCommentFname(event){
    this.setState({commentFname: event.target.value});
    this.setState({commentFnameBackgroundColor:'transparent', commentFnameBoxShadow:'0 0 0 0rem rgba(237, 46, 126, 1)'});
  }

  changeCommentEmail(event){
    this.setState({commentEmail: event.target.value});
    this.setState({commentEmailBackgroundColor:'transparent', commentEmailBoxShadow:'0 0 0 0rem rgba(237, 46, 126, 1)'});
  }

  changeCommentMessage(event){
    this.setState({commentMessage: event.target.value});
    this.setState({commentMessageBackgroundColor:'transparent', commentMessageBoxShadow:'0 0 0 0rem rgba(237, 46, 126, 1)'});
  }


  fetchEventDetails(){
    // window.base_url = "https://ibloov-backend.herokuapp.com/ ";
      var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImxvY2FsIjp7InBhc3N3b3JkIjoiJDJhJDEwJE5BQ2dCRjh1MlpBMGdkaUxCeGFndWUzcy9RbzN2aE93ZDhHUnBZSjl0em5TTVdnVWRRQVZHIiwiZmlyc3ROYW1lIjoiVG9rcyIsImxhc3ROYW1lIjoiT2pvIiwidmVyaWZpY2F0aW9uQ29kZSI6W119LCJpc1Bob25lTnVtYmVyVmVyaWZpZWQiOmZhbHNlLCJfaWQiOiI1ZTkyZTY0MjAzN2M3YmE1YmQzZGVkMDkiLCJlbWFpbCI6InRlc3Q3QHRlc3QuY29tIiwiYXV0aE1ldGhvZCI6ImxvY2FsIiwiaXNFbWFpbFZlcmlmaWVkIjpmYWxzZSwiY3JlYXRlZEF0IjoiMjAyMC0wNC0xMlQwOTo1ODoyNi4wNzhaIiwidXBkYXRlZEF0IjoiMjAyMC0wNC0xMlQwOTo1ODoyNi4wNzhaIn0sImlhdCI6MTU4NjY4NTUxNCwiZXhwIjoxNTg2NzI4NzE0fQ.SH6bfa-Px0v_XM7dSZr5Ug0vnA2YlE_kWOUDph9ltyM");

    var raw = "";

    var requestOptions = {
      method: 'GET',
      headers: {
        myHeaders,
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
    };

    fetch(this.state.base_url+"v1/event/live", requestOptions)
    .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson['data']);
        this.setState({events: responseJson['data'] })
      })
      .catch(error => console.log('error', error));

  }

  componentDidMount(){
    this.fetchEventDetails();

    console.log(this.state.events);
  }

render(){

  const CommentFnameBackgroundColor =  this.state.commentFnameBackgroundColor;
  const CommentFnameBoxShadow = this.state.commentFnameBoxShadow;
  const CommentFnameErrorTxt = this.state.commentFnameErrorTxt;

  const CommentEmailBackgroundColor =  this.state.commentEmailBackgroundColor;
  const CommentEmailBoxShadow = this.state.commentEmailBoxShadow;
  const CommentEmailErrorTxt = this.state.commentEmailErrorTxt;

  const CommentMessageBackgroundColor =  this.state.commentMessageBackgroundColor;
  const CommentMessageBoxShadow = this.state.commentMessageBoxShadow;
  const CommentMessageErrorTxt = this.state.coMessageErrorTxt;

  const Events =  this.state.events;
    const WelcomePage = (
      <div className="bannerDashbaord" style={{minHeight:'100vh', background:'#00237B'}}>
          <div className="bannerDashbaord1"  style={{backgroundImage: `url("${Background}")`, margin:0, height:'100%', width:'100%'}}>
              <NavBar />
          </div>

          <div className="bannerDashbaord2" style={{background:'#ffffff', minHeight:'100vh'}}>
            <Row style={{margin:0}}>
              <Col  style={{margin:0}}>
                <h2 id="dashboardTxt1">Following</h2>
                <h2 id="dashboardTxt2">120</h2>
              </Col>
              <Col style={{margin:0}}>
                
              </Col>
            </Row>
          </div>


      </div>
    )

    return(
        <>
          {WelcomePage}
        </>
    )
  }
}

export default Ibloov;
