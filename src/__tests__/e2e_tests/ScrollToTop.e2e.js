import Nightmare from 'nightmare';
import {
  NIFFY_TEST_HOST,
  NIFFY_OPTIONS,
  ASYNC_CALLBACK_TIMEOUT,
} from '../../../test-setup';

describe('Scroll To Top', () => {
  it(
    'should show scroll to top component, if user scrolls down a little bit',
    async () => {
      const nightmare = Nightmare(NIFFY_OPTIONS);

      await nightmare
        .goto(NIFFY_TEST_HOST)
        .wait(5000)
        .scrollTo(500, 0)
        .wait('#scroll-to-top')
        .exists('#scroll-to-top')
        .visible('#scroll-to-top')
        .end()
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.error(`An error has occurred: ${error}`);
        });
    },
    ASYNC_CALLBACK_TIMEOUT,
  );

  it(
    'should return to top, if clicked on scroll to top component',
    async () => {
      const nightmare = new Nightmare(NIFFY_OPTIONS);

      await nightmare
        .goto(NIFFY_TEST_HOST)
        .wait(10000)
        .scrollTo(500, 0)
        .wait('#scroll-to-top')
        .click('#scroll-to-top')
        .wait(1000)
        .evaluate(() => document.documentElement.scrollTop)
        .end()
        .then((currentScollPosition) => {
          expect(currentScollPosition).toEqual(0);
        })
        .catch(error => console.log(error));
    },
    ASYNC_CALLBACK_TIMEOUT,
  );
});
