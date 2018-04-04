const dotenv = require('dotenv');
const ghpages = require('gh-pages');

dotenv.config();

ghpages.publish(
  'build',
  {
    branch: 'gh-pages',
    repo: `https://${
      process.env.GITHUB_TOKEN
    }@github.com/synthetiquely/collections.git`,
  },
  (error) => {
    if (error) {
      throw error;
    } else {
      global.console.log('Deployment complete');
    }
  },
);
