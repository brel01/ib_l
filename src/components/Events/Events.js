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
import Background from '../../images/eventbanner.jpg';

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


import NavBar from "..//NavBar/NavBar"
import Banner from '../Header/Banner'

import {Link, Redirect} from 'react-router-dom';

class Ibloov extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      base_url: "https://ibloov-backend.herokuapp.com/",
      events: [],
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
    this.fetchEvents();

    console.log(this.state.events);
  }

render(){
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

  const Events =  this.state.events;
    const WelcomePage = (
      <div style={{margin:0}}>
          <div className="banner2Event"   style={{margin:0, height:'100%', width:'100%'}}>
              <NavBar />
              <div>
                  <Jumbotron className="banner2_2" style={{backgroundColor:'transparent', width:'100%', height:'70vh',  borderRadius:0, color:'#ffffff'}}>
                      <h1 id="banner2_2txt">Live Events</h1>
                  </Jumbotron>
              </div>
          </div>
          <div>
            <Row style={{margin:0}} className="session2">
              <Col sm={8} style={{margin:0}} className="flexEndCol">
                <div>
                  <Row style={{margin:0}}>
                    <div style={{margin:10}}>
                      <Row style={{margin:0}}>
                        <Col sm={12} style={{margin:0}}>
                          <h2 style={{fontSize:'10px'}}>LOOKING FOR</h2>
                        </Col>
                        <Col sm={12} style={{margin:0}}>
                          <InputGroup size="sm" className="mb-3">
                            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" style={{borderColor:'#757171', borderRadius:0, borderStyle:'solid', borderWidth:0, borderBottomWidth:2 }}/>
                          </InputGroup>
                        </Col>
                      </Row>
                    </div>
                    <div style={{margin:10}}>
                      <Row style={{margin:0}}>
                        <Col sm={12} style={{margin:0}}>
                          <h2 style={{fontSize:'10px'}}>IN</h2>
                        </Col>
                        <Col sm={12} style={{margin:0}}>
                          <InputGroup size="sm" className="mb-3">
                            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" style={{borderColor:'#757171', borderRadius:0, borderStyle:'solid', borderWidth:0, borderBottomWidth:2 }}/>
                          </InputGroup>
                        </Col>
                      </Row>
                    </div>
                    <div style={{margin:10}}>
                      <Row style={{margin:0}}>
                        <Col sm={12} style={{margin:0}}>
                          <h2 style={{fontSize:'10px'}}>WHEN</h2>
                        </Col>
                        <Col sm={12} style={{margin:0}}>

                          <InputGroup size="sm" className="mb-3">
                            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" style={{borderColor:'#757171', borderRadius:0, borderStyle:'solid', borderWidth:0, borderBottomWidth:2 }}/>
                          </InputGroup>
                        </Col>
                      </Row>
                    </div>
                  </Row>
                </div>
              </Col>
              <Col sm={4} style={{margin:0}}>
                <div style={{paddingTop:5}}>
                  <div className="flexDirectionRow" style={{width:'100%'}}>
                    <div className="flexDirectionRow boxbox1" >
                      <FontAwesomeIcon icon={faSearch} size="xl" style={{}}/>                    
                    </div>
                    <p id="" style={{fontWeight:'bold', position:'relative', marginTop:20}}>Search</p>
                    <div className="boxbox2">
                      <img src={Icon1}/>
                    </div>
                  </div>
                </div>
                
              </Col>
            </Row>
          </div>


          <div style={{backgroundColor: '#F1F1F1'}}>
            <div class="session3" style={{margin:0, height:'100%', paddingTop:60, paddingBottom:60}}>
              <div>
                <h1 id="text5" style={{textAlign:'center', color:'#18191F'}}>Upcoming Events</h1>
                <p id="text6" style={{textAlign:'center'}}>Select any of the category below to display the featured</p>
              </div>

              <div className="eventBoxCenter">

                <Row className="eventCenter" style={{margin:0, width: '90%', }}>

                {this.state.events.map((event, i) => (
                  <div style={{padding:10}}>
                    <div>
                      <div class="card" style={{margin:0, borderRadius:10, width:250}}>
                        <div>
                          <img src={Image1} id="vector" style={{width:'100%', marginBottom:20,}} />
                        </div>
                        <p id="displayBoxTxt1" style={{margin:0, padding:0, marginLeft:20,}}>{this.state.events[i]['startDate']}</p>
                        <div className="flexDirectionRow" id="spaceBetween" style={{marginLeft:20}}>
                          <div><p id="displayBoxTxt2">{this.state.events[i]['name']}</p></div>

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
                            <center>
                              <Link to="/event">
                                <Button variant="primary" id="eventBtn"><center><p id="eventBtnTxt">Attend</p></center></Button>{' '}
                              </Link>
                            </center>
                          </div>
                        </div>

                        <div></div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                ))}
                </Row>

              </div>
            </div>
          </div>



          <div className="footer">
            <Row style={{margin:0}}>
              <Col style={{margin:0}}>
                <Row style={{margin:0}}>
                  <Col style={{margin:0}}>
                    <div>
                      <a><p id="textFooterTop">Company</p></a>
                      <a><p id="textFooter2">About</p></a>
                      <a><p id="textFooter2">Blog</p></a>
                      <a><p id="textFooter2">Careers</p></a>
                      <a><p id="textFooter2">Contact Us</p></a>
                    </div>
                  </Col>
                  <Col style={{margin:0}}>
                    <div>
                      <a><p id="textFooterTop">Support</p></a>
                      <a><p id="textFooter2">Help Center</p></a>
                      <a><p id="textFooter2">Safety Center</p></a>
                    </div>
                  </Col>
                </Row>
              </Col>

              <Col style={{margin:0}}>
                <Row style={{margin:0}}>
                  <Col style={{margin:0}}>
                    <div>
                      <a><p id="textFooterTop">Legal</p></a>
                      <a><p id="textFooter2">Cookies Policy</p></a>
                      <a><p id="textFooter2">Privacy Policy</p></a>
                      <a><p id="textFooter2">Terms Of Service</p></a>
                    </div>
                  </Col>
                  <Col style={{margin:0}}>
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
          {WelcomePage}
        </>
    )
  }
}

export default Ibloov;
