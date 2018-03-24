import React, { Component } from 'react';
import glamorous from 'glamorous';
import { SIZE_RATIO } from '../../constants';

const ImageContainer = glamorous.div(
  {
    margin: '2.5px',
    cursor: 'pointer',
    willChange: 'width, flexGrow',
    ':hover': {
      boxShadow: '1px 1px 1px #ccc',
    },
  },
  ({ height, width }) => {
    if (height && width) {
      const size = Math.floor(width * SIZE_RATIO / height);

      return {
        flexGrow: `${size}`,
        width: `${size}px`,
      };
    }
    return {};
  },
);

const Image = glamorous.img(
  {
    opacity: '0',
    width: '100%',
    verticalAlign: 'bottom',
    willChange: 'opacity',
    transition: 'opacity 2s',
  },
  ({ loaded }) => {
    if (loaded) {
      return {
        opacity: '1',
      };
    }
    return {};
  },
);

export default class View extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
    this.width = 0;
    this.height = 0;
    this.img = null;
    this.onLoad = this.onLoad.bind(this);
    this.onError = this.onError.bind(this);
    this.setRef = this.setRef.bind(this);
  }

  onLoad() {
    /**
     * Due to the fact that img width and height will be known in advance
     * as soon as we bring API to our app,
     * we could remove this lines of code.
     */
    this.width = this.img.naturalWidth || this.img.width;
    this.height = this.img.naturalHeight || this.img.height;
    this.setState({
      loaded: true,
    });
  }

  // @TODO: handle error case
  onError() {}

  setRef(img) {
    this.img = img;
  }

  render() {
    const { src, title, onClick } = this.props;

    return (
      <ImageContainer onClick={onClick} width={this.width} height={this.height}>
        <Image
          src={src}
          alt={title}
          innerRef={this.setRef}
          loaded={this.state.loaded}
          onLoad={this.onLoad}
          onError={this.onError}
        />
      </ImageContainer>
    );
  }
}
