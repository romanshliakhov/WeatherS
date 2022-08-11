import { setSportEventsFailure, setSportEventsRequest, setSportEventsSuccess } from './actions';

import { getWeather } from '../../services/weatherApiProvider';

export const fetchSportsSchedule = (location) => async (dispatch, getState) => {
  dispatch(setSportEventsRequest());
  try {
    const response = await getWeather(location);
    dispatch(setSportEventsSuccess(response.data));
  } catch (error) {
    dispatch(setSportEventsFailure(error.message));
  }
};
