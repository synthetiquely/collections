import { toJson } from 'unsplash-js';

/**
 * SearchAPI defines methods which allows you to communicate with a provider
 * and to search for a specific photos/users/collections
 */
class SearchAPI {
  /**
   * Creates an instance of *SearchAPI* Class
   * @param {object} api - provider for search functionallity
   */
  constructor(api) {
    this.api = api;
  }

  /**
   * Get a list of photos matching the keyword
   * @param {string} keyword
   * @param {{ page?: number, per_page?: number }} options
   * @returns {Promise<any>}
   */
  searchPhotos = (keyword, ...options) =>
    this.api.search.photos(keyword, ...options).then(toJson);
}

export default SearchAPI;
