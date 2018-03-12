import React, { Component } from 'react';
import glamorous from 'glamorous';
import { SIZE_RATIO } from '../../constants';

const Container = glamorous.div(
  {
    position: 'relative',
    margin: '2.5px',
    cursor: 'pointer',
    ':hover': {
      boxShadow: '1px 1px 1px #ccc',
    },
  },
  ({ height, width }) => {
    if (height && width) {
      const size = width * SIZE_RATIO / height;
      return {
        flexGrow: `${size}`,
        width: `${size}px`,
      };
    }
    return {};
  },
);

const Divider = glamorous.i(
  {
    display: 'block',
  },
  ({ height, width }) => {
    if (height && width) {
      const size = height / width * 100;
      return {
        paddingBottom: `${size}%`,
      };
    }
    return {};
  },
);

export default class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
    };
    this.img = null;
    this.onLoad = this.onLoad.bind(this);
    this.setRef = this.setRef.bind(this);
  }

  onLoad() {
    this.setState({
      width: this.img.naturalWidth || this.img.width,
      height: this.img.naturalHeight || this.img.height,
    });
  }

  setRef(img) {
    this.img = img;
  }

  render() {
    const { width, height } = this.state;
    const { src, title, onClick } = this.props;
    return (
      <Container onClick={onClick} width={width} height={height}>
        <Divider width={width} height={height} />
        <img
          src={src}
          alt={title}
          ref={this.setRef}
          onLoad={this.onLoad}
          style={{
            position: 'absolute',
            top: '0',
            width: '100%',
            verticalAlign: 'bottom',
          }}
        />
      </Container>
    );
  }
}
