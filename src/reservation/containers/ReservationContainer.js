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
        setData(res);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [seq, t, setPageTitle]);

  if (!data) {
    return <Loading />;
  }

  return <ReservationForm />;
};

export default React.memo(ReservationContainer);
