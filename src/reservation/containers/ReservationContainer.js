import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import { apiGet } from '../activity/apis/apiInfo';
import ReservationForm from '../components/ReservationForm';
import Loading from '../../commons/components/Loading';

const ReservationContainer = ({ setPageTitle }) => {
  const { seq } = useParams();
  const [data, setData] = useState(null);
  const [form, setForm] = useState({
    activitySeq: seq,
  });
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

        setData(res);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [seq, t, setPageTitle]);

  const onDateChange = useCallback(
    (date) => {
      const rDate = format(date, 'yyyy-MM-dd');
      const times = data.availableDates[rDate];
      setData((data) => ({ ...data, times }));
      setForm((form) => ({ ...form, rDate }));
    },
    [data, setForm],
  );

  const onTimeChange = useCallback((ampm) => {
    setForm((form) => ({ ...form, ampm }));
  }, []);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  if (!data) {
    return <Loading />;
  }

  return (
    <ReservationForm
      data={data}
      form={form}
      onDateChange={onDateChange}
      onTimeChange={onTimeChange}
      onSubmit={onSubmit}
    />
  );
};

export default React.memo(ReservationContainer);
