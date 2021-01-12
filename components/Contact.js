import React from 'react';
import './Styles.css';
import contactImg from '../images/contact_info.svg';
import {Form, FormControl, FormGroup, FormLabel, Row, Col, Button, Container} from 'react-bootstrap';
import { faFacebookF, faLinkedin, faGithub, faFacebookMessenger, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Contact extends React.Component{
    constructor(){
        super();
        this.state = {
            firstName:'',
            surName:'',
            email:'',
            message: ''
        }

    };

    render(){
        const inputStyle = {
            background:"transparent",
            borderTop: "none",
            borderLeft:"none",
            borderRight: "none",
            borderBottom: "2px solid #4d4d4d",
            borderRadius: "0px"
            };
        const messageContentStyle={
            backgroundColor: "transparent",
            borderBottom: "2px solid #4d4d4d",
            borderTop: "none",
            borderLeft:"none",
            borderRight: "none",
            borderRadius: "0px"
        };

    return(
        <div id="contact">
            <h2 className="style_h2">Contact</h2>
            <img className="images" src={contactImg}/>
            <h3 className="style_h3_contact">You can contact me by social media or use the form below</h3>
            <div className="testo">
            <Row>
                    <Col>
                    <a href="#" className="link_style"><FontAwesomeIcon className="icon_contact_style" icon={faFacebookF}/></a>
                    </Col>
                    <Col>
                    <a href="#" className="link_style"><FontAwesomeIcon className="icon_contact_style" icon={faFacebookMessenger}/></a>
                    </Col>
                    <Col>
                    <a href="#" className="link_style"><FontAwesomeIcon className="icon_contact_style" icon={faLinkedin}/></a>
                    </Col>
                    <Col>
                    <a href="#" className="link_style"><FontAwesomeIcon className="icon_contact_style" icon={faGithub}/></a>
                    </Col>
                    <Col>
                    <a href="#" className="link_style"><FontAwesomeIcon className="icon_contact_style" icon={faInstagram}/></a>
                    </Col>
                </Row>
                </div>
           
            <Form id="contact-form" className="form_style">
                <FormGroup controlId="nameForm">
                    <FormLabel>Name</FormLabel>
                    <FormControl type="text" placeholder="Your name" className="input_style" style={inputStyle} name="firstName"
                    value={this.state.firstName}
                    ></FormControl>
                </FormGroup>
                <FormGroup controlId="surnameForm">
                    <FormLabel>Surname</FormLabel>
                    <FormControl type="text" placeholder="Your surname" className="input_style" style={inputStyle} name="surName"
                     value={this.state.surName}></FormControl>
                </FormGroup>
                <FormGroup controlId="emailForm">
                    <FormLabel>Email</FormLabel>
                    <FormControl type="email" placeholder="Your email" style={inputStyle} name="email"
                    value={this.state.email}></FormControl>
                </FormGroup>
                <FormGroup controlId="messageForm">
                    <FormLabel>How can I help you?</FormLabel>
                    <FormControl as="textarea" rows="7" className="text_area_style" style={messageContentStyle} name="message"
                    value={this.state.message} />
                </FormGroup>
                <div className="button_style">
                    <Button variant="primary" type="submit">Submit</Button>
                </div>
            </Form>
        </div>
    );

}
}


export default Contact