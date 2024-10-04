import React, { Component } from 'react';

class Comp1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lname: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = () => {
    if (this.state.name && this.state.lname) {
      this.props.onSubmit(this.state.name, this.state.lname);
    }
  };

  render() {
    return (
      <div className="container">
        <h1>Enter Your Details</h1>
        <input
          type="text"
          name="name"
          placeholder="First Name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          name="lname"
          placeholder="Last Name"
          value={this.state.lname}
          onChange={this.handleChange}
        />
        <br />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default Comp1;
