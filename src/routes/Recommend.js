import React from 'react';
import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const MainLayout = loadable(() => import('../layouts/MainLayout'));

/* 여행관련 페이지 S */
const TourPage = loadable(() => import('../recommend/tour/pages/Tour'));
const TourViewPage = loadable(() => import('../recommend/tour/pages/TourView'));

/* 여행관련 페이지 E */

const Recommend = () => {
  return (
    <Routes>
      <Route path="/recommend" element={<MainLayout />}>
        <Route path="tour" element={<TourPage />} />
        <Route path="tour/:seq" element={<TourViewPage />} />
      </Route>
    </Routes>
  );
};

export default React.memo(Recommend);
