import React, { Component } from 'react';
import { connect } from 'react-redux';
import { moviewList } from '../store/actions';

class Home extends Component {
  getMoviesHandler() {
    this.props.dispatch(moviewList());
  }

  render() {
    console.log(this.ptops);
    return (
      <>
        <button onClick={() => this.getMoviesHandler()}>Get movies</button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { moviews: state.movies };
};

export default connect(mapStateToProps)(Home);
