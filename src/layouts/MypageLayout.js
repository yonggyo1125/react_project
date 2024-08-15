import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../outlines/Header';
import Footer from '../outlines/Footer';
import Side from '../mypage/components/Side'; // 우측 메뉴

const MainBox = styled.main`
  min-height: 650px;
  position: relative;
  display: flex;
  aside {
    width: 210px;
  }

  section.main-content {
    flex-grow: 1;
    padding: 20px;
  }
`;

const MypageLayout = () => {
  return (
    <>
      <Header />
      <MainBox className="layout-width">
        <Side />
        <section className="main-content">
          <Outlet />
        </section>
      </MainBox>
      <Footer />
    </>
  );
};

export default React.memo(MypageLayout);
