import React from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import { useTranslation } from 'react-i18next';
const FormBox = styled.form``;

const ReservationForm = ({ data, onDateChange }) => {
  const { t } = useTranslation();
  const { minDate, maxDate } = data;
  return (
    <FormBox>
      <div className="select-date">
        <h2>{t('예약일_선택')}</h2>
        <Calendar minDate={minDate} maxDate={maxDate} onChange={onDateChange} />
      </div>
    </FormBox>
  );
};

export default React.memo(ReservationForm);
