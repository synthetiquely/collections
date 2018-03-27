import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'mobx';
import { Provider } from 'mobx-react';

import App from './App';
import CollectionsStore from './stores/CollectionsStore';

import './index.css';

configure({
  enforceActions: true,
});

const collectionsStore = new CollectionsStore();

ReactDOM.render(
  <Provider collections={collectionsStore}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
