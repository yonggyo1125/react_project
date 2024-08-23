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

export default WishListContext;
