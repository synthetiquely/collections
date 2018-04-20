import SearchStore from '../SearchStore';

describe('Search Store', () => {
  const items = [
    {
      id: '1',
    },
    {
      id: '2',
    },
    {
      id: '3',
    },
  ];
  const mockCollections = {
    photos: [],
    setItems: jest.fn(),
    appendItems: jest.fn(photos => this.photos.push(photos)),
  };

  const mockApi = {
    getPhotos: jest.fn(() =>
      new Promise((resolve) => {
        resolve(items);
      })),
    searchPhotos: jest.fn(),
  };

  it('should have an initial state', () => {
    const store = new SearchStore(mockApi, mockCollections);

    expect(store.api).toEqual(mockApi);
    expect(store.collections).toEqual(mockCollections);
    expect(store.searchTerm).toEqual('');
    expect(store.nextPage).toEqual(1);
    expect(store.isLoading).toEqual(false);
    expect(store.error).toEqual(null);
    expect(store.limit).toBeUndefined();
  });

  it('should set search term', () => {
    const store = new SearchStore(mockApi, mockCollections);

    const testTerm = 'a test but still a kitty';
    store.setSearchTerm(testTerm);

    expect(store.searchTerm).toEqual(testTerm);
  });

  it('should set next page', () => {
    const store = new SearchStore(mockApi, mockCollections);
    const testNextPage = 333;

    store.setPage(testNextPage);

    expect(store.nextPage).toEqual(testNextPage);
  });

  it('should test loading', () => {
    const store = new SearchStore(mockApi, mockCollections);
    const status = true;

    store.setLoading(status);

    expect(store.isLoading).toEqual(status);
  });

  it('should set error', () => {
    const store = new SearchStore(mockApi, mockCollections);
    const error = { message: 'A test error' };

    store.setError(error);

    expect(store.error).toEqual(error);
  });

  it('should recalculate pagination limit based on provided width and height', () => {
    const store = new SearchStore(mockApi, mockCollections);
    const width = 100;
    const height = 100;

    store.recalculateLimit(height, width);

    expect(store.limit).toBeDefined();
  });

  // it('should fetch photos', async () => {
  //   const store = new SearchStore(mockApi, mockCollections);
  //   const isLoading = true;
  //   store.isLoading = isLoading;

  //   await store.fetchPhotos();

  //   expect(store.isLoading).toBeFalsy();
  //   expect(store.collections.photos).toHaveLength(items.length);
  // });
});