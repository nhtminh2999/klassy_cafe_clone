import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { categories, products } from '../model/FeatureSection.Model';

import '../scss/feature_tabs.scss';

function FeatureTabs() {
  const [activeTab, setActiveTab] = useState(1);
  const [dataSource, setDataSource] = useState(() => products.filter(product => product.category === 1));

  const handleClick = (value) => {
    setActiveTab(value);
    setDataSource([...products.filter(product => product.category === value)]);
  };

  return (
    <div className="feature-section__tabs">
      <div className='feature-section__tabs__heading'>
        {categories && categories.map(category => (
          <div key={category.id} className={`feature-section__tabs__heading__item ${category.id === activeTab ? 'active' : ''}`}
            onClick={() => handleClick(category.id)}
          >
            <img src={category.image} alt={category.name} />
            {category.name}
          </div>
        ))}
      </div>
      <Row gutter={[{ xl: 60, lg: 30, md: 30, sm: 0, xs: 0 }, 30]} className="feature-section__tabs__content">
        {dataSource && dataSource.map(data => (
          <Col key={data.id} xl={12} lg={12} md={24} sm={24} xs={24}>
            <div className="feature-section__tabs__content__item">
              <img src={data.image} alt={data.name} />
              <div className='detail'>
                <h4>{data.name}</h4>
                <p>{data.desc}</p>
              </div>
              <div className='price'>
                ${data.price}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default FeatureTabs;
