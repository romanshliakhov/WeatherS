export const SET_IS_AUTH_ACTION = 'SET_IS_AUTH_ACTION';
export const SET_LOCATION = 'SET_LOCATION';

export const setIsAuth = (value) => ({
  type: SET_IS_AUTH_ACTION,
  payload: value,
});

export const setLocation = (location) => ({
  type: SET_LOCATION,
  location,
});
