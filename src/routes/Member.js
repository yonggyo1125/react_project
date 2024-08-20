import React from 'react';
import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const MainLayout = loadable(() => import('../layouts/MainLayout'));

const Join = loadable(() => import('../member/pages/Join'));
const Login = loadable(() => import('../member/pages/Login'));
const FindPw = loadable(() => import('../member/pages/FindPw'));
const FindId = loadable(() => import('../member/pages/FindId'));

const Member = () => {
  return (
    <Routes>
      <Route path="/member" element={<MainLayout />}>
        <Route path="join" element={<Join />} />
        <Route path="login" element={<Login />} />
        <Route path="find_pw" element={<FindPw />} />
        <Route path="find_id" element={<FindId />} />
      </Route>
    </Routes>
  );
};

export default React.memo(Member);
