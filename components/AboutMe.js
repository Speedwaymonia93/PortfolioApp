import React from 'react'
import './Styles.css'
import aboutImg from '../images/personal_info.svg';
import { faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function AboutMe()
{
    return(
        <div id="about">
		<h2 className="style_h2">About me</h2>
		<img className="images" id="img_about" src={aboutImg} />
		<p>I'm a self-taught Front-End Developper. I got fascinated by programming by pure coincidence and I immediately relized that I'm cut out for it. Apart form coding I am a huge fan of physical actiivity and healthy life style. I love riding a bike, doing CrossFit and Calisthenics and dancing Zumba. In my free time I listen to Latin and Electronic music. Moreover, I adore cooking and baking. I want to work as a Software Engineer for 4 main reasons</p>
		
		<ul className="about_me_list"> 
			<li className="reasons"><FontAwesomeIcon icon={faCheckCircle} className="circle_style"/> I believe that this job is meaningfull and may change life of other people</li>
			<li className="reasons"><FontAwesomeIcon icon={faCheckCircle} className="circle_style"/>It makes you develop previously undiscovered skills </li>
			<li className="reasons"><FontAwesomeIcon icon={faCheckCircle} className="circle_style"/>It gives you possibility to get out of your comfort zone and set out to uncharted waters of cyberspace
			</li>
			<li className="reasons"><FontAwesomeIcon icon={faCheckCircle} className="circle_style"/>Finally, it lets you meet fascinating and unique people tant may enrich you with their knowledge and their way of looking at various problems</li>
            </ul>
		
	</div> 
    )
}
export default AboutMe