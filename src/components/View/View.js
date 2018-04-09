import React, { Component } from 'react';
import { observer } from 'mobx-react';
import ImageContainer from './ImageContainer';
import Image from '../styled/Image';
import { SIZE_RATIO } from '../../constants';

@observer
class View extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.image.height && nextProps.image.width) {
      const size = Math.floor(nextProps.image.width / nextProps.image.height * SIZE_RATIO);

      if (size !== prevState.size) {
        return {
          size,
        };
      }
    }

    return null;
  }

  constructor(props) {
    super(props);
    this.state = { size: 0, loaded: false, errored: false };
    this.onLoad = this.onLoad.bind(this);
    this.onError = this.onError.bind(this);
  }

  onLoad() {
    this.setState({
      loaded: true,
    });
  }

  onError() {
    this.setState({
      errored: true,
    });
  }

  render() {
    const { size, loaded, errored } = this.state;

    return (
      <ImageContainer
        size={size}
        color={errored && this.props.image.color}
        onClick={this.props.onClick}
      >
        <Image
          src={this.props.image.src}
          alt={this.props.image.description}
          loaded={loaded}
          onLoad={this.onLoad}
          onError={this.onError}
        />
      </ImageContainer>
    );
  }
}

export default View;
