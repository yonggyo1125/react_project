import React from 'react';
import Calendar from 'react-calendar';

const ReservationForm = ({ data, onCalendarClick }) => {
  const { availableDates } = data;
  const startDate = availableDates[0];
  const endDate = availableDates[availableDates.length - 1];

  return (
    <Calendar
      onChange={onCalendarClick}
      value={startDate}
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
  );
};

export default React.memo(ReservationForm);
