import React, { Component } from 'react';
import glamorous from 'glamorous';

const Container = glamorous.div(
  {
    cursor: 'pointer',
    ':hover': {
      boxShadow: '1px 1px 1px #ccc',
    },
  },
  ({ layout }) => {
    if (layout === 'google') {
      return {
        flexGrow: '1',
        maxHeight: '300px',
        margin: '2.5px',
      };
    } else if (layout === 'instagram') {
      return {
        gridColumn: 'span 2',
        gridRow: 'span 2',
      };
    }
    return {};
  },
);

const Image = glamorous.img(
  {
    objectFit: 'cover',
  },
  ({ imageLoaded, layout }) => {
    if (!imageLoaded) {
      return {
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'linear-gradient(to right, #ffdb4d, #ffe78c)',
        backgroundSize: '100%, 100%',
        backgroundPosition: '0 0',
      };
    }
    if (layout === 'google') {
      return {
        maxWidth: '100%',
        minWidth: '100%',
        maxHeight: '300px',
      };
    } else if (layout === 'instagram') {
      return {
        width: '100%',
        height: '100%',
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
      title, src, onClick, layout,
    } = this.props;

    return (
      <Container layout={layout} onClick={onClick}>
        <Image
          onLoad={() => this.onLoad(true)}
          src={src}
          alt={title}
          imageLoaded={this.state.imageLoaded}
          layout={layout}
        />
      </Container>
    );
  }
}
