import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Footer.scss';

function Footer({
  getYear,
}) {
  return (
    <p className="Footer">
      Made with
      {' '}
      <span>♥</span>
      {' '}
      by:
      {' '}
      <a href="https://www.linkedin.com/in/aysllan-ferreira-61aa58228/" target="_blank" rel="noreferrer">Aysllan Ferreira</a>
      <br />
      {getYear}
    </p>
  );
}

Footer.propTypes = {
  getYear: PropTypes.number.isRequired,
};

export default Footer;
