import Nightmare from 'nightmare';
import Niffy from 'niffy';
import co from 'co';
import {
  NIFFY_BASE_HOST,
  NIFFY_TEST_HOST,
  NIFFY_OPTIONS,
  ASYNC_CALLBACK_TIMEOUT,
  MOBILE_SCREEN_WIDTH,
  MOBILE_SCREEN_HEIGHT,
} from '../../../test-setup';

describe('Visual Regression Tests', () => {
  describe('Preview', () => {
    it(
      'show open a modal window, if user clicks on an image',
      async () => {
        const nightmare = Nightmare(NIFFY_OPTIONS);

        await nightmare
          .goto(NIFFY_TEST_HOST)
          .wait(3000)
          .click('img')
          .wait(3000)
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

    describe('Preview perceptual diff test', () => {
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
        'Desktop: should open a modal window with an image',
        async () => {
          await co(function* () {
            return yield niffy.test('/', async (nightmare) => {
              await co(function* () {
                return yield nightmare
                  .wait(10000)
                  .click('img')
                  .wait(10000);
              });
            });
          });
        },
        ASYNC_CALLBACK_TIMEOUT,
      );

      it(
        'Mobile: should open a modal window with an image',
        async () => {
          await co(function* () {
            return yield niffy.test('/', async (nightmare) => {
              await co(function* () {
                return yield nightmare
                  .viewport(MOBILE_SCREEN_WIDTH, MOBILE_SCREEN_HEIGHT)
                  .wait(10000)
                  .click('img')
                  .wait(10000);
              });
            });
          });
        },
        ASYNC_CALLBACK_TIMEOUT,
      );
    });
  });
});
