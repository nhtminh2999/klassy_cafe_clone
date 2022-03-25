import React from 'react';
import { Row, Col } from 'antd';
import HeroSlider from './components/HeroSlider.js';
import { heroModel } from './model/Hero.Model.js';
import introBg from '../../assets/images/hero_intro_bg.jpg';
import './scss/hero.scss';

function Hero() {
  return (
    <section id='home' className='hero'>
      <Row>
        <Col lg={8} md={8} sm={24} xs={24}>
          <div className='hero__intro' style={{ backgroundImage: `url(${introBg})` }}>
            <div className="hero__intro__content" >
              <h4>KlassyCafe</h4>
              <h6>The best experience</h6>
              <div className="">
                <a className='btn' href="#contact">Make a conversation</a>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={16} md={16} sm={24} xs={24}>
          <div className='hero__slider'>
            <HeroSlider dataSource={heroModel.images} />
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default Hero;
