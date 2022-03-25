import { Col, Row } from 'antd';
import React from 'react';

import logo from '../../assets/images/white-logo.png';
import './scss/footer.scss';

function Footer() {
  return (
    <footer className='footer'>
      <div className="container">
        <Row gutter={[30, 30]}>
          <Col xl={8} lg={8} md={24} sm={24} xs={24}>
            <ul className='social-icon'>
              <li>
                <a href="/">
                  <i className='fab fa-facebook-f'></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
            </ul>
          </Col>
          <Col xl={8} lg={8} md={24} sm={24} xs={24}>
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </Col>
          <Col xl={8} lg={8} md={24} sm={24} xs={24}>
            <p>©2019 by MPS.Co,.Ltd All Rights Reserved</p>
          </Col>
        </Row>
      </div>
    </footer>
  );
}

export default Footer;
