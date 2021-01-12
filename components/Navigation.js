import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { faAddressCard, faGraduationCap,faKeyboard, faGlobe, faTasks, faEnvelopeOpen} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Styles.css'

class Navigation extends React.Component{


	render(){
		return(
			<div className="">
		<Container fluid className="navigation_page">
		<h3 className="style_h3">Discover me!</h3>
		
		<Row className="row_style">
		<Col className="col_style">
		<a href="#" className="link_style"><FontAwesomeIcon icon={faAddressCard} className="icon_style"></FontAwesomeIcon><h4 className="style_h4">About me</h4></a>
		</Col>
		<Col className="col_style">
		<a href="#" className="link_style"><FontAwesomeIcon icon={faGraduationCap} className="icon_style"></FontAwesomeIcon><h4 className="style_h4">Education</h4></a>
		</Col>
		<Col className="col_style">
		<a href="#" className="link_style"><FontAwesomeIcon icon={faKeyboard} className="icon_style"></FontAwesomeIcon><h4 className="style_h4">Skills&amp;Technologies</h4></a>
		</Col>
	</Row>
	<Row className="row_style">
		<Col>
			<a href="#" className="link_style"><FontAwesomeIcon icon={faGlobe} className="icon_style"></FontAwesomeIcon><h4 className="style_h4">Foreign languages</h4></a>
		</Col>
		<Col>
			<a href="#" className="link_style"><FontAwesomeIcon icon={faTasks} className="icon_style"></FontAwesomeIcon><h4 className="style_h4">Projects</h4></a>
		</Col>
		<Col>
			<a href="#" className="link_style"><FontAwesomeIcon icon={faEnvelopeOpen} className="icon_style"></FontAwesomeIcon><h4 className="style_h4">Contact</h4></a>
		</Col>
	</Row>
</Container>
</div>
		)
	}
}


export default Navigation
