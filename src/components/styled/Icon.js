import glamorous from 'glamorous';

const Icon = glamorous.span(
  {
    fontSize: '20px',
    transition: '0.6s ease',
  },
  ({ size, rotatable }) => {
    const styles = {};
    if (size === 'sm') {
      styles.transform = 'scale(0.9)';
    } else if (size === 'md') {
      styles.transform = 'scale(1.1)';
    } else if (size === 'lg') {
      styles.fontSize = '28px';
    }
    if (rotatable) {
      styles['@media (orientation: portrait)'] = {
        transform: 'rotateZ(90deg)',
      };
    }
    return styles;
  },
);

export default Icon;
