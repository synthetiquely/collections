import React from 'react';

import api from './api';

import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Link from './components/styled/Link';
import Paragraph from './components/styled/Paragraph';
import SearchForm from './components/SearchForm/SearchForm';
import Collections from './components/Collections/Collections';

const App = () => (
  <Layout>
    <Header>
      <SearchForm />
    </Header>
    <Content>
      <Collections images={api} />
    </Content>
    <Footer>
      <Paragraph>
        The source code is licensed under MIT. See{' '}
        <Link href="https://github.com/synthetiquely/collections">
          public repository
        </Link>{' '}
        for more details.
      </Paragraph>
    </Footer>
  </Layout>
);

export default App;
