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
      <div>
          <div className="banner1Event"  style={{margin:0, height:'100%', width:'100%'}}>
              <NavBar />
              <div>
                  <Jumbotron className="banner2" style={{backgroundColor:'transparent',  width:'100%', height:'70vh',  borderRadius:0, color:'#ffffff'}}>
                  </Jumbotron>
              </div>
          </div>

          <div className="">
            <Row  style={{margin:0}} className="eventBox1">
              <Col sm={8} style={{margin:0}} className="flexEndCol">
                <div>
                  <Row style={{margin:0}}>
                    <Col style={{margin:0}}>
                      <h2 id="eventTxt1">Burna Live 3</h2>
                      <p id="eventTxt2">Lagos, Nigeria</p>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col style={{margin:0}} sm={4}>
                <div class="eventBox3">

                    <h2 id="eventTxt3">&#36; 50.00</h2>
                    <Button variant="primary" id="event2Btn"><span id="event2BtnTxt">Concert</span></Button>{' '}

                </div>
              </Col>
            </Row>
          </div>

          <div className="eventBox4">
            <Row style={{margin:0}}>
              <Col sm={6} style={{margin:0, padding:20}}>
                <div>
                  <h2 id="eventTxt4">Description</h2>
                  <p id="eventTxt5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Penatibus dui vitae lectus pellentesque semper tellus consectetur scelerisque. Vehicula feugiat a a at. Egestas sagittis vestibulum aliquet quam. Facilisi nec porta velit praesent vitae vestibulum, suscipit fermentum in. Ac aliquet enim etiam nulla. Sed mauris, amet, nulla tempor elit. Sit ipsum malesuada sapien at morbi mauris leo arcu. Pharetra, quam egestas sed lacus, ac egestas. Elementum, aliquet duis justo placerat tellus aliquam. Tincidunt sapien ut ut enim.

                    Pellentesque sem interdum posuere urna, donec in adipiscing ut est. Quam lorem donec varius metus mi massa donec.
                  </p>
                </div>

                <div>
                  <h2 id="eventTxt6">How can I contact the organizer for any question?</h2>
                  <p id="eventTxt7">Please fill the form below to contact the organizer</p>
                  <div>
                    <h2 id="eventTxt8">
                      Comments <span id="eventTxt9">(2)</span>
                    </h2>

                    <div className="eventBox5">
                      <div className="flexDirectionRow">
                        <div className="flexDirectionRow">
                          <img src={Face1} />
                          <div className="eventBox6">
                            <p id="eventTxt10">Mary Jane</p>
                            <p id="eventTxt11">January 24th 2021 at 06:02AM</p>
                          </div>
                        </div>
                        <div>
                          <div className="flexDirectionRow eventBox8">
                            <img src={Star} />
                            <img src={Star} />
                            <img src={Star} />
                            <img src={StarGreen} />
                          </div>
                        </div>
                      </div>
                      <div className="eventBox7">
                        <p id="eventTxt12">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Penatibus dui vitae lectus pellentesque semper tellus consectetur scelerisque. Vehicula feugiat a a at. Egestas sagittis vestibulum aliquet quam. Facilisi nec porta
                        </p>
                      </div>
                    </div>

                    <div className="eventBox5">
                      <div className="flexDirectionRow">
                        <div className="flexDirectionRow">
                          <img src={Face1} />
                          <div className="eventBox6">
                            <p id="eventTxt10">Mary Jane</p>
                            <p id="eventTxt11">January 24th 2021 at 06:02AM</p>
                          </div>
                        </div>
                        <div>
                          <div className="flexDirectionRow eventBox8">
                            <img src={Star} />
                            <img src={Star} />
                            <img src={Star} />
                            <img src={StarGreen} />
                          </div>
                        </div>
                      </div>
                      <div className="eventBox7">
                        <p id="eventTxt12">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Penatibus dui vitae lectus pellentesque semper tellus consectetur scelerisque. Vehicula feugiat a a at. Egestas sagittis vestibulum aliquet quam. Facilisi nec porta
                        </p>
                      </div>
                    </div>

                  </div>
                </div>

                <div>
                  <p id="eventTxt6">Add Comment</p>
                  <div className="eventBox9" style={{margin:0}}>
                    <Form>

                      <Form.Group controlId="formBasicEmail">
                        <div className="flexDirectionRow emailInputBox3" style={{backgroundColor:CommentFnameBackgroundColor, boxShadow:CommentFnameBoxShadow}}>
                          <div>
                            <FontAwesomeIcon className="envelopeIcon" style={{marginLeft:10, paddingTop:3, color:"#000000", margin:8}} size='sm' icon={faUser}/>
                          </div>
                          <Form.Control
                           type="text"
                           size="sm"
                           placeholder="Full Name"
                           className="emailInput"
                           style={{borderColor:'#ffffff'}}
                           value = {this.state.commentFname}
                           onChange = {this.changeCommentFname}
                           readOnly = {this.state.commentLockFname}
                           style={{padding:0, width:'inherit', height:'auto', borderColor:'transparent'}}
                           rows="100%"
                           />
                        </div>
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword">
                        <div className="flexDirectionRow emailInputBox3" style={{backgroundColor:CommentEmailBackgroundColor, boxShadow:CommentEmailBoxShadow}}>
                          <div>
                            <img src={EnvelopeIcon} className="envelopeIcon"/>
                          </div>
                          <Form.Control
                            type="txt"
                            size="sm"
                            placeholder="Email"
                            className="emailInput"
                            style={{borderColor:'#ffffff'}}
                            value = {this.state.commentEmail}
                            onChange = {this.changeMessageEmail}
                            readOnly = {this.state.commentLockEmail}
                            style={{padding:0, width:'inherit', height:'auto', borderColor:'transparent'}}
                          />

                        </div>
                      </Form.Group>

                      <div className="flexDirectionRow emailInputBox3" style={{backgroundColor:CommentMessageBackgroundColor, boxShadow:CommentMessageBoxShadow}}>
                        <textarea                         
                         size="sm"
                         placeholder="Message"
                         style={{borderColor:'#ffffff'}}
                         value = {this.state.commentMessage}
                         onChange = {this.changeCommentMessage}
                         readOnly = {this.state.commentLockMessage}
                         id="eventCommentMessage"
                         rows="100%"
                         cols="10"
                         style={{padding:0, width:'inherit', height:'auto', borderColor:'transparent'}}
                         ></textarea>
                       </div>

                       <div className="buttonSection">
                       
                        <Button variant="primary" id="eventBtn2"><center><p id="eventBtnTxt2">Attend</p></center></Button>{' '}
                        </div>



                    </Form>
                  </div>
                </div>
              </Col>
              <Col sm={6} style={{margin:0, paddingBottom:20}}>
                <div className="eventBox10">

                  <div className="eventBox11">
                    <div className="flexDirectionRow eventBox12">
                      <div className="eventBox15">
                        <p id="eventTxt14">STARTS</p>

                        <p id="eventTxt15">07:00AM</p>
                        <p id="eventTxt16">17th April 2021</p>
                      </div>
                      <div className="eventBox16">
                        <p id="eventTxt17">ENDS</p>

                        <p id="eventTxt18">07:00AM</p>
                        <p id="eventTxt19">17th April 2021</p>
                      </div>
                    </div>
                    <div className="eventBox14">
                      <p id="eventTxt20">Add to Calendar</p>
                    </div>
                  </div>

                  <div className="eventBox17">
                    <div className="flexDirectionRow eventBox18">
                      <img src={FaceL1} />
                      <div className="eventBox19">
                        <p id="eventTxt21">John Bull</p>
                        <p id="eventTxt22">VIEW PROFILE</p>
                      </div>
                    </div>
                  </div>

                  <div className="eventBox20">
                    <Button variant="primary" id="eventBtn3"><center><p id="eventBtnTxt3">Attend Event</p></center></Button>{' '}
                    <Button variant="primary" id="eventBtn4"><center><p id="eventBtnTxt3">Promote Event</p></center></Button>{' '}

                    <div className='eventBox21 flexDirectionRow' style={{width:'100%'}}> 

                      <div className="flexDirectionRow" style={{width:'50%'}}>
                        <img src={Ellipse1} className="ellipse1"/>
                        <img src={Ellipse2} className="ellipse2"/>
                        <img src={Ellipse3} className="ellipse3"/>
                        <img src={Ellipse4} className="ellipse4"/>
                        <div className="ellipseNum">
                          <p id="ellipseNumTxt">22</p>
                        </div>
                      </div>

                      <div className="eventBox22 flexDirectionRow" style={{width:'30%'}}>   
                        <p id="evenTxt23" style={{paddingTop:10}}>51</p>                     
                        <img src={Love} id="eventImg" style={{position:'relative', top:'50%', width:'2vh'}} />                        
                      </div>

                    </div>
                  </div>

                  <div className="eventBox23">                  
                    <h2 id="eventTxt23">Tags</h2>                    
                    <Row style={{margin:0}} className="eventBox24" style={{width: '100%',}}>
                      <div id="hashtagEventBtn" >#Davido</div>
                      <div id="hashtagEventBtn" >#La</div>
                      <div id="hashtagEventBtn" >#Abuja</div>
                      <div id="hashtagEventBtn" style={{width:150}}>#ChristmasCarol</div>
                      <div id="hashtagEventBtn" style={{width:120}} >#MalianFest</div>
                    </Row>
                  </div>

                  <div className="eventBox23" style={{paddingBottom:'10px'}}>
                    <h2 id="eventTxt24">Share</h2>
                     <div className="flexDirectionRow" style={{float:'left'}}>

                        <div  id="instagramIcon1" style={{backgroundColor:'#4267B2', padding:0, width:42, height:42, borderRadius:360}}>
                          <img src={FaceBook} style={{position:'relative', top:'20%', left:'25%'}}/>
                        </div>

                        <div  id="instagramIcon1" style={{backgroundColor:'#55ACEE', padding:0, width:42, height:42, borderRadius:360}}>
                          <img src={Twitter} style={{position:'relative', top:'20%', left:'25%'}}/>
                        </div>

                        <div  id="instagramIcon1" style={{backgroundColor:'#0077B5', padding:0, width:42, height:42, borderRadius:360}}>
                          <img src={LinkedIn} style={{position:'relative', top:'20%', left:'25%'}}/>
                        </div>

                        <div  id="instagramIcon1" style={{padding:0, width:42, height:42, borderRadius:360}}>
                          <img src={Share} style={{position:'relative', top:'20%', left:'25%'}}/>
                        </div>

                    </div>
                  </div>

                </div>
              </Col>
            </Row>
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
