import { observable, action, runInAction } from 'mobx';
import { RESULTS_LIMIT } from '../constants';

class CollectionsStore {
  @observable photos;
  @observable isLoading;
  @observable nextPage;

  constructor(api) {
    this.api = api;
    this.photos = [];
    this.isLoading = false;
    this.nextPage = 1;
    this.loadItems();
  }

  /**
   * TODO: Implement loadItems for a search term, if it is specified by user
   */
  @action.bound
  async loadItems() {
    this.isLoading = true;
    try {
      const photos = await this.api.getPhotos(
        this.nextPage,
        RESULTS_LIMIT,
        'latest',
      );
      runInAction(() => {
        this.photos = [...this.photos, ...photos];
        this.nextPage += 1;
      });
    } catch (error) {
      window.console.log('Error occured while trying to getPhotos', error);
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }

  @action.bound
  setItems(items) {
    this.photos = items;
    this.nextPage = 1;
  }

  @action.bound
  clearItems() {
    this.photos = [];
    this.nextPage = 1;
  }
}

export default CollectionsStore;
