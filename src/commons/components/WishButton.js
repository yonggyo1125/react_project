import React, { useState, useEffect, useCallback } from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';

import { addWish, removeWish } from '../libs/wish/apiWish';

const WishButton = ({ IconOn, IconOff, seq, type }) => {
  const [toggle, setToggle] = useState(false);
  const On = IconOn ?? FaBookmark;
  const Off = IconOff ?? FaRegBookmark;

  const onClick = useCallback((status) => {
    const requestWish = status ? addWish : removeWish;

    (async () => {
      try {
        await requestWish(seq, type);
        setToggle(status);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [seq, type]);

  return toggle ? (
    <On onClick={() => onClick(false)} />
  ) : (
    <Off onClick={() => onClick(true)} />
  );
};

export default React.memo(WishButton);
