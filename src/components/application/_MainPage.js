import React, {PropTypes} from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as mainPageActions from '../../actions/mainPageActions';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item:{ name: "" }
    };
    this.onClickSave = this.onClickSave.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
  }

  onNameChange(event) {
      const item = this.state.item;
      item.name = event.target.value;
      this.setState({item: item});
  }

  onClickSave() {
    this.props.actions.createItem(this.state.item);
  }

  itemRow(item, index) {
    return <div key={index}>{item.name}</div>;
  }

  render() {
    return (
      <div>
        <h1>Items</h1>
        {this.props.items.map(this.itemRow)}
        <h2>Add Items</h2>
        <input
          type="text"
          onChange={this.onNameChange}
          value={this.state.item.name} />

        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave} />
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
