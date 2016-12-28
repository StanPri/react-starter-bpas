import React, {PropTypes} from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import {connect} from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header
          loading={this.props.loading}
        />
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};


//Updates fetch async status
function mapStateToProps(state, ownProps){
  return { loading: state.fetchCallsInProgress > 0 };
}

export default connect(mapStateToProps)(App);
