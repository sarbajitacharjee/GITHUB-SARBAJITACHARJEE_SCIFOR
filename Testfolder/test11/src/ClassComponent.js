import React, { Component } from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div style={{ border: '2px solid blue', padding: '20px', marginBottom: '20px' }}>
        <h2>Class Component</h2>
        <p>Counter Value: {this.state.counter}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement} style={{ marginLeft: '10px' }}>Decrement</button>
        
      </div>
    );
  }
}

export default ClassComponent;
