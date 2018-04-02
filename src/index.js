import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';

import unsplash from './api';
import Api from './api/Api';

import CollectionsStore from './stores/CollectionsStore';
import SearchStore from './stores/SearchStore';

import App from './App';
import './index.css';

configure({
  enforceActions: true,
});

const api = new Api(unsplash);

const collectionsStore = new CollectionsStore();
const searchStore = new SearchStore(api, collectionsStore);

ReactDOM.render(
  <Provider collections={collectionsStore} search={searchStore}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
