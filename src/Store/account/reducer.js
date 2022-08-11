import {
  SET_IS_AUTH_ACTION,
  SET_LOCATION,
} from './actions';

const initialState = {
  isAuth: true,
  // isAuth: false,
  accountSettings: {
    location: null,
  },
};

export const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_AUTH_ACTION:
      const setIsAuthState = { ...state, isAuth: action.payload };
      localStorage.account = JSON.stringify(setIsAuthState);
      return setIsAuthState;
    case SET_LOCATION:
      const setLocationState = { ...state, profileSettings: { ...state.accountSettings, location: action.location } };
      localStorage.account = JSON.stringify(setLocationState);
      return setLocationState;
    default:
      return state;
  }
};
