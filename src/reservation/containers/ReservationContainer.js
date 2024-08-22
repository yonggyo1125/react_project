import React, { useEffect, useState, useCallback, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import { produce } from 'immer';
import { apiGet } from '../activity/apis/apiInfo';
import ReservationForm from '../components/ReservationForm';
import Loading from '../../commons/components/Loading';
import UserInfoContext from '../../member/modules/UserInfoContext';

const ReservationContainer = ({ setPageTitle }) => {
  const { seq } = useParams();
  const {
    states: {
      userInfo: { userName, email, mobile },
    },
  } = useContext(UserInfoContext);

  const [data, setData] = useState(null);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    activitySeq: seq,
    name: userName,
    email,
    mobile,
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

  const onChange = useCallback((e) => {
    setForm(
      produce((draft) => {
        draft[e.target.name] = e.target.value.trim();
      }),
    );
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      let _errors = {};
      let hasErrors = false;

      setErrors({});

      /* 필수 항목 검증 S */
      const requiredFields = {
        rDate: t('예약일을_선택하세요.'),
        ampm: t('시간대를_선택하세요.'),
        name: t('예약자명을_입력하세요.'),
        email: t('예약자_이메일을_입력하세요.'),
        mobile: t('예약자_휴대전화번호를_입력하세요.'),
      };

      for (const [field, message] of Object.entries(requiredFields)) {
        if (!form[field] || !form[field].trim()) {
          _errors[field] = _errors[field] ?? [];
          _errors[field].push(message);
          hasErrors = true;
        }
      }
      /* 필수 항목 검증 E */

      if (hasErrors) {
        setErrors(_errors);
        return;
      }
    },
    [t, form],
  );

  if (!data) {
    return <Loading />;
  }

  return (
    <ReservationForm
      data={data}
      form={form}
      errors={errors}
      onDateChange={onDateChange}
      onTimeChange={onTimeChange}
      onSubmit={onSubmit}
      onChange={onChange}
    />
  );
};

export default React.memo(ReservationContainer);
