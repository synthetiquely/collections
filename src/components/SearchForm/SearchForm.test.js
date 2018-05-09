import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { Provider } from 'mobx-react';
import SearchForm from './SearchForm';
import Error from '../Error/Error';

describe('Swipe Component', () => {
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

  it('should render and match its own snapshot', () => {
    const component = (
      <Provider search={search}>
        <SearchForm />
      </Provider>
    );
    const wrapper = mount(component);
    const tree = renderer.create(component).toJSON();

    expect(wrapper).toHaveLength(1);
    expect(tree).toMatchSnapshot();
  });

  it('should render Error component, if there is an error in the store', () => {
    const store = {
      error: 'Error',
    };
    const component = (
      <Provider search={store}>
        <SearchForm />
      </Provider>
    );
    const wrapper = mount(component);

    expect(wrapper.find(Error)).toHaveLength(1);
    expect(wrapper
      .find(Error)
      .find('h1')
      .text()).toEqual('Ошибка');
  });
});
