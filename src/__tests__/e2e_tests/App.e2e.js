import Nightmare from 'nightmare';

describe('Visual Tests', () => {
  describe('Home Page', () => {
    it(
      'should go to the home page and make a screenshot',
      async () => {
        const nightmare = Nightmare({ show: false });
        await nightmare
          .goto('http://127.0.0.1:3000')
          .wait(5000)
          .screenshot('./screenshots/home_page.png')
          .end()
          .then((result) => {
            console.log(result);
          })
          .catch((error) => {
            console.error(`An error has occurred: ${error}`);
          });
      },
      30000,
    );
  });
});
