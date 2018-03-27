import { observable, action, runInAction } from 'mobx';
import { RESULTS_LIMIT } from '../constants';

class SearchStore {
  @observable term;
  @observable isLoading;

  constructor(api, collectionsStore) {
    this.api = api;
    this.collectionsStore = collectionsStore;
    this.term = '';
    this.isLoading = false;
  }

  @action.bound
  async search(term) {
    this.isLoading = true;
    this.term = term;
    try {
      const photos = await this.api.searchPhotos(this.term, 1, RESULTS_LIMIT);
      runInAction(() => {
        this.collectionsStore.photos = photos;
      });
    } catch (error) {
      window.console.log(
        'Error occured while trying to search for photos',
        error,
      );
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }
}

export default SearchStore;
