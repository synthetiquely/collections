import React, { Component } from 'react';
import { observer } from 'mobx-react';
import ImageContainer from './ImageContainer';
import Image from './Image';

@observer
class View extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false, errored: false };
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
    const { image, onClick } = this.props;

    return (
      <ImageContainer
        onClick={onClick}
        width={image.width}
        height={image.height}
        color={this.state.errored && image.color}
      >
        <Image
          src={image.src}
          alt={image.description}
          loaded={this.state.loaded}
          onLoad={this.onLoad}
          onError={this.onError}
        />
      </ImageContainer>
    );
  }
}

export default View;
