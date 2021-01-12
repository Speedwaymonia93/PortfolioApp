import React from 'react'
import './Styles.css'
import educationImg from '../images/education.svg';
import dataEducation from '../data/educationData.json';

function Education()
{
    return(
        <div>
			<h2 className="style_h2" id="education_title">Education</h2>
			<img className="images" src={educationImg} alt="educationHat"/>
			
			{
				dataEducation.map((element)=>{
					return(
						<div className="timeline" key={element.id}>
							<div className="cont_right">
								<ul className="time_stamp">
									<li className="time_stamp_item">
										<div className="time_stamp_info">
											<span>{element.time}</span>
										</div>
										<div className="time_stamp_marker"></div>
										<div className="time_stamp_content">
										<h3 className="time_stamp_title">{element.titleOfStudies}</h3>
										<p>{element.insitution}</p>
										</div>
									</li>
								</ul>
							</div>
					</div>
					)
				})
				
			}
        </div>
    )
}

export default Education
