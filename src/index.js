import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';

import unsplash from './api';
import PhotosApi from './api/photosApi';
import SearchApi from './api/searchApi';

import CollectionsStore from './stores/CollectionsStore';
import SearchStore from './stores/SearchStore';

import App from './App';
import './index.css';

configure({
  enforceActions: true,
});

const photosApi = new PhotosApi(unsplash);
const searchApi = new SearchApi(unsplash);

const collectionsStore = new CollectionsStore(photosApi);
const searchStore = new SearchStore(searchApi, collectionsStore);

ReactDOM.render(
  <Provider collections={collectionsStore} search={searchStore}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
