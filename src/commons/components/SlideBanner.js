import React from 'react';
import styled from 'styled-components';
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
    items && (
      <Wrapper width={width}>
        <Swiper
          spaceBetween={spaceBetween ?? 0}
          slidesPerView={slidesPerView ?? 1}
          loop={Boolean(loop)}
          speed={speed ?? 500}
          onSlideChange={onChange ? onChange : () => {}}
          onSwiper={onSwiper ? onSwiper : () => {}}
        >
          <SwiperSlide className="banner">
            <img src={banner1} alt="배너1" />
          </SwiperSlide>
          <SwiperSlide className="banner">
            <img src={banner2} alt="배너2" />
          </SwiperSlide>
          <SwiperSlide className="banner">
            <img src={banner3} alt="배너3" />
          </SwiperSlide>
          <SwiperSlide className="banner">
            <img src={banner1} alt="배너1" />
          </SwiperSlide>
          <SwiperSlide className="banner">
            <img src={banner2} alt="배너2" />
          </SwiperSlide>
          <SwiperSlide className="banner">
            <img src={banner3} alt="배너3" />
          </SwiperSlide>
        </Swiper>
      </Wrapper>
    )
  );
};

export default React.memo(SlideBanner);
