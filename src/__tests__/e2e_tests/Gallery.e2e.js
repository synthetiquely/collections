import Nightmare from 'nightmare';
import Niffy from 'niffy';
import co from 'co';
import {
  NIFFY_BASE_HOST,
  NIFFY_TEST_HOST,
  NIFFY_OPTIONS,
  ASYNC_CALLBACK_TIMEOUT,
} from '../../../test-setup';

describe('Image Gallery', () => {
  it(
    'show open a modal window, if user clicks on an image',
    async () => {
      const nightmare = Nightmare(NIFFY_OPTIONS);
      await nightmare
        .goto(NIFFY_TEST_HOST)
        .wait(5000)
        .click('img')
        .wait('#preview-modal')
        .exists('#preview-modal')
        .visible('#preview-modal')
        .evaluate(() => document.querySelector('#preview-modal img'))
        .end()
        .then((image) => {
          expect(image).toHaveProperty('src');
          expect(image).toHaveProperty('complete', true);
        })
        .catch((error) => {
          console.error(`An error has occurred: ${error}`);
        });
    },
    ASYNC_CALLBACK_TIMEOUT,
  );

  describe('Image Gallery perceptual diff test', () => {
    let niffy;
    beforeAll(() => {
      niffy = new Niffy(NIFFY_BASE_HOST, NIFFY_TEST_HOST, NIFFY_OPTIONS);
    });

    afterAll(async () => {
      await co(function* () {
        return yield niffy.end();
      });
    });

    it(
      'should open a modal window with an image',
      async () => {
        await co(function* () {
          return yield niffy.test('/', async (nightmare) => {
            await co(function* () {
              return yield nightmare
                .click('img')
                .wait('#preview-modal')
                .wait(3000)
                .end();
            });
          });
        });
      },
      ASYNC_CALLBACK_TIMEOUT,
    );
  });
});
