import { toJson } from 'unsplash-js';
import Photo from './Photo';

/**
 * API defines methods which allows you to communicate with a provider
 * and to list photos, and to search for a specific photos/users/collections
 */
class Api {
  /**
   * Creates an instance of *PhotosAPI* Class
   * @param {object} api - provider for search functionallity
   */
  constructor(api) {
    this.api = api;
  }

  /**
   * Get a list of photos matching the keyword
   * @param {string} keyword
   * @param {{ page?: number, per_page?: number }} options
   * @returns {Promise<Photo[]>}
   */
  searchPhotos = (keyword, ...options) =>
    this.api.search
      .photos(keyword, ...options)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('API is currently unavailable. Please try again later.');
        }
        return response;
      })
      .then(toJson)
      .then(json => json.results.map(data => new Photo(data)));

  /**
   * Get a single page from the list of all photos
   * @param {{ page?: number, per_page?: number, orderBy?: string }} options
   * @returns {Promise<Photo[]>}
   */
  getPhotos = (...options) =>
    this.api.photos
      .listPhotos(...options)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('API is currently unavailable. Please try again later.');
        }
        return response;
      })
      .then(toJson)
      .then(json => json.map(data => new Photo(data)));
}

export default Api;
