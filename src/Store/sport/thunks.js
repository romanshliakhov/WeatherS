import {
  setSportEventsFailure,
  setSportEventsRequest,
  setSportEventsSuccess,
} from './actions';

import { getSportsSchedule } from '../../services/sportApiProvider';

// eslint-disable-next-line import/prefer-default-export
export const fetchSportsSchedule = () => async (dispatch) => {
  dispatch(setSportEventsRequest());
  try {
    const response = await getSportsSchedule();
    dispatch(setSportEventsSuccess(response));
  } catch (error) {
    dispatch(setSportEventsFailure(error.message));
  }
};
