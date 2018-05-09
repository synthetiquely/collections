import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import ScrollToTop from './ScrollToTop';
import Button from '../styled/Button';

describe('ScrollToTop Component', () => {
  it('should render and match its own snapshot', () => {
    const wrapper = mount(<ScrollToTop />);
    const tree = renderer.create(<ScrollToTop />).toJSON();

    expect(wrapper).toHaveLength(1);
    expect(tree).toMatchSnapshot();
  });

  it('should render nothing, if show props is false', () => {
    const wrapper = mount(<ScrollToTop />);

    expect(wrapper.find(Button)).toHaveLength(0);
  });

  it('should render a button, if show props is true', () => {
    const wrapper = mount(<ScrollToTop show />);
    wrapper.setState({ show: true });

    expect(wrapper.find(Button)).toHaveLength(1);
  });
});
