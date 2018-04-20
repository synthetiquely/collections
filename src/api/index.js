import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({
  applicationId: process.env.REACT_APP_ACCESS_KEY,
  secret: process.env.REACT_APP_SECRET_KEY,
  callbackUrl: process.env.REACT_APP_CALLBACK_URL,
});

export default unsplash;
