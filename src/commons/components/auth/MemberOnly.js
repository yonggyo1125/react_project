import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import UserInfoContext from '../../../member/modules/UserInfoContext';

const MemberOnly = ({ children }) => {
  const {
    states: { isLogin },
  } = useContext(UserInfoContext);

  return isLogin ? children : <Navigate to="/member/login" replace={true} />;
};

export default React.memo(MemberOnly);
