/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedNumber } from 'react-intl';

import Img from 'components/Img';
import TableRow from 'components/TableRow';
import CountryIcon from './CountryIcon';

export function PlayerStatsItem(props) {
  const { item } = props;

  let country = null;
  if (item && item.country) {
    country = (
      <td>
        <CountryIcon src={item.country.picture} alt={`${item.country.code}`} />
      </td>
    );
  }

  let data = null;
  if (item && item.data) {
    const last5wins = item.data.last.reduce((acc, val) => acc + val, 0);
    const last5defeats = 5 - last5wins;
    data = (
      <Fragment>
        <td>{item.data.rank}</td>
        <td>{item.data.points}</td>
        <td>{item.data.height}</td>
        <td>
          <FormattedNumber value={item.data.weight / 1000} />
        </td>
        <td>{item.data.age}</td>
        <td>
          {last5wins}W {last5defeats}L
        </td>
      </Fragment>
    );
  }
  let content;
  // Put together the content of the repository
  if (item && item.picture && item.firstname && item.lastname) {
    content = (
      <Fragment>
        <td>
          <Img src={item.picture} alt={`${item.firstname} ${item.lastname}`} />
        </td>
        {country}
        <td>
          {item.firstname} {item.lastname}
        </td>
        {data}
      </Fragment>
    );
  }
  // Render the content into a list item
  return (
    <TableRow
      key={`repo-list-item-${item ? item.shortname : ''}`}
      item={content}
    />
  );
}

PlayerStatsItem.propTypes = {
  item: PropTypes.object,
};

export default connect()(PlayerStatsItem);
