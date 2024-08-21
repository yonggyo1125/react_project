import React from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import { IoMdRadioButtonOn, IoMdRadioButtonOff } from 'react-icons/io';

const TimeTableAndPerson = styled.div``;

const ReservationForm = ({
  data,
  form,
  times,
  onCalendarClick,
  onTimeClick,
}) => {
  const { availableDates } = data;
  const startDate = availableDates[0];
  const endDate = availableDates[availableDates.length - 1];

  return (
    <>
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
      <TimeTableAndPerson>
        {times?.length > 0 && (
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
        )}
      </TimeTableAndPerson>
    </>
  );
};

export default React.memo(ReservationForm);
