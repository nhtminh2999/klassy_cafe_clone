import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { headerModel } from './model/Header.Model';

import './scss/header.scss';

const SubMenu = ({ dataSource, onClick }) => {
  return (
    <ul>
      {dataSource && dataSource.map(data => {
        return (
          <li key={data.id}>
            <a onClick={onClick} href={data.path}>{data.title}</a>
          </li>
        );
      })}
    </ul>
  );
};

const HeaderNavigation = ({ dataSource, activeNav = 0 }) => {
  return (
    <div className="header__nav">
      <ul>
        {dataSource && dataSource.map((data, index) => {
          if (data.sub) {
            return (
              <li key={data.id} className='submenu'>
                <a href={data.path} className={activeNav === index ? 'active' : ''}>
                  {data.title}
                  <i className='fas fa-chevron-down' />
                </a>
                <SubMenu dataSource={data.sub} />
              </li>
            );
          }
          return (
            <li key={data.id}>
              <a href={data.path} className={activeNav === index ? 'active' : ''} >{data.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Collapse = ({ data, onClick, isActive }) => {
  const [show, setShow] = useState(false);

  const handleShowMobileMenu = () => {
    setShow(prevState => !prevState);
  };
  return (
    <li className='submenu' onClick={handleShowMobileMenu}>
      <a href={data.path} className={isActive ? 'active' : ''}>
        {data.title}
        <i className='fas fa-chevron-down' />
      </a>
      {show && <SubMenu dataSource={data.sub} onClick={onClick} />}
    </li>
  )
}

const HeaderMobileMenu = ({ dataSource, onClick, activeNav = 0 }) => {
  return (
    <ul className={`header__mobile__menu`}>
      {dataSource && dataSource.map((data, index) => {
        if (data.sub) {
          return (
            <Collapse key={data.id} data={data} onClick={onclick} isActive={activeNav === index || false} />
          );
        }
        return (
          <li key={data.id}>
            <a href={data.path} onClick={onClick} className={activeNav === index ? 'active' : ''} >{data.title}</a>
          </li>
        );
      })}
    </ul>
  );
};

function Header() {
  const { hash } = useLocation();
  const [activeNav, setActiveNav] = useState(0);
  const [show, setShow] = useState(false);

  const handleShowMobileMenu = () => {
    setShow(prevState => !prevState);
  };

  useEffect(() => {
    const index = headerModel.navigation.findIndex(nav => nav.path === hash);

    setActiveNav(index);
  }, [hash]);

  return (
    <header className='header'>
      <div className="header__wrap container">
        <Link to={headerModel.homePagePath} className="header__logo">
          <img src={headerModel.logo} alt="logo" />
        </Link>
        <HeaderNavigation dataSource={headerModel.navigation} activeNav={activeNav} />
        <div onClick={handleShowMobileMenu} className={`header__mobile__icon ${show ? 'active' : ''}`}>
          <span />
          <span />
          <span />
        </div>
        {show && <HeaderMobileMenu dataSource={headerModel.navigation} onClick={handleShowMobileMenu} activeNav={activeNav} />}
      </div>
    </header>
  );
}

export default Header;
