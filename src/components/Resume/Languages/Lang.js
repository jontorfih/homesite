import React from 'react';
import PropTypes from 'prop-types';

const Lang = ({ data }) => (
  <article className="lang-container">
    <header>
      <h4 className="Language">{data.Language}</h4>
      <p className="Level">{data.Level}</p>
    </header>
  </article>
);

Lang.propTypes = {
  data: PropTypes.shape({
    Language: PropTypes.string.isRequired,
    Level: PropTypes.string.isRequired,
  }).isRequired,
};

export default Lang;
