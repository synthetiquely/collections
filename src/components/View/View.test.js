import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import View from './View';
import ImageContainer from './ImageContainer';
import { SIZE_RATIO } from '../../constants';

describe('View Component', () => {
  const props = {
    image: {
      height: 300,
      width: 250,
      color: 'red',
      src:
        'https://n6-img-fp.akamaized.net/free-vector/abstract-gray-background-with-lines_1108-73.jpg?size=338&ext=jpg',
      description: 'Test Image',
    },
    onClick: jest.fn(),
  };
  it('should render and match its own snapshot', () => {
    const wrapper = mount(<View {...props} />);
    const tree = renderer.create(<View {...props} />).toJSON();

    expect(wrapper).toHaveLength(1);
    expect(tree).toMatchSnapshot();
  });

  it('should calculate size based on width and height of an image', () => {
    const wrapper = mount(<View {...props} />);
    const size = Math.round(props.image.width / props.image.height * SIZE_RATIO);

    expect(wrapper.state('size')).toEqual(size);
  });

  it('should handle click event', () => {
    const wrapper = mount(<View {...props} />);

    wrapper.find(ImageContainer).simulate('click');

    expect(props.onClick).toHaveBeenCalled();
  });
  it("should pass color to a container if can'not load an image", () => {
    const wrapper = mount(<View {...props} />);
    wrapper.setState({
      errored: true,
    });

    expect(wrapper.find(ImageContainer).props()).toHaveProperty(
      'color',
      props.image.color,
    );
  });
});
