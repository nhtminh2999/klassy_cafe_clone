import React from 'react';
import { Col, Row } from 'antd';
import ContactCard from './components/ContactCard';
import ContactForm from './components/ContactForm';

import { contactSectionModel } from './model/ContactSection.Model';
import background from '../../assets/images/reservation-bg.jpg';
import './scss/contact_section.scss';

function ContactSection() {
  return (
    <section id='contact-us' className='contact-section' style={{ backgroundImage: `url(${background})` }}>
      <div className="container">
        <Row gutter={[30, 60]}>
          <Col xl={12} lg={12} md={24} sm={24} xs={24} className='contact-section__left'>
            <div className="contact-section__left__content">
              <div className="section-heading">
                <h6>{contactSectionModel.heading}</h6>
                <h2>{contactSectionModel.title}</h2>
              </div>
              <p>{contactSectionModel.desc}</p>
              <Row gutter={[30, 80]} >
                <Col xl={12} lg={12} md={24} sm={24} xs={24}>
                  <ContactCard
                    title='Phone Numbers'
                    icon='fas fa-phone-alt'
                    value={contactSectionModel.phone}
                  >
                  </ContactCard>
                </Col>
                <Col xl={12} lg={12} md={24} sm={24} xs={24}>
                  <ContactCard
                    title='Emails'
                    icon='fas fa-envelope'
                    value={contactSectionModel.email}
                  >
                  </ContactCard>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xl={12} lg={12} md={24} sm={24} xs={24}>
            <ContactForm />
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default ContactSection;
