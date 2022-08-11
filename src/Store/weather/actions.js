export const SET_WEATHER_INFO_REQUEST = 'SET_WEATHER_INFO_REQUEST';
export const SET_WEATHER_INFO_SUCCESS = 'SET_WEATHER_INFO_SUCCESS';
export const SET_WEATHER_INFO_FAILURE = 'SET_WEATHER_INFO_FAILURE';

export const SET_WEATHER_HISTORY_INFO_REQUEST = 'SET_WEATHER_HISTORY_INFO_REQUEST';
export const SET_WEATHER_HISTORY_INFO_SUCCESS = 'SET_WEATHER_HISTORY_INFO_SUCCESS';
export const SET_WEATHER_HISTORY_INFO_FAILURE = 'SET_WEATHER_HISTORY_INFO_FAILURE';

export const SET_WEATHER_DAY_TO_DISPLAY = 'SET_WEATHER_DAY_TO_DISPLAY';

export const setWeatherInfoRequest = () => ({
  type: SET_WEATHER_INFO_REQUEST,
});
export const setWeatherInfoSuccess = (weatherInfo) => ({
  type: SET_WEATHER_INFO_SUCCESS,
  weatherInfo,
});
export const setWeatherInfoFailure = (error) => ({
  type: SET_WEATHER_INFO_FAILURE,
  error,
});

export const setWeatherHistoryInfoRequest = () => ({
  type: SET_WEATHER_HISTORY_INFO_REQUEST,
});
export const setWeatherHistoryInfoSuccess = (weatherHistoryInfo) => ({
  type: SET_WEATHER_HISTORY_INFO_SUCCESS,
  weatherHistoryInfo,
});
export const setWeatherHistoryInfoFailure = (error) => ({
  type: SET_WEATHER_HISTORY_INFO_FAILURE,
  error,
});

export const setWeatherDayToDisplay = (index) => ({
  type: SET_WEATHER_DAY_TO_DISPLAY,
  index,
});
