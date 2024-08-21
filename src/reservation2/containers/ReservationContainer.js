import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import ReservationForm from '../components/ReservationForm';
import { apiGet } from '../../restaurant/apis/apiInfo';
import Loading from '../../commons/components/Loading';
import { useTranslation } from 'react-i18next';

const ReservationContainer = ({ setPageTitle }) => {
  const [data, setData] = useState(null);
  const { rstrId } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    (async () => {
      try {
        const res = await apiGet(rstrId);

        res.availableDates = res.availableDates.map((d) => new Date(d));
        console.log('res', res);
        setData(res);
        setPageTitle(`${res.rstrNm} ${t('예약하기')}`);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [rstrId, setPageTitle, t]);

  const onCalendarClick = useCallback((selected) => {
    console.log(selected);
  }, []);

  if (!data) {
    return <Loading />;
  }

  return <ReservationForm data={data} onCalendarClick={onCalendarClick} />;
};

export default React.memo(ReservationContainer);
