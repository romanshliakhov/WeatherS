export const SET_SPORT_EVENTS_REQUEST = 'SET_SPORT_EVENTS_REQUEST';
export const SET_SPORT_EVENTS_SUCCESS = 'SET_SPORT_EVENTS_SUCCESS';
export const SET_SPORT_EVENTS_FAILURE = 'SET_SPORT_EVENTS_FAILURE';

export const setSportEventsRequest = () => ({
  type: SET_SPORT_EVENTS_REQUEST,
});

export const setSportEventsSuccess = (sportEvents) => ({
  type: SET_SPORT_EVENTS_SUCCESS,
  sportEvents,
});

export const setSportEventsFailure = (error) => ({
  type: SET_SPORT_EVENTS_FAILURE,
  error,
});
