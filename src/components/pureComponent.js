import React, { PureComponent } from 'react';

class pureComponent extends PureComponent {
  state = {
    name: 'Vadim',
  };

  render() {
    console.log('render');
    return (
      <>
        <h3>{this.state.name}</h3>
        <button onClick={() => this.setState({ name: 'David' })}>Click</button>
      </>
    );
  }
}

export default pureComponent;
