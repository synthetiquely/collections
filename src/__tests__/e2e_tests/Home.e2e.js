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
  describe('Home Page', () => {
    beforeAll(() => {
      niffy = new Niffy(NIFFY_BASE_HOST, NIFFY_TEST_HOST, NIFFY_OPTIONS);
    });

    afterAll(async () => {
      await co(function* () {
        return yield niffy.end();
      });
    });

    describe('Home Page perceptual diff test', () => {
      it(
        'should display search header, content body and footer',
        async () => {
          await co(function* () {
            return yield niffy.test('/');
          });
        },
        ASYNC_CALLBACK_TIMEOUT,
      );
    });
  });
});
