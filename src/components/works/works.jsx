import React, { useState } from 'react';
import './works.style.scss';

import work from '../../assets/mobile.jpg';
import person from '../../assets/40.jpg';
import leftArr from '../../assets/left.svg';
import rightArr from '../../assets/right.svg';

import WORKS__DATA from './WORKS_DATA';

function Works() {
    const [worksData] = useState(WORKS__DATA);
    const [currentSlider, setCurrentSlider] = useState(0);

     const handleSlider = (way) => {
         way === 'left' 
            ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2 )
            : setCurrentSlider(currentSlider < worksData.length -1 ? currentSlider + 1 : 0);
        } 
  return (
      <section className="works">
          <div className="works__slider"
            
          >
              {
                  worksData.map((data) => (
                    <div 
                        className="works__container" 
                        key={data.id}
                        style={{transform: `translateX(-${currentSlider * 100}vw)`}}
                        >
                        <div className="works__items">
                            <div className="works__left">
                                <div className="works__leftContainer">
                                    <div className="works__imgBox">
                                        <img src={work} alt="Project" className="works__image" />
                                    </div>
                                    <h2 className="works__name">Name</h2>
                                    <p className="works__subTitle">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                    <span>Project</span>
                                </div>
                            </div>
                            <div className="works__right">
                               <img src={data.image} alt="" className="person" />
                            </div>
                        </div>
                    </div>
                  ))
              }
              
          </div>
          <div className="works__arrows">
            <img src={leftArr} alt="Left Arrow" className="works__leftArrow" onClick={() => handleSlider('left')}/>
            <img src={rightArr} alt="Right Arrow" className="works__leftArrow" onClick={() => handleSlider()}/>
          </div>
      </section>
  )
}

export default Works;
