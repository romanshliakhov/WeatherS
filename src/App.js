import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { authRoutes, mainRoutes } from './Store/routes';

import { selectIsAuth } from './Store/account/selectors';

function App() {
  const isAuth = useSelector(selectIsAuth);

  return (
    <Routes>
      {isAuth
        ? authRoutes.map(({ path, Component }) => <Route key={path} path={path} element={<Component />} />)
        : mainRoutes.map(({ path, Component }) => <Route key={path} path={path} element={<Component />} />)}
    </Routes>
  );
}

export default App;
