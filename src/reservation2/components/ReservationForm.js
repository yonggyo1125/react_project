import React from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { IoMdRadioButtonOn, IoMdRadioButtonOff } from 'react-icons/io';
import { BigButton } from '../../commons/components/Buttons';

const FormBox = styled.form`
  display: flex;
`;

const TimeTableAndPerson = styled.div``;

const ReservationForm = ({
  data,
  form,
  times,
  onCalendarClick,
  onTimeClick,
  onChange,
  onSubmit,
}) => {
  const { availableDates } = data;
  const startDate = availableDates[0];
  const endDate = availableDates[availableDates.length - 1];
  const { t } = useTranslation();

  return (
    <FormBox onSubmit={onSubmit} autoComplete="off">
      <div>
        <h2>{t('예약날짜_선택')}</h2>
        <Calendar
          onChange={onCalendarClick}
          minDate={startDate}
          maxDate={endDate}
          tileDisabled={({ date }) => {
            return (
              availableDates.findIndex(
                (d) =>
                  date.getFullYear() === d.getFullYear() &&
                  d.getMonth() === date.getMonth() &&
                  date.getDate() === d.getDate(),
              ) === -1
            );
          }}
        />
      </div>
      <TimeTableAndPerson>
        {times?.length > 0 && (
          <>
            <h2>{t('예약시간_선택')}</h2>
            <ul className="time-table">
              {times.map((time) => (
                <li key={time} onClick={() => onTimeClick(time)}>
                  {form.rTime === time ? (
                    <IoMdRadioButtonOn />
                  ) : (
                    <IoMdRadioButtonOff />
                  )}
                  {time}
                </li>
              ))}
            </ul>
            <dl className="persons">
              <dt>{t('인원수')}</dt>
              <dd>
                <select name="persons" onChange={onChange}>
                  {[...new Array(10).keys()].map((i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                      {t('명')}
                    </option>
                  ))}
                </select>
              </dd>
            </dl>
            <BigButton type="submit" color="primary">
              {t('예약하기')}
            </BigButton>
          </>
        )}
      </TimeTableAndPerson>
    </FormBox>
  );
};

export default React.memo(ReservationForm);
