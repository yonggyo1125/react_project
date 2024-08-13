import React from 'react';
import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const MainLayout = loadable(() => import('../layouts/MainLayout'));

const Restaurant = () => {
  return (
    <Routes>
      <Route path="/restaurant" element={<MainLayout />}>
        <Route index element={<h1>테스트</h1>} />
      </Route>
    </Routes>
  );
};

export default React.memo(Restaurant);
