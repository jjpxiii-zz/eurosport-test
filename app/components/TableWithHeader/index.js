/* eslint-disable react/no-typos */
import React from 'react';
import PropTypes from 'prop-types';

import Table from './Table';
import Thead from './Thead';
import Wrapper from './Wrapper';

const firstThStyle = {
  width: '110px',
};
function TableWithHeader(props) {
  const ComponentToRender = props.component;
  let content = null;

  // If we have items, render them
  if (props.items) {
    content = props.items.map(item => (
      <ComponentToRender
        key={`item-${item.shortname}-${item.country}`}
        item={item}
      />
    ));
  } else {
    // Otherwise render a single component
    return (
      <Wrapper>
        <ComponentToRender />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Table>
        <Thead>
          <tr>
            <th style={firstThStyle} />
            <th>Country</th>
            <th>Name</th>
            <th>Rank</th>
            <th>Points</th>
            <th>Height (cms)</th>
            <th>Weight (kgs)</th>
            <th>Age</th>
            <th>Last 5 matches</th>
          </tr>
        </Thead>
        <tbody>{content}</tbody>
      </Table>
    </Wrapper>
  );
}

TableWithHeader.propTypes = {
  component: PropTypes.elementType.isRequired,
  items: PropTypes.array,
};

export default TableWithHeader;
