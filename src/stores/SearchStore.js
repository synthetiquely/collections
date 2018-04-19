import { observable, action, runInAction } from 'mobx';
import { calculatePaginationLimit } from '../utils/imageUtils';

class SearchStore {
  @observable searchTerm;
  @observable nextPage;
  @observable limit;
  @observable isLoading;
  @observable error;

  constructor(api, collections) {
    this.api = api;
    this.collections = collections;
    this.searchTerm = '';
    this.nextPage = 1;
    this.isLoading = false;
    this.error = null;
  }

  @action.bound
  async loadItems(term) {
    if (!this.isLoading) {
      this.setLoading(true);
      this.setError(null);
      let response = {};
      try {
        if (!this.searchTerm && !term) {
          response = await this.fetchPhotos();
        } else {
          response = await this.searchPhotos(term);
        }
        this.setPage(this.nextPage + 1);
        return response;
      } catch (error) {
        runInAction(() => {
          this.setError(error.toString());
          this.setLoading(false);
        });
      }
      return response;
    }
    return null;
  }

  @action.bound
  async fetchPhotos() {
    const photos = await this.api.getPhotos(this.nextPage, this.limit);
    runInAction(() => {
      this.collections.appendItems(photos);

      this.setLoading(false);
    });
  }

  @action.bound
  async searchPhotos(term) {
    if (term) {
      this.setPage(1);
    }

    const photos = await this.api.searchPhotos(
      term || this.searchTerm,
      this.nextPage,
      this.limit,
    );
    runInAction(() => {
      if (term) {
        this.collections.setItems(photos);
      } else {
        this.collections.appendItems(photos);
      }
      this.setLoading(false);
    });
  }

  @action.bound
  setSearchTerm(term) {
    this.searchTerm = term;
    this.loadItems(term);
  }

  @action.bound
  setPage(page) {
    this.nextPage = page;
  }

  @action.bound
  setLoading(status) {
    this.isLoading = status;
  }

  @action.bound
  setError(error) {
    this.error = error;
  }

  @action.bound
  recalculateLimit(clientHeight, clientWidth) {
    this.limit = calculatePaginationLimit(clientHeight, clientWidth);
  }
}

export default SearchStore;
