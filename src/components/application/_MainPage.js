import React, {PropTypes} from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as mainPageActions from '../../actions/mainPageActions';

class MainPage extends React.Component {
  constructor(props) {
    super(props);

  }

  itemRow(item, index) {
    return <div key={index}>{item.title}</div>;
  }

  render() {
    return (
      <div>
        <h1>Items</h1>
        {this.props.items.map(this.itemRow)}
      </div>
      );
    }
}

  function mapStateToProps(state, ownProps) {
    return {
      items: state.items
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(mainPageActions, dispatch)
    };
  }

MainPage.propTypes = {
  actions: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
