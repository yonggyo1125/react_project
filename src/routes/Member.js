import React from 'react';
import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const MainLayout = loadable(() => import('../layouts/MainLayout'));

const Join = loadable(() => import('../member/pages/Join'));
const Login = loadable(() => import('../member/pages/Login'));

const Member = () => {
  return (
    <Routes>
      <Route path="/member" element={<MainLayout />}>
        <Route path="join" element={<Join />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default React.memo(Member);
