import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';

function TableRow(props) {
  return <Wrapper>{props.item}</Wrapper>;
}

TableRow.propTypes = {
  item: PropTypes.any,
};

export default TableRow;
