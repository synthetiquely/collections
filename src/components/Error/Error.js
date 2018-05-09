import React from 'react';
import { css } from 'glamor';
import Link from '../styled/Link';

const backgroundStyles = css({
  zIndex: '13',
  position: 'absolute',
  height: '100%',
  width: '100%',
  top: '0',
  left: '0',
  backgroundImage:
    "url('http://cdn.themehelite.com/themeforest/404rpz/img/slide-2.jpg')",
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
});

const errorContainerStyles = css({
  zIndex: '14',
  position: 'fixed',
  background: 'rgba(32,35,45,0.75)',
  left: '0',
  top: '0',
  width: '100%',
  height: '100%',
  transition: 'all 0.3s cubic-bezier(0,0,0.58,1)',
});

const errorContentStyles = css({
  zIndex: '15',
  position: 'absolute',
  left: '0',
  top: '50vh',
  width: '100%',
  transition: 'all 0.3s cubic-bezier(0,0,0.58,1)',
  transform: 'translateY(-50%)',
  textAlign: 'center',
});

const titleStyles = css({
  fontSize: '70px',
  fontFamily: 'Lato, sans-serif',
  fontWeight: '700',
  color: '#fff',
});

const subtitleStyles = css({
  margin: '0 0 30px',
  fontSize: '22px',
  fontWeight: '400',
  color: '#fff',
});

export default () => (
  <div {...backgroundStyles}>
    <div {...errorContainerStyles}>
      <div {...errorContentStyles}>
        <h1 {...titleStyles}>Ошибка</h1>
        <h2 {...subtitleStyles}>
          Похоже, что произошла ошибка. Попробуйте перезагрузить страницу.
        </h2>
        <div>
          <Link
            inverted
            href="https://github.com/synthetiquely/collections/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            Сообщить об ошибке
          </Link>
        </div>
      </div>
    </div>
  </div>
);
