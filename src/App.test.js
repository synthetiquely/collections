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
  setItems: jest.fn(),
  appendItems: jest.fn(),
  selectPhoto: jest.fn(),
  slideNext: jest.fn(),
  clearSelection: jest.fn(),
};

const search = {
  api: {},
  collections: {},
  searchTerm: '',
  nextPage: 1,
  isLoading: false,
  error: null,
  loadItems: jest.fn(),
  fetchPhotos: jest.fn(),
  searchPhotos: jest.fn(),
  setSearchTerm: jest.fn(),
  setPage: jest.fn(),
  setLoading: jest.fn(),
  setError: jest.fn(),
  recalculateLimit: jest.fn(),
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
