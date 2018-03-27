import { toJson } from 'unsplash-js';

/**
 * SearchAPI defines methods which allows you to communicate with a provider
 * and to list photos
 */
class PhotosAPI {
  /**
   * Creates an instance of *PhotosAPI* Class
   * @param {object} api - provider for search functionallity
   */
  constructor(api) {
    this.api = api;
  }

  /**
   * Get a single page from the list of all photos
   * @param {{ page?: number, per_page?: number, orderBy?: string }} options
   * @returns {Promise<any>}
   */
  getPhotos = (...options) =>
    this.api.photos
      .listPhotos(...options)
      .then(toJson)
      .then(json => window.console.log(json));
}

export default PhotosAPI;
