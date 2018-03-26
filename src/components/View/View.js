import React, { Component } from 'react';
import ImageContainer from './ImageContainer';
import Image from './Image';

class View extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
    this.width = 0;
    this.height = 0;
    this.onLoad = this.onLoad.bind(this);
    this.onError = this.onError.bind(this);
  }

  onLoad(event) {
    /**
     * Due to the fact that img width and height will be known in advance
     * as soon as we bring API to our app,
     * we could remove this lines of code.
     */
    this.width = event.target.naturalWidth || event.target.width;
    this.height = event.target.naturalHeight || event.target.height;
    this.setState({
      loaded: true,
    });
  }

  // @TODO: handle error case
  onError() {}

  render() {
    const { src, title, onClick } = this.props;

    return (
      <ImageContainer onClick={onClick} width={this.width} height={this.height}>
        <Image
          src={src}
          alt={title}
          loaded={this.state.loaded}
          onLoad={this.onLoad}
          onError={this.onError}
        />
      </ImageContainer>
    );
  }
}

export default View;
