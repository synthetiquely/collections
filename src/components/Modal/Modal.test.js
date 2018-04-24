import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Modal from './Modal';
import Backdrop from '../styled/Backdrop';
import ModalWindow from '../styled/ModalWindow';
import ModalContent from '../styled/ModalContent';
import ArrowButton from '../styled/ArrowButton';
import CloseButton from '../styled/CloseButton';

describe('Modal Component', () => {
  it('should render and match its own snapshot', () => {
    const wrapper = mount(<Modal />);
    const tree = renderer.create(<Modal />).toJSON();

    expect(wrapper).toHaveLength(1);
    expect(tree).toMatchSnapshot();
    expect(wrapper.find(Backdrop)).toHaveLength(1);
    expect(wrapper.find(ModalWindow)).toHaveLength(1);
    expect(wrapper.find(ModalContent)).toHaveLength(1);
    expect(wrapper.find(ArrowButton)).toHaveLength(2);
    expect(wrapper.find(CloseButton)).toHaveLength(1);
  });
});
