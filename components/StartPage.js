import React from 'react'
import './Styles.css'
import startImg from '../images/womanDev.svg';
import {Container, Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function StartPage(props) {
    return (
        <>
        <Container fluid className="start_page start-page">
            <Row>
                <Col>
                    <header>
                        
<div class="loading">
    <div class="loading__letter style_h1">I</div>
    <div class="loading__letter style_h1">'</div>
    <div class="loading__letter style_h1">m</div>
    <div class="loading__letter style_h1"></div>
    <div class="loading__letter style_h1">M</div>
    <div class="loading__letter style_h1">o</div>
    <div class="loading__letter style_h1">n</div>
    <div class="loading__letter style_h1">i</div>
    <div class="loading__letter style_h1">k</div>
    <div class="loading__letter style_h1">a</div>
  </div>
                           
                            <h2 className="style_h2">Self-taught Front-End Developer</h2>
                            <img className="womanDev" src={startImg} alt="womanImage" />
                            <p className="start_paragraph">HTML | CSS | JavaScript | Bootstrap | React | Node.JS | Express | MongoDB </p>
                        
                            </header>
                </Col>
                    
            </Row>
        </Container>
    </>

    );
  }


export default StartPage