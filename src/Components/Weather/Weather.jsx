import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

import SearchBlock from './SearchBlock/SearchBlock';

import './Weather.css';

function Weather() {
  return (
    <div className="Weather">
      <SearchBlock />
    </div>
  );
}

export default Weather;
