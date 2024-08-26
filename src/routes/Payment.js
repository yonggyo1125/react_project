import React from 'react';
import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const CloseUrl = loadable(() => import('../payment/pages/CloseUrl'));

const Payment = () => {
  return (
    <Routes>
      <Route path="/payment">
        <Route path="close" element={<CloseUrl />} />
      </Route>
    </Routes>
  );
};

export default React.memo(Payment);
