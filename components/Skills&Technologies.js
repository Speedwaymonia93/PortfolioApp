import React from 'react';
import './Styles.css';
import techImg from '../images/raw_code.svg';
import dataSkills from '../data/skillsData.json';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SkillsAndTechnologies(){

    return(
        <>
        <div id="skills">
            <div className="title">
                <h2 className="style_h2">Skills &amp; Technologies</h2>
				<img className="images" src={techImg} alt="techImage"/>
            </div>

        <div className="container">
        {
            dataSkills.map((element)=>{
                let widthLength = element.percentageValue
                return(
                    <div className="sk" key={element.id}>
                        <div className="name">{element.name}</div>
                        <div className="percent">
                            <div className="progress" style={{width:widthLength}}></div>
                        </div>
                        <div className="value">{element.percentageValue}</div>
                    </div>

                )
            })
        }

        </div>
        </div>
        </>
        
    )
}

export default SkillsAndTechnologies