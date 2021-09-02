/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import axios from 'axios';
import AppContext from '../../../context';

const CalRow = ({ event }) => {
  const {
    time, owner, genre, distance,
  } = event;
  const timeObj = new Date(time);
  const dateArr = timeObj.toString().split(' ');
  const eventDay = dateArr.slice(0, 3).join(' ');
  const { userNameClick, currentUser, myCalendar } = useContext(AppContext);

  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours %= 12;
    hours = hours || 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    const strTime = `${hours}:${minutes} ${ampm}`;
    return strTime;
  };

  const prettyTime = formatTime(timeObj);

  const addToMyEvents = (event) => {
    const eventId = event.target.attributes[1].value;
    const userId = currentUser.id;
    axios
      .put(`/api/user/${userId}/${eventId}`)
      .then(myCalendar());
  };

  const rowStyle = (() => {
    if (currentUser.name === owner[0].name) {
      return {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        border: 'solid 1px #e5c163',
      };
    }
    return {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    };
  })();

  return (
    <div
      style={rowStyle}
      value={event._id}
    >
      <img
        src={owner.photo}
        alt="avatar of this busker"
        style={{ maxHeight: '2rem', maxWidth: '2rem' }}
      />
      <div onClick={userNameClick} name={owner[0].name} style={{ cursor: 'pointer' }}>{owner[0].name}</div>
      <div>{genre}</div>
      <div>{eventDay}</div>
      <div>{prettyTime}</div>
      <div>{`${distance.toFixed(2)} miles`}</div>
      {currentUser.name === owner[0].name
        ? <div />
        : <button type="button" value={event._id} onClick={addToMyEvents} style={{ cursor: 'pointer' }}> + </button>}
    </div>
  );
};
export default CalRow;
