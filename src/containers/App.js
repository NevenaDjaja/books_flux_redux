import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MainSection from '../components/MainSection';
import Header from '../components/Header';
import * as BookActions from '../actions';

class App extends Component {
  render() {
    const {books, actions} = this.props;
    return (
      <div>
        <Header addBook={actions.addBook} />
        <MainSection books={books} />
      </div>
    )
  } 
}

App.PropTypes = {
  books: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    books: state.books
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(BookActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);