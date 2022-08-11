import React from 'react';
import './Authorization.css';

import { Routes, Route } from 'react-router-dom';
// import { useSelector} from "react-redux";

import AuthorizationLogin from './AuthorizationLogin';
import AuthorizationRegistration from './AuthorizationRegistration';

function AuthorizationPage() {
  return (
    <div className="AuthorizationPage">
      <Routes>
        <Route path="/login" element={<AuthorizationLogin />} />
        <Route path="/registration" element={<AuthorizationRegistration />} />
        {/* <Route path='/*'/> */}
      </Routes>
    </div>
  );
}

export default AuthorizationPage;
