import React, { Component } from 'react';
import glamorous from 'glamorous';

const Container = glamorous.div(
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    ':hover': {
      boxShadow: '1px 1px 1px #ccc',
    },
    cursor: 'pointer',
  },
  ({ orientation }) => {
    if (orientation === 'landscape') {
      return {
        gridColumn: 'span 2',
      };
    } else if (orientation === 'portrait') {
      return {
        gridRow: 'span 2',
      };
    }
    return {
      gridColumn: 'span 2',
      gridRow: 'span 2',
    };
  },
);

const Image = glamorous.img(
  {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  ({ imageLoaded }) => {
    if (!imageLoaded) {
      return {
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'linear-gradient(to right, #ffdb4d, #ffe78c)',
        backgroundSize: '100%, 100%',
        backgroundPosition: '0 0',
      };
    }
    return {};
  },
);
export default class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageLoaded: false,
    };
  }

  onLoad(status) {
    this.setState({
      imageLoaded: status,
    });
  }

  render() {
    const {
      title, src, orientation, onClick,
    } = this.props;

    return (
      <Container orientation={orientation} onClick={onClick}>
        <Image
          onLoad={() => this.onLoad(true)}
          src={src}
          alt={title}
          imageLoaded={this.state.imageLoaded}
        />
      </Container>
    );
  }
}
