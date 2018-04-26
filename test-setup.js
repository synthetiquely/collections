import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export const NIFFY_BASE_HOST = 'https://synthetiquely.github.io/collections/';
export const NIFFY_TEST_HOST = 'http://127.0.0.1:3000';
export const NIFFY_OPTIONS = {
  show: false,
};
export const ASYNC_CALLBACK_TIMEOUT = 200000;
