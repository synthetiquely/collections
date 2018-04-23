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
    setItems: jest.fn((photos) => {
      mockCollections.photos = photos;
    }),
    appendItems: jest.fn((photos) => {
      mockCollections.photos = [...mockCollections.photos, ...photos];
    }),
  };

  const mockApi = {
    getPhotos: jest.fn(() =>
      new Promise((resolve) => {
        resolve(items);
      })),
    searchPhotos: jest.fn(() =>
      new Promise((resolve) => {
        resolve(items);
      })),
  };

  beforeEach(() => {
    mockCollections.photos = [];
  });

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

  it('should fetch photos', async () => {
    const store = new SearchStore(mockApi, mockCollections);
    const isLoading = true;
    store.isLoading = isLoading;

    await store.fetchPhotos();

    expect(store.isLoading).toBeFalsy();
    expect(store.collections.photos).toHaveLength(items.length);
  });

  it('should fetch photos', async () => {
    const store = new SearchStore(mockApi, mockCollections);
    const isLoading = true;
    store.isLoading = isLoading;

    await store.fetchPhotos();

    expect(store.isLoading).toBeFalsy();
    expect(store.collections.photos).toHaveLength(items.length);
  });
  it('should search for photos with a specified search term', async () => {
    const store = new SearchStore(mockApi, mockCollections);
    const initItems = [{ id: '0' }];
    const term = 'Cats';
    const isLoading = true;
    store.collections.photos = initItems;
    store.nextPage = 3;
    store.isLoading = isLoading;

    await store.searchPhotos(term);

    expect(store.isLoading).toBeFalsy();
    expect(store.nextPage).toEqual(1);
    expect(store.collections.photos).toHaveLength(items.length);
  });

  it('should append items when the search term has not changed', async () => {
    const store = new SearchStore(mockApi, mockCollections);
    const initItems = [{ id: '0' }];
    const isLoading = true;
    const nextPage = 3;
    store.collections.photos = initItems;
    store.searchTerm = 'Cats';
    store.nextPage = nextPage;
    store.isLoading = isLoading;

    await store.searchPhotos();

    expect(store.isLoading).toBeFalsy();
    expect(store.nextPage).toEqual(nextPage);
    expect(store.collections.photos).toHaveLength(initItems.length + items.length);
  });

  it('should do nothing, if the application is already in loading state', async () => {
    const store = new SearchStore(mockApi, mockCollections);
    const isLoading = true;
    store.isLoading = isLoading;

    const response = await store.loadItems();

    expect(response).toBeNull();
  });

  it('should evoke fetchPhotos method, if there is no search term', async () => {
    const store = new SearchStore(mockApi, mockCollections);

    await store.loadItems();

    expect(store.api.getPhotos.mock.calls.length).toBeGreaterThanOrEqual(1);
    expect(store.error).toBeNull();
    expect(store.nextPage).toEqual(2);
  });

  it('should evoke searchPhotos method, if there is a search term in state', async () => {
    const store = new SearchStore(mockApi, mockCollections);
    store.searchTerm = 'Cats';

    await store.loadItems();

    expect(store.api.searchPhotos.mock.calls.length).toBeGreaterThanOrEqual(1);
    expect(store.error).toBeNull();
    expect(store.nextPage).toEqual(2);
  });

  it('should evoke searchPhotos method, if there is a search term in state', async () => {
    const store = new SearchStore(mockApi, mockCollections);
    const term = 'Cats';

    await store.loadItems(term);

    expect(store.api.searchPhotos.mock.calls.length).toBeGreaterThanOrEqual(1);
    expect(store.error).toBeNull();
    expect(store.nextPage).toEqual(2);
  });
});
