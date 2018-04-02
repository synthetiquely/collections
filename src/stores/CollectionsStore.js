import { observable, action } from 'mobx';
import { DESTINATION_NEXT, DESTINATION_PREVIOUS } from '../constants';

class CollectionsStore {
  @observable photos;
  @observable selectedPhoto;

  constructor() {
    this.photos = [];
    this.selectedPhoto = null;
  }

  @action.bound
  setItems(items) {
    this.photos = items;
  }

  @action.bound
  appendItems(items) {
    this.photos = [...this.photos, ...items];
  }

  @action.bound
  selectPhoto(index) {
    this.selectedPhoto = index;
  }

  @action.bound
  slideNext(destination) {
    if (destination === DESTINATION_NEXT) {
      if (this.photos[this.selectedPhoto + 1]) {
        this.selectPhoto(this.selectedPhoto + 1);
      } else {
        this.selectPhoto(0);
      }
    } else if (destination === DESTINATION_PREVIOUS) {
      if (this.photos[this.selectedPhoto - 1]) {
        this.selectPhoto(this.selectedPhoto - 1);
      } else {
        this.selectPhoto(this.photos.length - 1);
      }
    }
  }

  @action.bound
  clearSelection() {
    this.selectedPhoto = null;
  }
}

export default CollectionsStore;
