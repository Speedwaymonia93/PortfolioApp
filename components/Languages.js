import React from 'react'
import './Styles.css'
import communicationImg from '../images/communication.svg';
import dataLanguages from '../data/languagesData.json';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Languages()
{
 return(
     
        <div id="languages">
            
            <h2 className="style_h2">Languages</h2>
            <img className="images" src={communicationImg} alt="communicationImg"/>
            <div className="lang_content">
                {
                    dataLanguages.map((element)=>{
                        return(
                            <>
                            <div className="lang_container">
                                <div className="lang_img">
                                        <img className="lang_icon" src={element.img}/>
                                </div>
                                <div className="lang_label">{element.language}</div>
                                <div className="rating">
                                    {
                                         [...Array(element.level).keys()].map(()=><FontAwesomeIcon icon={faStar}></FontAwesomeIcon>)
                                    }
                                </div>
                            </div>
                            </>
                        )
                    })
                }
            </div>
        
        </div>
    
 )
}


export default Languages