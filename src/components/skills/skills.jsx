import React from 'react';
import './skills.style.scss';

import { SKILLS_DATA, EXPERIENCE_DATA } from './SKILLS_DATA';

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
                <div className="skills__box">
                    <h4 className="skills__group-title">Skills</h4>
                    <div className="skills__group">
                        {
                           EXPERIENCE_DATA.map(({id, name, icon}) => {
                               return(
                                    <div className="skills__skill" key={id}>
                                        <img className="skills__image" src={icon} alt="Skill"/>
                                        <h4 className="skills__nm">{name}</h4>
                                   </div>
                               )
                           }) 
                        }
                    </div>
                </div>
            </div>
        </div>
        <div className="skills__r">
            <h2 className="skills__r__title">Experience</h2>
            {
                SKILLS_DATA.map(({id, name, from, to, company}) => (
                    <div className="skills__details" key={id}>
                        <div className="skills__detail">
                            <div className="skills__date">
                                <span className="skills__date-from">{from} - </span>
                                <span className="skills__date-to">{to}</span>
                            </div>
                            <div className="skills__desc">
                                <h3 className="skills__desc__name">{name}</h3>
                                <p className="skills__desc__company">{company}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
      </section>
  );
}

export default Skills;