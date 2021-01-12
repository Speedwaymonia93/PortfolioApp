import React from 'react';
import './Styles.css';
import communicationImg from '../images/code_project.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button, Col, Row} from 'react-bootstrap';
import projectsData from '../data/projectsData.json';
function Projects(){
return(

    <>
    <div id="projects">
		<h2 className="style_h2">Projects</h2>
		<img className="images" src={communicationImg} />
        <div className="projects_container w-100">
          <Row>
            {
                projectsData.map((item)=>{
                  return(
                    <>
                    <Col>
                    <Card className="h-100 card-style text-center bg-dark">
                        <Card.Img variant="top" src={item.image} className="project_images"/>
                          <Card.Body className="w-100">
                            <Card.Title><h5 className="project_title">{item.projectTitle}</h5></Card.Title>
                            <Card.Text className="project_description">{item.projectDescription}</Card.Text>
                            <Button variant="primary">Visit</Button>
                        </Card.Body>
                      </Card>
                      </Col>
                    
                    </>
                  )
                })
            }
          </Row>
        
        </div>
	</div>
    </>
)
}

export default Projects