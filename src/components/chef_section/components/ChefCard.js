import React from 'react';

import '../scss/chef_card.scss';

function ChefCard({ data }) {
  return (
    <div className='chef-card'>
      <div className="chef-card__image">
        <div className="overlay" />
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
        <img src={data.image} alt='chef_01' />
      </div>
      <div className="chef-card__content">
        <h4>{data.name || ''}</h4>
        <span>{data.title || ''}</span>
      </div>
    </div>
  );
}

export default ChefCard;
