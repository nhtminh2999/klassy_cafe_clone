import React from 'react';
import { Col, Row } from 'antd';

import { aboutUsModel } from './model/AboutUs.Model';
import './scss/about_us.scss';
function AboutUs() {
  return (
    <section id='about-us' className='about'>
      <div className="container">
        <Row gutter={[30, 0]}>
          <Col lg={12} md={12} sm={24} xs={24}>
            <div className="about__left">
              <div className="about__left__heading section-heading">
                <h6>About Us</h6>
                <h2>We Leave A Delicious Memory For You</h2>
              </div>
              <p className='about__left__content' dangerouslySetInnerHTML={{ __html: aboutUsModel.content }} />
              <Row gutter={[30, 0]}>
                {aboutUsModel.images && aboutUsModel.images.map((src, index) => (
                  <Col key={index} lg={8} md={8} sm={8} xs={8}>
                    <img src={src} alt={`about-thumbnail-${index}`} />
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
          <Col lg={12} md={12} sm={24} xs={24}>
            <div className="about__right">
              <div className="about__right__thumb">
                <img src={aboutUsModel.videoThumbnail} alt='video-thumbnail' />
                <a href={aboutUsModel.videoUrl}>
                  <i className='fa fa-play' />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default AboutUs;
