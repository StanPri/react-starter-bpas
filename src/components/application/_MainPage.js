import React, {PropTypes} from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as itemActions from '../../actions/itemActions';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item : {
        id: "",
        title: ""
      }
    },
    this.saveItem = this.saveItem.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  itemRow(item, index) {
    return <div key={index}>{item.title}</div>;
  }

  saveItem(event) {
    event.preventDefault();
    const item = this.state.item;
    item.id = Math.random();
    this.setState({item: item});
    this.props.actions.saveItem(this.state.item);
  }

  onChange(event) {
      const item = this.state.item;
      item.title = event.target.value;
      this.setState({item: item});
  }

  render() {
    return (
      <div>
        <h1>New item</h1>
        <input type = "text"
            label = "Title"
            onChange = {this.onChange}/>

        <input type = "submit"
            value = "Add Item"
            id = "btnSave"
            className = "btn btn-primary"
            onClick = {this.saveItem}
            onKeyPress = {this.saveItem} />

        <br/>

        <h3>Items</h3>
        {this.props.items.map(this.itemRow)}
        <br/>

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
      actions: bindActionCreators(itemActions, dispatch)
    };
  }

MainPage.propTypes = {
  actions: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
