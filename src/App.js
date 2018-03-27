import React from 'react';

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
      <Collections />
    </Content>
    <Footer>
      <Paragraph>
        The source code is licensed under MIT. See{' '}
        <Link href="https://github.com/synthetiquely/collections">
          public repository
        </Link>{' '}
        for more details.
        <br />
        Please note, that images, that are listed above may be subject to
        copyright.
      </Paragraph>
    </Footer>
  </Layout>
);

export default App;
