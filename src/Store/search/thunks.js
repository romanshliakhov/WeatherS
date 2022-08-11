import { setSearchInfoRequest, setSearchInfoSuccess, setSearchInfoFailure } from './actions';

import { getSearchValue } from '../../services/searchApiProvider';

export const fetchSearch = (value) => async (dispatch, getState) => {
  dispatch(setSearchInfoRequest());
  try {
    const response = await getSearchValue(value);
    dispatch(setSearchInfoSuccess(response.data));
  } catch (error) {
    dispatch(setSearchInfoFailure(error.message));
  }
};
