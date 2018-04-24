import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Spinner, { Overlay } from '../Spinner';

describe('Spinner Component', () => {
  it('should render and match its own snapshot', () => {
    const wrapper = mount(<Spinner />);
    const tree = renderer.create(<Spinner />).toJSON();

    expect(wrapper).toHaveLength(1);
    expect(tree).toMatchSnapshot();
  });

  it('should render Overlay component, if overlayed is true', () => {
    const wrapper = mount(<Spinner overlayed />);

    expect(wrapper.find(Overlay)).toHaveLength(1);
  });
});
