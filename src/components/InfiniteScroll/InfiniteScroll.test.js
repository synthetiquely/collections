import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import InfiniteScroll from './InfiniteScroll';

describe('InfiniteScroll Component', () => {
  it('should render and match its own snapshot', () => {
    const wrapper = mount(<InfiniteScroll />);
    const tree = renderer.create(<InfiniteScroll />).toJSON();

    expect(wrapper).toHaveLength(1);
    expect(tree).toMatchSnapshot();
  });

  it('should evoke loadMore method passed as a props to the component', () => {
    const loadMore = jest.fn();
    const wrapper = mount(<InfiniteScroll loadMore={loadMore} />);

    wrapper.instance().loadMore();

    expect(loadMore).toHaveBeenCalled();
  });
});
