/**
 * Find out orientation of a given image
 * @param {string} src - souce of an image
 * @returns {Promise<string>} - orientation could be: 'landscape' | 'portrait' | 'even';
 */
export const calculateImageOrientation = (src) => {
  let orientation;
  let img = new Image();

  return new Promise((resolve) => {
    img.onload = () => {
      const w = img.naturalWidth || img.width;
      const h = img.naturalHeight || img.height;
      if (w > h) {
        orientation = 'landscape';
      } else if (w < h) {
        orientation = 'portrait';
      } else {
        orientation = 'even';
      }
      img = null;
      resolve(orientation);
    };
    img.src = src;
  });
};

/**
 * Given a DOM element, searches it for <img> tags and checks if all of them
 * have finished loading or not.
 * @param {HTMLElement} parentNode
 * @returns {Boolean}
 */
export const imagesLoaded = (parentNode) => {
  const imgs = parentNode.querySelectorAll('img');
  let isLoaded = true;

  for (let i = 0; i < imgs.length; i += 1) {
    if (!imgs[i].complete) {
      isLoaded = false;
    }
  }

  return isLoaded;
};
