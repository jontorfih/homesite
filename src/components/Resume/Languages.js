import React from 'react';
import PropTypes from 'prop-types';

import Lang from './Languages/Lang';

const Languages = ({ data }) => (
  <div className="Languages">
    <div className="link-to" id="languages" />
    <div className="title">
      <h3>Languages</h3>
    </div>
    {data.map((Langs) => (
      <Lang
        data={Langs}
        key={Langs.Language}
      />
    ))}
  </div>
);

Languages.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    Language: PropTypes.string,
    Level: PropTypes.number,
  })),
};

Languages.defaultProps = {
  data: [],
};

export default Languages;
