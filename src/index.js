import React from 'react';
import ReactDOM from 'react-dom';
import Geolocation from './Geolocation';
import GitRepositoryList from './GitRepositoryList';

ReactDOM.render(
  <React.StrictMode>
    <Geolocation />
    <GitRepositoryList />
  </React.StrictMode>,
  document.getElementById('root')
);

