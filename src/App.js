import React from 'react';
import glamorous from 'glamorous';

import api from './api';

import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SearchForm from './components/SearchForm/SearchForm';
import Collections from './components/Collections/Collections';

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
