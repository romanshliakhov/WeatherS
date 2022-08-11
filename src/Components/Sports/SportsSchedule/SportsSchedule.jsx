import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectSportEvents } from '../../../Store/sport/selectors';
import { fetchSportsSchedule } from '../../../Store/sport/thunks';

function SportsSchedule() {
  const dispatch = useDispatch();

  const { football } = useSelector(selectSportEvents);

  useEffect(() => {
    dispatch(fetchSportsSchedule());
  }, [dispatch]);

  return (
    <div className="SportsSchedule">
      Спортивные события
      <ul>
        {football.map(({ match, start }) => (
          <li key={match}>
            {match}
            :
            {start}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SportsSchedule;
