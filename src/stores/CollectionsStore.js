import { observable, action } from 'mobx';
import { RESULTS_LIMIT } from '../constants';

class CollectionsStore {
  @observable images;
  @observable isLoading;
  @observable skip;

  constructor(api) {
    this.api = api;
    this.images = [];
    this.isLoading = false;
    this.skip = 0;
  }

  @action
  async loadItems() {
    this.isLoading = true;
    const images = await this.api.fetchImages(this.skip, RESULTS_LIMIT);
    this.isLoading = false;
    this.images = images;
  }
}

export default CollectionsStore;
