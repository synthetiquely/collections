import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Button from '../Button';
import Spinner from '../Spinner';

describe('Button Component', () => {
  it('should render and match its own snapshot', () => {
    const wrapper = mount(<Button />);
    const tree = renderer.create(<Button />).toJSON();

    expect(wrapper).toHaveLength(1);
    expect(tree).toMatchSnapshot();
  });

  it('should render text passed as children to the component', () => {
    const wrapper = mount(<Button>test text</Button>);

    expect(wrapper.find('button').text()).toEqual(' test text');
  });

  it('should render a spinner, if loading is true', () => {
    const wrapper = mount(<Button loading>test text</Button>);

    expect(wrapper.find(Spinner)).toHaveLength(1);
  });
});
