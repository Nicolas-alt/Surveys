import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const CustomHelmet = ({ titlePage }) => {
  return (
    <Helmet>
      <title>{titlePage}</title>
    </Helmet>
  );
};

CustomHelmet.propTypes = {
  titlePage: PropTypes.string.isRequired,
};

export default CustomHelmet;
