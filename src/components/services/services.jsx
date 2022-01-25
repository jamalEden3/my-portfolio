import React from 'react';
import './services.style.scss';

import { AiOutlineRise } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";

import { SERVICES_DATA } from './SERVICES_DATA';


function Services() {
  return (
      <section className="services">
        <div className="services__l">
            <div className="services__infos">
                <div className="services__info">
                    <h2 className="services__title">Services I <br />offer
                        <span className="services__name">Services!</span>
                    </h2>
                    <p className="services__subTitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. \
                    Labore porro architecto reiciendis, deleniti maxime minima ipsa magni voluptate.</p>
                </div>
                <button className="services__btn">
                    <AiOutlineRise className="services__btn-icon" />
                </button>
            </div>
        </div>
        <div className="services__r">
            {
                SERVICES_DATA.map(({id, name, number}) => (
                    <div className="services__service" key={id}>
                        <span className="services__service-num">{number}</span>
                        <p className="services__service-name">{name}</p>
                        <a href="#" className="services__service-link">
                            <FiArrowUpRight />
                        </a>
                    </div>
                ))
            }
        </div>
      </section>
  );
}

export default Services;