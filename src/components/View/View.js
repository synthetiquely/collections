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
      const size = width * SIZE_RATIO / height;

      return {
        flexGrow: `${size}`,
        width: `${size}px`,
      };
    }
    return {};
  },
);

const Image = glamorous.img({
  width: '100%',
  verticalAlign: 'bottom',
});

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
    this.props.onChangeLoading();
  }

  setRef(img) {
    this.img = img;
  }

  render() {
    const { width, height } = this.state;
    const { src, title, onClick } = this.props;
    return (
      <Container onClick={onClick} width={width} height={height}>
        <Image
          src={src}
          alt={title}
          innerRef={this.setRef}
          onLoad={this.onLoad}
        />
      </Container>
    );
  }
}
