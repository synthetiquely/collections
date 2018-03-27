import { observable, action } from 'mobx';
// import { RESULTS_LIMIT } from '../constants';

class CollectionsStore {
  @observable photos;
  @observable isLoading;
  @observable skip;

  constructor(api) {
    this.api = api;
    this.photos = [];
    this.isLoading = false;
    this.skip = 0;
    this.loadItems();
  }

  @action
  async loadItems() {
    this.isLoading = true;
    try {
      const photos = await this.api.getPhotos();
      this.photos = photos;
    } catch (error) {
      window.console.log('Error occured while trying to getPhotos', error);
    } finally {
      this.isLoading = false;
    }
  }
}

export default CollectionsStore;
