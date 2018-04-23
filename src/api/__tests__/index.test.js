import unsplash from '../index';

describe('Unsplash API Setup', () => {
  it('should return an api wrapper with listPhotos and search photos methods', () => {
    expect(unsplash).toHaveProperty('photos');
    expect(unsplash.photos).toHaveProperty('listPhotos');
    expect(unsplash.photos.listPhotos).toBeInstanceOf(Function);
    expect(unsplash).toHaveProperty('search');
    expect(unsplash.search).toHaveProperty('photos');
    expect(unsplash.search.photos).toBeInstanceOf(Function);
  });
});
