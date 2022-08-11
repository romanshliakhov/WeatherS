export const SET_SEARCH_INFO_REQUEST = 'SET_SEARCH_INFO_REQUEST';
export const SET_SEARCH_INFO_SUCCESS = 'SET_SEARCH_INFO_SUCCESS';
export const SET_SEARCH_INFO_FAILURE = 'SET_SEARCH_INFO_FAILURE';

export const setSearchInfoRequest = () => ({
  type: SET_SEARCH_INFO_REQUEST,
});
export const setSearchInfoSuccess = (searchResults) => ({
  type: SET_SEARCH_INFO_SUCCESS,
  searchResults,
});
export const setSearchInfoFailure = (error) => ({
  type: SET_SEARCH_INFO_FAILURE,
  error,
});
