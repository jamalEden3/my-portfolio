import React from 'react';
import './about.style.scss';

import { AiOutlineAliwangwang } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";



import myImg from '../../assets/me.png' 

function About() {
    return (
        <section className="about">
            <div className="about__infos">
                <div className="about__info">
                    <span className="about__hello">Hello!</span>
                    <h1 className="about__title">I have passionate <br />about Front-End development</h1>
                    <h6 className="about__bio">Hi! I'm FrontEnd developer - Creating bold & brave interfaces design for 
                    companies all across the world.</h6>
                    <div className="about__btns">
                        <button className="btn about__btn-talk">Let's Talk <AiOutlineAliwangwang className="btn-icon about__talk-icon"/></button>
                        <button className="btn about__btn-pfl">Portflio<AiOutlineArrowRight className="btn-icon about__pfl-icon"/></button>
                    </div>
                </div>
                <div className="about__image-box">
                    <img src={myImg} alt="Jamal Icon" className="about__image" />
                </div>
            </div>
            <div className="about__social">

            </div>
        </section>
    )
}

export default About
