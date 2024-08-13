import React from 'react';
import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const MainLayout = loadable(() => import('../layouts/MainLayout'));

/* 식당 페이지 S */
const RestaurantList = loadable(() =>
  import('../restaurant/pages/RestaurantList'),
);
const RestaurantView = loadable(() =>
  import('../restaurant/pages/RestaurantView'),
);
/* 식당 페이지 E */

const Restaurant = () => {
  return (
    <Routes>
      <Route path="/restaurant" element={<MainLayout />}>
        <Route index element={<RestaurantList />} />
        <Route path=":id" element={<RestaurantView />} />
      </Route>
    </Routes>
  );
};

export default React.memo(Restaurant);
