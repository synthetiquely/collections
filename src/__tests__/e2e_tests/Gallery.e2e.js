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
  let niffy;

  describe('Gallery', () => {
    beforeAll(() => {
      niffy = new Niffy(NIFFY_BASE_HOST, NIFFY_TEST_HOST, NIFFY_OPTIONS);
    });

    afterAll(async () => {
      await co(function* () {
        return yield niffy.end();
      });
    });

    describe('Gallery perceptual diff test', () => {
      it(
        'Desktop: should display a grid with images',
        async () => {
          await co(function* () {
            return yield niffy.test('/', async (nightmare) => {
              await co(function* () {
                return yield nightmare.wait(3000);
              });
            });
          });
        },
        ASYNC_CALLBACK_TIMEOUT,
      );

      it(
        'Mobile: should display a grid with images',
        async () => {
          await co(function* () {
            return yield niffy.test('/', async (nightmare) => {
              await co(function* () {
                return yield nightmare
                  .viewport(MOBILE_SCREEN_WIDTH, MOBILE_SCREEN_HEIGHT)
                  .wait(3000);
              });
            });
          });
        },
        ASYNC_CALLBACK_TIMEOUT,
      );
    });
  });
});
