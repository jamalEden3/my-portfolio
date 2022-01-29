import React from 'react';
import './skills.style.scss';

import { SKILLS_DATA } from './SKILLS_DATA';

function Skills() {
  return (
      <section className="skills">
        <div className="skills__l">
            <div className="skills__infos">
                <div className="skills__info">
                    <span className="skills__label">experience!</span>
                    <h2 className="skills__title">Skills & <br />Experience</h2>
                    <p className="skills__subTitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. \
                    Labore porro architecto reiciendis, deleniti maxime minima ipsa magni voluptate.</p>
                </div>
                <div className="skills__skills">
                    <h4 className="skills__skills-title">Skills</h4>
                    {
                       SKILLS_DATA.map(({id, name, icon}) => {
                           return(
                               <div className="skills__group">
                                   <div className="skills__skills">
                                       <img className="skills__image" src={icon} />
                                       <h4 className="skills__">{name}</h4>
                                   </div>
                               </div>
                           )
                       }) 
                    }
                </div>
            </div>
        </div>
        <div className="skills__r">
            {
                SKILLS_DATA.map(({id, name, from, to, company}) => (
                    <div className="experiences__service" key={id}>
                        <div className="experiences__details">
                            <span className="experiences__service-num">{from}</span>
                            <p className="experiences__service-name">{to}</p>
                        </div>
                        <a href="/" className="experiences__service-link">
                            
                        </a>
                    </div>
                ))
            }
        </div>
      </section>
  );
}

export default Skills;
