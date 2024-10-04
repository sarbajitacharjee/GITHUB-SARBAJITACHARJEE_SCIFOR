import React, { Component } from 'react';
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';
import './App.css'; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lname: '',
      isSubmitted: false
    };
  }

  handleUserSubmit = (name, lname) => {
    this.setState({
      name,
      lname,
      isSubmitted: true
    });
  };

  render() {
    return (
      <div>
        <h1>Welcome Here</h1>
        
        
        <Comp1 onSubmit={this.handleUserSubmit} />

      
        <Comp2 
          name={this.state.name} 
          lname={this.state.lname} 
          isVisible={this.state.isSubmitted} 
        />
      </div>
    );
  }
}

export default App;
