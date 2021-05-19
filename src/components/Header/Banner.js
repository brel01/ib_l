import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Jumbotron from 'react-bootstrap/Jumbotron';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faMoneyBill, faChartLine, faSync, faHandshake, faCheck, faArrowRight, faArrowLeft, faGlobe, faSearch} from '@fortawesome/free-solid-svg-icons'

import Button from 'react-bootstrap/Button';

function Banner() {
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
    return (
        <div>
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
    )
}

export default Banner
