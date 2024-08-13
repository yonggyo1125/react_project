import React from 'react';
import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const MainLayout = loadable(() => import('../layouts/MainLayout'));
/* 마이페이지 S */
const MypageMain = loadable(() => import('../mypage/pages/MypageMain'));
/* 마이페이지 E */

const Mypage = () => {
  return (
    <Routes>
      <Route path="/mypage" element={<MainLayout />}>
        <Route index element={<MypageMain />} />
      </Route>
    </Routes>
  );
};

export default React.memo(Mypage);
