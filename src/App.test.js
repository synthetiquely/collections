import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Provider } from 'mobx-react';
import App from './App';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

const collections = {
  photos: [],
  selectedPhoto: null,
  selectedPhotoIndex: null,
  setItems: () => ({}),
  appendItems: () => ({}),
  selectPhoto: () => ({}),
  slideNext: () => ({}),
  clearSelection: () => ({}),
};

const search = {
  api: {},
  collections: {},
  searchTerm: '',
  nextPage: 1,
  isLoading: false,
  error: null,
  loadItems: () => ({}),
  fetchPhotos: () => ({}),
  searchPhotos: () => ({}),
  setSearchTerm: () => ({}),
  setPage: () => ({}),
  setLoading: () => ({}),
  setError: () => ({}),
  recalculateLimit: () => ({}),
};

describe('App component', () => {
  it('should render Layout components', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(Layout)).toHaveLength(1);
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(Content)).toHaveLength(1);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });

  it('should match its own snapshot', () => {
    const component = (
      <Provider search={search} collections={collections}>
        <App />
      </Provider>
    );
    const tree = renderer.create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
