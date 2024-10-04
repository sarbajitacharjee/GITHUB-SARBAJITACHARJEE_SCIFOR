import React, { Component } from 'react';

class Comp2 extends Component {
  render() {
    const { name, lname, isVisible } = this.props;

    return (
      <div className={isVisible ? 'visible' : 'hidden'}>
        <h2>Your Entered Data</h2>
        <p><strong>First Name:</strong> {name ? name : 'N/A'}</p>
        <p><strong>Last Name:</strong> {lname ? lname : 'N/A'}</p>
      </div>
    );
  }
}

export default Comp2;
