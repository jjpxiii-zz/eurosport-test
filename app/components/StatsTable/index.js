import React from 'react';
import PropTypes from 'prop-types';

import TableWithHeader from 'components/TableWithHeader';
import TableRow from 'components/TableRow';
import LoadingIndicator from 'components/LoadingIndicator';
import PlayerStatsItem from 'containers/PlayerStatsItem';

function StatsTable({ loading, error, data }) {
  if (loading) {
    return <TableWithHeader component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <TableRow item="Something went wrong, please try again!" />
    );
    return <TableWithHeader component={ErrorComponent} />;
  }

  if (data !== false) {
    return <TableWithHeader items={data} component={PlayerStatsItem} />;
  }

  return null;
}

StatsTable.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  data: PropTypes.any,
};

export default StatsTable;
