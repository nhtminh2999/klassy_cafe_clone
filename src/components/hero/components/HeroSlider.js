import React from 'react';
import Slider from 'react-slick';

const NextArrow = (props) => {
  return (
    <div className='hero__slider__arrow hero__slider__arrow--next' onClick={props.onClick}>
      <i className="fas fa-chevron-right" />
    </div>
  );
};

const PrevArrow = (props) => {
  return (
    <div className='hero__slider__arrow hero__slider__arrow--prev' onClick={props.onClick}>
      <i className="fas fa-chevron-left" />
    </div>
  );
}

const settings = {
  dots: false,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};

const SliderItem = ({ src, index }) => {
  return (
    <div className="hero__slider__item">
      <img src={src} alt={`hero__slider__item__${index}`} />
    </div>
  );
};

function HeroSlider({ dataSource }) {
  return (
    <Slider {...settings} className='hero__slider'>
      {dataSource && dataSource.map((data, index) => {
        return (
          <SliderItem key={index} src={data} index={index} />
        );
      })}
    </Slider>
  );
}

export default HeroSlider;
