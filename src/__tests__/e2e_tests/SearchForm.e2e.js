import Niffy from 'niffy';
import co from 'co';
import {
  NIFFY_BASE_HOST,
  NIFFY_TEST_HOST,
  NIFFY_OPTIONS,
  ASYNC_CALLBACK_TIMEOUT,
} from '../../../test-setup';

describe('Visual Regression Tests', () => {
  let niffy;
  describe('Search Form', () => {
    beforeAll(() => {
      niffy = new Niffy(NIFFY_BASE_HOST, NIFFY_TEST_HOST, NIFFY_OPTIONS);
    });

    afterAll(async () => {
      await co(function* () {
        return yield niffy.end();
      });
    });

    describe('Search form perceptual diff test', () => {
      it(
        'should display cats',
        async () => {
          await co(function* () {
            return yield niffy.test('/', async (nightmare) => {
              await co(function* () {
                return yield nightmare
                  .type('input', 'cats')
                  .click('button[type="submit"]')
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
});
