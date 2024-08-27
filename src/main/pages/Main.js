import React from 'react';
import styled from 'styled-components';
import SlideBanner from '../../commons/components/SlideBanner';
import banner1 from '../../images/banner/banner1.png';
import banner2 from '../../images/banner/banner2.png';
import banner3 from '../../images/banner/banner3.png';

const Wrapper = styled.div`
  div {
    margin: 20px auto;
  }
`;

const options = {
  loop: true,
  speed: 1000,
  pagination: true,
  navigation: true,
};

const items = [
  { image: banner1, link: '/board/view/1', alt: '배너1' },
  { image: banner2, link: '/board/view/2', alt: '배너2' },
  { image: banner3, link: '/board/view/3', alt: '배너3' },
];

const StyleSlideBanner = styled(SlideBanner)`
  .swiper-pagination {
    bottom: 10px;
  }

  .swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    background: lightGreen;
    opacity: 1;
  }
`;

const Main = () => {
  return (
    <Wrapper>
      <StyleSlideBanner
        items={items}
        width={600}
        height={396}
        options={options}
      />
    </Wrapper>
  );
};

export default React.memo(Main);
