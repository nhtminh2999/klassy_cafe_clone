import React from 'react';
import FeatureTabs from './components/FeatureTabs';

import './scss/feature_section.scss';

function FeatureSection() {
  return (
    <section id='feature' className='feature-section'>
      <div className="container">
        <div className="feature-section__heading section-heading">
          <h6>KLASSY WEEK</h6>
          <h2>This Week’s Special Meal Offers</h2>
        </div>
        <FeatureTabs />
      </div>
    </section>
  );
}

export default FeatureSection;
