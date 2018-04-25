import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Views from './Views';
import NoData from '../NoData/NoData';
import View from '../View/View';

describe('Views Component', () => {
  const props = {
    images: [
      {
        id: '1',
        height: 300,
        width: 250,
        color: 'red',
        src:
          'https://n6-img-fp.akamaized.net/free-vector/abstract-gray-background-with-lines_1108-73.jpg?size=338&ext=jpg',
        description: 'Test Image 1',
      },
      {
        id: '2',
        height: 333,
        width: 253,
        color: 'red',
        src:
          'https://n6-img-fp.akamaized.net/free-vector/abstract-gray-background-with-lines_1108-73.jpg?size=338&ext=jpg',
        description: 'Test Image 2',
      },
      {
        id: '3',
        height: 444,
        width: 254,
        color: 'red',
        src:
          'https://n6-img-fp.akamaized.net/free-vector/abstract-gray-background-with-lines_1108-73.jpg?size=338&ext=jpg',
        description: 'Test Image 3',
      },
    ],
    onClick: jest.fn(),
    loadItems: jest.fn(),
    isLoading: false,
    isOpen: false,
  };
  it('should render and match its own snapshot', () => {
    const wrapper = mount(<Views {...props} />);
    const tree = renderer.create(<Views {...props} />).toJSON();

    expect(wrapper).toHaveLength(1);
    expect(tree).toMatchSnapshot();
  });

  it('should render No Data component if there are no images', () => {
    const testProps = {
      ...props,
      images: [],
    };
    const wrapper = mount(<Views {...testProps} />);

    expect(wrapper.find(NoData)).toHaveLength(1);
  });

  it('should render view components', () => {
    const wrapper = mount(<Views {...props} />);

    expect(wrapper.find(View)).toHaveLength(props.images.length);
  });
});
