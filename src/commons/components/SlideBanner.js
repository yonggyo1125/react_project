import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Wrapper = styled.div`
  position: relative;
  width: ${({ width }) => (width ? width + 'px' : '100%')};
  ${({ height }) =>
    height &&
    css`
      height: ${height}px;
      overflow-y: hidden;

      .banner {
        height: ${height}px;
        overflow-y: hidden;
      }
    `}
  .banner {
    img {
      width: 100%;
      display: block;
    }
  }
`;

const SlideBanner = ({
  items,
  width,
  height,
  options,
  onChange,
  onSwiper,
  className,
}) => {
  options = options ?? {};
  const { spaceBetween, slidesPerView, loop, speed, pagination, navigation } =
    options;

  const swiperProps = {
    modules: [Navigation, Pagination],
    spaceBetween: spaceBetween ?? 0,
    slidesPerView: slidesPerView ?? 1,
    loop: Boolean(loop),
    speed: speed ?? 500,
  };

  if (onChange) swiperProps.onSlideChange = onChange;
  if (onSwiper) swiperProps.onSwiper = onSwiper;
  if (navigation) swiperProps.navigation = true;
  if (pagination) swiperProps.pagination = { clickable: true };

  return (
    items &&
    items.length > 0 && (
      <Wrapper width={width} height={height} className={className}>
        <Swiper {...swiperProps}>
          {items.map(({ image, link, alt }) => (
            <SwiperSlide key={image} className="banner">
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
