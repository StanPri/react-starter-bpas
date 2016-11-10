import React, { PropTypes } from 'react';
import Pagination from 'react-bootstrap/lib/Pagination';

class PageNumbers extends React.Component {
  render () {
    return (
      <div className="text-center">
        <Pagination prev next items={5} maxButtons={5} bsSize="large"/>
      </div>
    );
  }
}

PageNumbers.propTypes = {
};

export default PageNumbers;
