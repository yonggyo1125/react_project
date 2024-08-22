import React, { useEffect } from 'react';
import { apiGet } from '../../recommend/activity/apis/apiInfo';
import ReservationForm from '../components/ReservationForm';

const ReservationContainer = () => {
    
  return <ReservationForm />;
};

export default React.memo(ReservationContainer);
