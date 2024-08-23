import React, { useState, useEffect, useCallback, useContext } from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { addWish, removeWish } from '../libs/wish/apiWish';
import UserInfoContext from '../../member/modules/UserInfoContext';

const WishButton = ({ IconOn, IconOff, seq, type }) => {
  const [toggle, setToggle] = useState(false);
  const On = IconOn ?? FaBookmark;
  const Off = IconOff ?? FaRegBookmark;

  const navigate = useNavigate();
  const location = useLocation();

  const {
    states: { isLogin },
  } = useContext(UserInfoContext);

  const onClick = useCallback(
    (status) => {
      if (!isLogin) {
        navigate(`/member/login?redirectUrl=${location.pathname}`);
        return;
      }

      const requestWish = status ? addWish : removeWish;

      (async () => {
        try {
          await requestWish(seq, type);
          setToggle(status);
        } catch (err) {
          console.error(err);
        }
      })();
    },
    [seq, type, navigate, location.pathname, isLogin],
  );

  return toggle ? (
    <On onClick={() => onClick(false)} />
  ) : (
    <Off onClick={() => onClick(true)} />
  );
};

export default React.memo(WishButton);
