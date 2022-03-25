import React from 'react';
import { Row, Col } from 'antd';

import './scss/chef_section.scss';
import ChefCard from './components/ChefCard';
import { chefSectionModel } from './model/ChefSection.Model';

function ChefSection() {
  return (
    <section id='chefs' className='chef-section'>
      <div className="container">
        <div className="chef-section__heading section-heading">
          <h6>Our chefs</h6>
          <h2>We offer the best ingredients for you</h2>
        </div>
        <Row gutter={[30, 30]}>
          {chefSectionModel && chefSectionModel.map(data => (
            <Col key={data.id} xl={8} lg={8} md={24} sm={24} xs={24}>
              <ChefCard data={data} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}

export default ChefSection;
