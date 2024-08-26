import React, { useEffect, useState, useCallback, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ReservationForm from '../components/ReservationForm';
import { apiGet } from '../../restaurant/apis/apiInfo';
import Loading from '../../commons/components/Loading';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import apiApply from '../apis/apiApply';
import UserInfoContext from '../../member/modules/UserInfoContext';
import ReservationPayContainer from './ReservationPayContainer';

const ReservationContainer = ({ setPageTitle }) => {
  const {
    states: { userInfo },
  } = useContext(UserInfoContext);
  const { rstrId } = useParams();
  const [data, setData] = useState(null);
  const [form, setForm] = useState({
    rstrId,
    name: userInfo?.userName,
    email: userInfo?.email,
    mobile: userInfo?.mobile,
    persons: 1,
  });
  const [times, setTimes] = useState([]);
  const [errors, setErrors] = useState({});
  const [payConfig, setPayConfig] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    (async () => {
      try {
        const res = await apiGet(rstrId);

        res.availableDates = res.availableDates.map((d) => new Date(d));
        setData(res);
        setPageTitle(`${res.rstrNm} ${t('예약하기')}`);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [rstrId, setPageTitle, t]);

  const onCalendarClick = useCallback(
    (selected) => {
      const yoil = selected.getDay(); // 0(일) ~ 6(토)
      const { availableTimes } = data;

      for (const [k, times] of Object.entries(availableTimes)) {
        if (
          k === '매일' ||
          (k === '평일' && yoil > 0 && yoil < 6) ||
          (k === '토요일' && yoil === 6) ||
          (k === '일요일' && yoil === 7) ||
          (k === '주말' && (yoil === 6 || yoil === 0))
        ) {
          const dateStr = format(selected, 'yyyy-MM-dd');
          setForm((form) => ({ ...form, rDate: dateStr }));
          setTimes(times);
          break;
        }
      }
    },
    [data],
  );

  const onTimeClick = useCallback((rTime) => {
    setForm((form) => ({ ...form, rTime }));
  }, []);

  const onChange = useCallback((e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const _errors = {};
      let hasErrors = false;
      // 필수 항목 검증 S
      const requiredFields = {
        rDate: t('예약날짜를_선택하세요.'),
        rTime: t('예약시간을_선택하세요.'),
        name: t('예약자명을_입력하세요.'),
        email: t('이메일을_입력하세요.'),
        mobile: t('휴대전화번호를_입력하세요.'),
      };
      for (const [field, message] of Object.entries(requiredFields)) {
        if (!form[field]?.trim()) {
          _errors[field] = _errors[field] ?? [];
          _errors[field].push(message);
          hasErrors = true;
        }
      }
      // 필수 항목 검증 E
      setErrors(_errors);
      if (hasErrors) {
        return;
      }

      (async () => {
        try {
          const res = await apiApply(form);
          setPayConfig(res);
          console.log(res);
        } catch (err) {
          console.error(err);
          setErrors(err.message);
        }
      })();
    },
    [t, form],
  );

  if (!data) {
    return <Loading />;
  }

  if (payConfig) {
    // 결제 설정이 있느 경우 결제 진행
    return (
      <ReservationPayContainer
        payConfig={payConfig}
        form={form}
        data={data}
        setPageTitle={setPageTitle}
      />
    );
  }

  return (
    <ReservationForm
      data={data}
      form={form}
      times={times}
      errors={errors}
      onCalendarClick={onCalendarClick}
      onTimeClick={onTimeClick}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default React.memo(ReservationContainer);
