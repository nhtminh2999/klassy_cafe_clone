import React, { useRef } from 'react'
import Slider from 'react-slick';

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
};

const CustomArrow = ({ onPrevClick, onNextClick }) => {
  return (
    <div className="menu-section__slider__arrows">
      <div className='menu-section__slider__arrow menu-section__slider__arrow--prev' onClick={onPrevClick}>
        <i className="fas fa-chevron-left" />
      </div>
      <div className='menu-section__slider__arrow menu-section__slider__arrow--next' onClick={onNextClick}>
        <i className="fas fa-chevron-right" />
      </div>
    </div>
  )
}

const SliderItem = ({ data }) => {
  return (
    <div className="menu-section__slider__item" style={{ backgroundImage: `url(${data.image || ''})` }}>
      <div className="price">${data.price || 0}</div>
      <div className="info">
        <h1 className="title">{data.name || ''}</h1>
        <p className="desc">
          {data.desc || ''}
        </p>
      </div>
    </div>
  );
};

function MenuSlider({ dataSource }) {
  const sliderRef = useRef(null);

  const handlePrevClick = () => {
    if (!sliderRef.current) return;

    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    if (!sliderRef.current) return;

    sliderRef.current.slickNext();
  };
  return (
    <>
      <Slider ref={sliderRef} {...settings} className='menu-section__slider'>
        {dataSource && dataSource.map(data => (
          <SliderItem key={data.id} data={data} />
        ))}
      </Slider>
      <CustomArrow onPrevClick={handlePrevClick} onNextClick={handleNextClick} />
    </>
  )
}

export default MenuSlider;
