import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { Provider } from 'mobx-react';
import Collections from './Collections';
import Views from '../Views/Views';
import Preview from '../Preview/Preview';

const collections = {
  photos: [
    {
      id: '1',
      description: '',
      color: '#444',
      width: '150',
      height: '216',
      links: {
        html: 'example.com',
      },
      urls: {
        small: '',
        regular: '',
      },
      user: {
        id: '3',
        name: 'test',
        username: 'test',
      },
    },
  ],
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

describe('Collections Component', () => {
  it('should render and match its own snapshot', () => {
    const component = (
      <Provider search={search} collections={collections}>
        <Collections />
      </Provider>
    );
    const wrapper = mount(component);
    const tree = renderer.create(component).toJSON();

    expect(wrapper).toHaveLength(1);
    expect(tree).toMatchSnapshot();

    expect(wrapper.props()).toHaveProperty('search', search);
    expect(wrapper.props()).toHaveProperty('collections', collections);
  });
  it('should render Views and Preview components', () => {
    const component = (
      <Provider search={search} collections={collections}>
        <Collections />
      </Provider>
    );
    const wrapper = mount(component);

    expect(wrapper.find(Views)).toHaveLength(1);
    expect(wrapper.find(Preview)).toHaveLength(1);
  });
});
