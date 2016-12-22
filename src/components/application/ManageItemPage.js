import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as itemActions from '../../actions/itemActions';

export class ManageItemPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      item: Object.assign({}, props.item),
      errors: {},
      saving: false
    };

    this.updateItemState = this.updateItemState.bind(this);
    this.saveItem = this.saveItem.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.item.id != nextProps.item.id) {
      // Necessary to populate form when existing course is loaded directly.
      this.setState({course: Object.assign({}, nextProps.item)});
    }
  }

  updateItemState(event) {
    const field = event.target.name;
    let item = this.state.item;
    item[field] = event.target.value;
    return this.setState({item: item});
  }

  saveCourse(event) {
    event.preventDefault();

    this.setState({saving: true});

    this.props.actions.saveItem(this.state.item)
      .then(() => this.redirect())
      .catch(error => {
        this.setState({saving: false});
    });
  }

  redirect() {
    this.setState({saving: false});
    this.context.router.push('/');
  }

  render () {
    return (
      <div/>


    );
  }
}

ManageItemPage.propTypes = {
  actions: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
  saving: React.PropTypes.bool,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,

};

//Pull in the React Router context so router is available on this.context.router.
ManageItemPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  const courseId = ownProps.params.id; // from the path `/course/:id`
  let item = {id: '', title: '', category: ''};

  return {
    item: item
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(itemActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageItemPage);
