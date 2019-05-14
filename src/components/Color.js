import React from 'react';
import PropTypes from 'prop-types';

const colorStyle = {
  display: 'inline-block',
  backgroundColor: hex,
  width: '0.8em',
  height: '0.8em'
};

export default function Colors({ name, hex, rbg }) {
  return (
    <dl>
      <dt>Name</dt>
      <dd>{name || hex}<div style={colorStyle}></div></dd>

      <dt>Hex</dt>
      <dd>{hex}</dd>

      <dt>Red</dt>
      <dd>
        <p>Red - {rbg.red}</p>
        <p>Green - {rbg.green}</p>
        <p>Blue - {rbg.blue}</p>
      </dd>
    </dl>
  );
}
Colors.propTypes = {
  name: PropTypes.string,
  hex: PropTypes.string.isRequired,
  rgb: PropTypes.shape({
    red: PropTypes.number.isRequired,
    green: PropTypes.number.isRequired,
    blue: PropTypes.number.isRequired
  })
};

