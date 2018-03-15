/**
 * Find out orientation, width and height of a given image
 * @param {string} src - souce of an image
 * @returns {Promise<{ orientation: string, width: number, height: number }>}
 * - orientation could be: 'landscape' | 'portrait' | 'even';
 */
export const calculateImageSizes = (src) => {
  let orientation;
  let img = new Image();

  return new Promise((resolve) => {
    img.onload = () => {
      const width = img.naturalWidth || img.width;
      const height = img.naturalHeight || img.height;
      if (width > height) {
        orientation = 'landscape';
      } else if (width < height) {
        orientation = 'portrait';
      } else {
        orientation = 'even';
      }
      img = null;
      resolve({ orientation, width, height });
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

  imgs.forEach((img) => {
    if (!img.complete) {
      isLoaded = false;
    }
  });

  return isLoaded;
};
