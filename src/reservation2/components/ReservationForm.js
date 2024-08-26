import React from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { IoMdRadioButtonOn, IoMdRadioButtonOff } from 'react-icons/io';
import { BigButton } from '../../commons/components/Buttons';
import InputBox from '../../commons/components/InputBox';
import MessageBox from '../../commons/components/MessageBox';

const FormBox = styled.form`
  display: flex;
`;

const TimeTableAndPerson = styled.div`
  margin-left: 25px;
  flex-grow: 1;
`;

const ReservationForm = ({
  data,
  form,
  times,
  onCalendarClick,
  onTimeClick,
  onChange,
  onSubmit,
  errors,
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
        <h2>{t('예약자_기본정보')}</h2>
        <dl>
          <dt>{t('예약자')}</dt>
          <dd>
            <InputBox
              type="text"
              name="name"
              value={form?.name}
              onChange={onChange}
            />
            {errors?.name && (
              <MessageBox color="danger" messages={errors.name} />
            )}
          </dd>
        </dl>
        <dl>
          <dt>{t('이메일')}</dt>
          <dd>
            <InputBox
              type="text"
              name="email"
              value={form?.email}
              onChange={onChange}
            />
            {errors?.email && (
              <MessageBox color="danger" messages={errors.email} />
            )}
          </dd>
        </dl>
        <dl>
          <dt>{t('휴대전화번호')}</dt>
          <dd>
            <InputBox
              type="text"
              name="mobile"
              value={form?.mobile}
              onChange={onChange}
            />
            {errors?.mobile && (
              <MessageBox color="danger" messages={errors.mobile} />
            )}
          </dd>
        </dl>
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
            {errors?.rTime && (
              <MessageBox color="danger" messages={errors.rTime} />
            )}
            <dl className="persons">
              <dt>{t('인원수')}</dt>
              <dd>
                <select
                  name="persons"
                  value={form?.persons}
                  onChange={onChange}
                >
                  {[...new Array(10).keys()].map((i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                      {t('명')}
                    </option>
                  ))}
                </select>
                {errors?.persons && (
                  <MessageBox color="danger" messages={errors.persons} />
                )}
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
