import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../outlines/Header';
import Footer from '../outlines/Footer';

const MainBox = styled.main`
  min-height: 650px;
  position: relative;
`;

const MainLayout = () => {
  return (
    <>
      <Header />
      <MainBox>
        <Outlet />
      </MainBox>
      <Footer />
    </>
  );
};

export default React.memo(MainLayout);
