import React from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import { useTranslation } from 'react-i18next';
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from 'react-icons/io';
const FormBox = styled.form``;

const ReservationForm = ({
  data,
  form,
  onSubmit,
  onDateChange,
  onTimeChange,
}) => {
  const { t } = useTranslation();
  const { minDate, maxDate, times } = data;
  return (
    <FormBox onSubmit={onSubmit} autoComplete="off">
      <div className="select-date">
        <h2>{t('예약일_선택')}</h2>
        <Calendar minDate={minDate} maxDate={maxDate} onChange={onDateChange} />
      </div>
      <div className="select-time">
        {times && (
          <ul>
            {times[0] && (
              <li onClick={() => onTimeChange('AM')}>
                {form.ampm === 'AM' ? (
                  <IoIosRadioButtonOn />
                ) : (
                  <IoIosRadioButtonOff />
                )}
                {t('오전')}
              </li>
            )}
            {times[1] && (
              <li onClick={() => onTimeChange('PM')}>
                {form.ampm === 'PM' ? (
                  <IoIosRadioButtonOn />
                ) : (
                  <IoIosRadioButtonOff />
                )}
                {t('오후')}
              </li>
            )}
          </ul>
        )}
        <dl>
          <dt>{t('예약_인원')}</dt>
          <dd>
            <select name="persons" value={form?.persons}>
              {[...new Array(30)].map((i) => (
                <option key={`persons_${i}`} value={i + 1}>
                  {i + 1}
                  {t('명')}
                </option>
              ))}
            </select>
          </dd>
        </dl>
      </div>
    </FormBox>
  );
};

export default React.memo(ReservationForm);
