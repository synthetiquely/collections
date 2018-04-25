import Nightmare from 'nightmare';
// import Niffy from 'niffy';

describe('Visual Tests', () => {
  // const basehost = 'https://github.com/synthetiquely/collections';
  // const testhost = 'http://127.0.0.1:3000';
  // let niffy;
  describe('Search Form', () => {
    it(
      'should go to the page, type something into the search form and then make a screenshot',
      async () => {
        const nightmare = Nightmare({ show: false });
        await nightmare
          .goto('http://127.0.0.1:3000')
          .wait(200)
          .type('input', 'cats')
          .click('button')
          .wait(5000)
          .screenshot('./screenshots/search_results.png')
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

    // beforeAll(() => {
    //   niffy = new Niffy(basehost, testhost, { show: true });
    // });

    // afterAll(async () => {
    //   await niffy.end();
    // });

    // describe('Search form', () => {
    //   beforeEach(async () => {
    //     await niffy.goto('/', async (nightmare) => {
    //       await nightmare
    //         .type('input', 'dogs')
    //         .click('button[type="submit"]')
    //         .wait(5000);
    //     });
    //   });

    //   it(
    //     'should find cats',
    //     async () => {
    //       await niffy.test('/');
    //     },
    //     30000,
    //   );
    // });
  });
});
