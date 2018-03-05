import React from 'react';
import glamorous from 'glamorous';

import Layout from './Common/Layout';
import Header from './Common/Header';
import SearchForm from './SearchForm';

const App = () => (
  <Layout>
    <Header>
      <SearchForm />
    </Header>
    <Container />
  </Layout>
);

const Container = glamorous.main({
  gridArea: 'content',
  backgroundColor: '#f6f5f3',
});

export default App;
