import CollectionsStore from '../CollectionsStore';
import { DESTINATION_NEXT, DESTINATION_PREVIOUS } from '../../constants';

describe('Collections Store', () => {
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

  it('should have an initial state', () => {
    const store = new CollectionsStore();

    expect(store.photos).toHaveLength(0);
    expect(store.selectedPhoto).toBeNull();
    expect(store.selectedPhotoIndex).toBeNull();
  });

  it('should set items', () => {
    const store = new CollectionsStore();
    const index = 0;

    store.setItems(items);

    expect(store.photos).toHaveLength(items.length);
    expect(store.photos[index]).toEqual(items[index]);
  });

  it('should append items', () => {
    const store = new CollectionsStore();
    const index = 0;
    const initialItems = [
      {
        id: '-1',
      },
      {
        id: '0',
      },
    ];

    store.photos = initialItems;
    store.appendItems(items);

    expect(store.photos).toHaveLength(initialItems.length + items.length);
    expect(store.photos[index]).toEqual(initialItems[index]);
  });

  it('should select photo', () => {
    const store = new CollectionsStore();
    const index = 1;
    store.photos = items;

    store.selectPhoto(items[index].id);

    expect(store.selectedPhoto).toEqual(items[index]);
    expect(store.selectedPhotoIndex).toEqual(index);
  });

  it('should clear selection', () => {
    const store = new CollectionsStore();
    const index = 1;
    store.photos = items;
    store.selectedPhoto = items[index];
    store.selectedPhotoIndex = index;

    store.clearSelection();

    expect(store.selectedPhoto).toBeNull();
    expect(store.selectedPhotoIndex).toBeNull();
  });

  it('should select a sibling photo based on the direction of slide', () => {
    const store = new CollectionsStore();
    const initialIndex = 1;
    store.photos = items;
    store.selectedPhoto = items[initialIndex];
    store.selectedPhotoIndex = initialIndex;

    store.slideNext(DESTINATION_PREVIOUS);

    expect(store.selectedPhoto).toEqual(items[initialIndex - 1]);
    expect(store.selectedPhotoIndex).toEqual(initialIndex - 1);
  });

  it('should select the first image, if a selected image is the last item in the array', () => {
    const store = new CollectionsStore();
    const initialIndex = items.length - 1;
    store.photos = items;
    store.selectedPhoto = items[initialIndex];
    store.selectedPhotoIndex = initialIndex;

    store.slideNext(DESTINATION_NEXT);

    expect(store.selectedPhoto).toEqual(items[0]);
    expect(store.selectedPhotoIndex).toEqual(0);
  });

  it('should select the last image, if a selected image is the first item in the array', () => {
    const store = new CollectionsStore();
    const initialIndex = 0;
    store.photos = items;
    store.selectedPhoto = items[initialIndex];
    store.selectedPhotoIndex = initialIndex;

    store.slideNext(DESTINATION_PREVIOUS);

    expect(store.selectedPhoto).toEqual(items[items.length - 1]);
    expect(store.selectedPhotoIndex).toEqual(items.length - 1);
  });
});
