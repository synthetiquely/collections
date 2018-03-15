import React, { Component } from 'react';
import glamorous from 'glamorous';
import { SIZE_RATIO } from '../../constants';

const Container = glamorous.div(
  {
    margin: '2.5px',
    cursor: 'pointer',
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
    transition: 'opacity 1s',
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
    this.width = 0;
    this.height = 0;
    this.img = null;
    this.onLoad = this.onLoad.bind(this);
    this.setRef = this.setRef.bind(this);
  }

  onLoad() {
    this.width = this.img.naturalWidth || this.img.width;
    this.height = this.img.naturalHeight || this.img.height;
    this.props.onChangeLoading();
  }

  setRef(img) {
    this.img = img;
  }

  render() {
    const {
      src, title, loaded, onClick,
    } = this.props;

    return (
      <Container onClick={onClick} width={this.width} height={this.height}>
        <Image
          src={src}
          alt={title}
          innerRef={this.setRef}
          loaded={loaded}
          onLoad={this.onLoad}
        />
      </Container>
    );
  }
}
