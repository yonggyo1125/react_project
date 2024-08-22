import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { apiGet } from '../activity/apis/apiInfo';
import ReservationForm from '../components/ReservationForm';
import Loading from '../../commons/components/Loading';

const ReservationContainer = ({ setPageTitle }) => {
  const [data, setData] = useState(null);
  const { seq } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    (async () => {
      try {
        const res = await apiGet(seq);
        setPageTitle(`${res.townName} ${t('예약하기')}`);

        /* 예약 가능일 문자열 -> Date 객체  */
        const availableDates = Object.keys(res.availableDates).sort();
        res.minDate = new Date(availableDates[0]);
        res.maxDate = new Date(availableDates.pop());
        console.log('res', res);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [seq, t, setPageTitle]);

  const onDateChange = useCallback((date) => {
    console.log(date);
  }, []);

  if (!data) {
    return <Loading />;
  }

  return <ReservationForm data={data} onDateChange={onDateChange} />;
};

export default React.memo(ReservationContainer);
