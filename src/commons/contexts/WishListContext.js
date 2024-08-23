import { createContext, useState } from 'react';

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

  return (
    <WishListContext.Provider value={value}>
      {children}
    </WishListContext.Provider>
  );
};

export const { Consumer: WishListConsumer } = WishListContext;

export default WishListContext;
