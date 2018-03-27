import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'mobx';
import { Provider } from 'mobx-react';

import unsplash from './api';
import PhotosApi from './api/photosApi';

import App from './App';
import CollectionsStore from './stores/CollectionsStore';

import './index.css';

configure({
  enforceActions: true,
});

const photosApi = new PhotosApi(unsplash);

const collectionsStore = new CollectionsStore(photosApi);

ReactDOM.render(
  <Provider collections={collectionsStore}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
