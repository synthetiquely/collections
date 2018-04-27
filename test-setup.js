import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export const ASYNC_CALLBACK_TIMEOUT = 200000;
export const MOBILE_SCREEN_WIDTH = 375;
export const MOBILE_SCREEN_HEIGHT = 812;

export const NIFFY_BASE_HOST = 'https://synthetiquely.github.io/collections/';
export const NIFFY_TEST_HOST = 'http://127.0.0.1:3000';
export const NIFFY_OPTIONS = {
  show: false,
  threshold: 2, // maximum percentage difference of 2%
  waitTimeout: ASYNC_CALLBACK_TIMEOUT,
};
