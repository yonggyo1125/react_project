import React, { useContext } from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import { useTranslation } from 'react-i18next';
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from 'react-icons/io';
import { BigButton } from '../../commons/components/Buttons';
import InputBox from '../../commons/components/InputBox';
import MessageBox from '../../commons/components/MessageBox';
import UserInfoContext from '../../member/modules/UserInfoContext';

const FormBox = styled.form`
  display: flex;
  .box {
    flex-grow: 1;
    width: 0;
  }
  .box + .box {
    margin-left: 30px;
  }
`;

const ReservationForm = ({
  data,
  form,
  onSubmit,
  onDateChange,
  onTimeChange,
  onChange,
  errors,
}) => {
  const { t } = useTranslation();
  const { minDate, maxDate, times } = data;

  return (
    <FormBox onSubmit={onSubmit} autoComplete="off">
      <div className="select-date box">
        <h2>{t('예약일_선택')}</h2>
        <Calendar minDate={minDate} maxDate={maxDate} onChange={onDateChange} />
        {errors?.rDate && <MessageBox color="danger" messages={errors.rDate} />}
      </div>
      <div className="select-time box">
        <h2>{t('예약자_기본정보')}</h2>
        <dl>
          <dt>{t('예약자명')}</dt>
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
        <h2>{t('예약시간/인원수_선택')}</h2>
        {times && (
          <dl>
            <dt>{t('예약시간')}</dt>
            <dd>
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
              {errors?.ampm && (
                <MessageBox color="danger" messages={errors.ampm} />
              )}
            </dd>
          </dl>
        )}
        <dl>
          <dt>{t('예약인원')}</dt>
          <dd>
            <select name="persons" value={form?.persons} onChange={onChange}>
              {[...new Array(30).keys()].map((i) => (
                <option key={`persons_${i}`} value={i + 1}>
                  {i + 1}
                  {t('명')}
                </option>
              ))}
            </select>
          </dd>
        </dl>
        {errors?.global && (
          <MessageBox color="danger" messages={errors.global} />
        )}
        <BigButton type="submit" color="primary">
          {t('예약하기')}
        </BigButton>
      </div>
    </FormBox>
  );
};

export default React.memo(ReservationForm);
