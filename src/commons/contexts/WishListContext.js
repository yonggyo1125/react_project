import { createContext, useState, useEffect, useContext } from 'react';
import { getWishList } from '../libs/wish/apiWish';
import UserInfoContext from '../../member/modules/UserInfoContext';

const WishListContext = createContext({
  states: {
    boardWish: [],
    restaurantWish: [],
    tourWish: [],
    activityWish: [],
    festivalWish: [],
  },
  actions: {
    setBoardWish: null,
    setRestaurantWish: null,
    setTourWish: null,
    setActivityWish: null,
    setFestivalWish: null,
  },
});

export const WishListProvider = ({ children }) => {
  const [boardWish, setBoardWish] = useState([]);
  const [restaurantWish, setRestaurantWish] = useState([]);
  const [tourWish, setTourWish] = useState([]);
  const [activityWish, setActivityWish] = useState([]);
  const [festivalWish, setFestivalWish] = useState([]);

  const value = {
    states: {
      boardWish,
      restaurantWish,
      tourWish,
      activityWish,
      festivalWish,
    },
    actions: {
      setBoardWish,
      setRestaurantWish,
      setTourWish,
      setActivityWish,
      setFestivalWish,
    },
  };

  const {
    states: { isLogin },
  } = useContext(UserInfoContext);

  useEffect(() => {
    if (!isLogin) {
      return;
    }

    (async () => {
      try {
        const boardWish = await getWishList('BOARD');
        const restaurantWish = await getWishList('RESTAURANT');
        const tourWish = await getWishList('TOUR');
        const activityWish = await getWishList('ACTIVITY');
        const festivalWish = await getWishList('FESTIVAL');

        setBoardWish(boardWish);
        setRestaurantWish(restaurantWish);
        setTourWish(tourWish);
        setActivityWish(activityWish);
        setFestivalWish(festivalWish);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [isLogin]);

  return (
    <WishListContext.Provider value={value}>
      {children}
    </WishListContext.Provider>
  );
};

export const { Consumer: WishListConsumer } = WishListContext;

export default WishListContext;
