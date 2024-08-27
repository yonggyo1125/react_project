import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import banner1 from '../../images/banner/banner1.png';
import banner2 from '../../images/banner/banner2.png';
import banner3 from '../../images/banner/banner3.png';

const Wrapper = styled.div`
  width: ${({ width }) => (width ? width + 'px' : '100%')};
  .banner {
    img {
      width: 100%;
      display: block;
    }
  }
`;

const SlideBanner = ({ items, width, options, onChange, onSwiper }) => {
  options = options ?? {};
  const { spaceBetween, slidesPerView, loop, speed } = options;
  return (
    items &&
    items.length > 0 && (
      <Wrapper width={width}>
        <Swiper
          spaceBetween={spaceBetween ?? 0}
          slidesPerView={slidesPerView ?? 1}
          loop={Boolean(loop)}
          speed={speed ?? 500}
          onSlideChange={onChange ? onChange : () => {}}
          onSwiper={onSwiper ? onSwiper : () => {}}
        >
          {items.map(({ image, link, alt }) => (
            <SwiperSlide className="banner">
              {link?.trim() ? (
                <Link to={link}>
                  <img src={image} alt={alt} />
                </Link>
              ) : (
                <img src={image} alt={alt} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    )
  );
};

export default React.memo(SlideBanner);
