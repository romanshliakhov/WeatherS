import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AsyncPaginate } from 'react-select-async-paginate';

import { fetchSearch, setSearchInfoSuccess } from '../../../Store/search/action';

import { selectSearchResults } from '../../../Store/search/selectors';

function SearchBlock() {
  // const searchResult = useSelector(selectSearchResults);

  const [inputValue, setInputValue] = useState('');

  // const loadOptions = () => {

  // }

  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  return (
    <AsyncPaginate
      placeholder="Search city"
      debounceTimeout={600}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
}

export default SearchBlock;
