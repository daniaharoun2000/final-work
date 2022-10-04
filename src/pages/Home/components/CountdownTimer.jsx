import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from './useCountdown';

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <span>Please select a future date and time.</span>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (

      <a
      href="/"
        target="_blank"
        rel="noopener noreferrer"
        className=" text-badge countdown "
      >
        <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} className="text-badge " />
        <span className="text-badge ">:</span>
        <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
        <span className="text-badge ">:</span>
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        <span className="text-badge ">:</span>
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
      </a>

  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
