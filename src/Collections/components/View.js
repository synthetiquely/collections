import React, { Component } from 'react';
import glamorous from 'glamorous';

// const Container = glamorous.div(
//   {
//     // display: 'flex',
//     // flexDirection: 'column',
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     ':hover': {
//       boxShadow: '1px 1px 1px #ccc',
//     },
//     cursor: 'pointer',
//   },
//   ({ size }) => {
//     if (size === 'large') {
//       return {
//         gridColumn: 'span 3',
//         gridRow: 'span 1',
//       };
//     } else if (size === 'medium') {
//       return {
//         gridColumn: 'span 2',
//         gridRow: 'span 1',
//       };
//     }
//     return {
//       gridColumn: 'span 1',
//       gridRow: 'span 1',
//     };
//   },
// );

const Image = glamorous.img(
  {
    minWidth: '100%',
    maxHeight: '150px',
    objectFit: 'cover',
  },
  // ({ imageLoaded }) => {
  //   if (!imageLoaded) {
  //     return {
  //       backgroundRepeat: 'no-repeat',
  //       backgroundImage: 'linear-gradient(to right, #ffdb4d, #ffe78c)',
  //       backgroundSize: '100%, 100%',
  //       backgroundPosition: '0 0',
  //     };
  //   }
  //   return {};
  // },
  ({ size }) => {
    if (size === 'large') {
      return {
        gridColumn: 'span 3',
        gridRow: 'span 1',
      };
    } else if (size === 'medium') {
      return {
        gridColumn: 'span 2',
        gridRow: 'span 1',
      };
    }
    return {
      gridColumn: 'span 1',
      gridRow: 'span 1',
    };
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
      title, src, size, onClick,
    } = this.props;

    return (
      <Image
        size={size}
        src={src}
        alt={title}
        onClick={onClick}
        onLoad={() => this.onLoad(true)}
        imageLoaded={this.state.imageLoaded}
      />
    );
  }
}
