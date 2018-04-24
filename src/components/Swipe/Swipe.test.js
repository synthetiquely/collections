import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Swipe from './Swipe';

describe('Swipe Component', () => {
  it('should render and match its own snapshot', () => {
    const wrapper = mount(<Swipe />);
    const tree = renderer.create(<Swipe />).toJSON();

    expect(wrapper).toHaveLength(1);
    expect(tree).toMatchSnapshot();
  });

  it('should evoke onSwipe method passed as a props to the component', () => {
    const onSwipe = jest.fn();
    const wrapper = mount(<Swipe onSwipe={onSwipe} />);
    const direction = 'up';

    wrapper.instance().handleSwipe(direction);

    expect(onSwipe).toHaveBeenCalledWith(direction);
  });
});
