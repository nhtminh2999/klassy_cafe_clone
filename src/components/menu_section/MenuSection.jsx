import React from 'react';
import { Col, Row } from 'antd';
import MenuSlider from './components/MenuSlider';

import { menuSectionModel } from './model/MenuSection.Model';
import './scss/menu_section.scss';
function MenuSection() {
  return (
    <section id='menu' className='menu-section'>
      <div className="container">
        <Row gutter={[30, 0]}>
          <Col lg={8}>
            <div className="menu-section__heading section-heading">
              <h6>Our menu</h6>
              <h2>Our selection of cakes with quality taste</h2>
            </div>
          </Col>
        </Row>
      </div>
      <MenuSlider dataSource={menuSectionModel} />
    </section>
  );
}

export default MenuSection;
