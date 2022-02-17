import React from 'react';
import './services.style.scss';

import { AiOutlineRise } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";

import { SERVICES_DATA } from './SERVICES_DATA';


function Services() {
  return (
      <section className="services">
            <div className="container">
              <div className="services__group">
                <div className="services__l">
                    <div className="services__infos">
                        <div className="services__info"> 
                            <h2 className="services__title">Services I offer</h2>
                            <p className="services__subTitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Labore porro architecto reiciendis, deleniti maxime minima ipsa magni voluptate.</p>
                        </div>
                        <div className="services__btn">
                        <AiOutlineRise className="services__btn-icon" />
                        </div>
                    </div>
                </div>{/* services__l */}

                <div className="services__r">
                {
                    SERVICES_DATA.map(({id, name, number}) => (
                        <div className="services__service" key={id}>
                            <div className="services__details">
                                <span className="services__service-num">{number}</span>
                                <p className="services__service-name">{name}</p>
                            </div>
                            <a href="/" className="services__service-link">
                                <FiArrowUpRight />
                            </a>
                        </div>
                    ))
                }
                </div>
              </div>
          </div>
      </section>
  );
}

export default Services;
