/**
 * Find out orientation of a given image
 * @param {string} src - souce of an image
 * @returns {Promise<string>} - orientation could be: 'landscape' | 'portrait' | 'even';
 */
const calculateImageOrientation = (src) => {
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

export default calculateImageOrientation;
