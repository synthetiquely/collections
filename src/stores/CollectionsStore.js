import { observable, action } from 'mobx';
import { DESTINATION_NEXT, DESTINATION_PREVIOUS } from '../constants';

class CollectionsStore {
  @observable photos;
  @observable selectedPhoto;
  @observable selectedPhotoIndex;

  constructor() {
    this.photos = [];
    this.selectedPhoto = null;
    this.selectedPhotoIndex = null;
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
  selectPhoto(id) {
    this.selectedPhotoIndex = this.photos.findIndex(photo => photo.id === id);
    this.selectedPhoto = this.photos[this.selectedPhotoIndex];
  }

  @action.bound
  slideNext(destination) {
    if (destination === DESTINATION_NEXT) {
      if (this.photos[this.selectedPhotoIndex + 1]) {
        this.selectPhoto(this.photos[this.selectedPhotoIndex + 1].id);
      } else {
        this.selectPhoto(this.photos[0].id);
      }
    } else if (destination === DESTINATION_PREVIOUS) {
      if (this.photos[this.selectedPhotoIndex - 1]) {
        this.selectPhoto(this.photos[this.selectedPhotoIndex - 1].id);
      } else {
        this.selectPhoto(this.photos[this.photos.length - 1]);
      }
    }
  }

  @action.bound
  clearSelection() {
    this.selectedPhoto = null;
    this.selectedPhotoIndex = null;
  }
}

export default CollectionsStore;
