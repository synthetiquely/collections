import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Preview from './Preview';
import Modal from '../Modal/Modal';
import Image from '../styled/Image';
import Tooltip from '../styled/Tooltip';

describe('Preview Component', () => {
  const props = {
    collections: {
      selectedPhoto: {
        height: 300,
        width: 250,
        color: 'red',
        fullsrc:
          'https://n6-img-fp.akamaized.net/free-vector/abstract-gray-background-with-lines_1108-73.jpg?size=338&ext=jpg',
        description: 'Test Image',
        url: 'url',
        user: {
          username: 'test user',
        },
      },
      slideNext: jest.fn(),
      clearSelection: jest.fn(),
    },
  };
  it('should render and match its own snapshot', () => {
    const wrapper = mount(<Preview {...props} />);
    const tree = renderer.create(<Preview {...props} />).toJSON();

    expect(wrapper).toHaveLength(1);
    expect(tree).toMatchSnapshot();
  });

  it('should render an image, if there is a seleted photo in the store', () => {
    const wrapper = mount(<Preview {...props} />);

    expect(wrapper.find(Modal)).toHaveLength(1);
    expect(wrapper.find(Image)).toHaveLength(1);
    expect(wrapper.find(Image).props()).toHaveProperty(
      'src',
      props.collections.selectedPhoto.fullsrc,
    );
    expect(wrapper.find(Tooltip)).toHaveLength(1);
  });

  it('should render nothing, if there is no seleted photo', () => {
    const testProps = {
      ...props,
      collections: {
        ...props.collections,
        selectedPhoto: null,
      },
    };
    const wrapper = mount(<Preview {...testProps} />);

    expect(wrapper.find(Modal)).toHaveLength(0);
  });
});
