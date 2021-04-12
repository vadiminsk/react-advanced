import React, { Component } from 'react';
import { connect } from 'react-redux';
import { moviewList } from '../store/actions';

class Home extends Component {
  getMoviesHandler() {
    this.props.dispatch(moviewList());
  }

  render() {
    return (
      <>
        <button onClick={() => this.getMoviesHandler()}>Get movies</button>
      </>
    );
  }
}

export default connect()(Home);
