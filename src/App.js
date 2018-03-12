import React from 'react';
import glamorous from 'glamorous';

import api from './api';

import Layout from './Common/Layout';
import Header from './Common/Header';
import Footer from './Common/Footer';
import SearchForm from './SearchForm';
import Collections from './Collections';

const App = () => (
  <Layout>
    <Header>
      <SearchForm />
    </Header>
    <Container>
      <Collections images={api} />
    </Container>
    <Footer />
  </Layout>
);

const Container = glamorous.main({
  gridArea: 'content',
  gridColumn: '1 / -1',
  gridRow: '2 / 3',
  backgroundColor: '#f6f5f3',
});

export default App;
