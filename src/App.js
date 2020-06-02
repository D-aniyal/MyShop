import React, { Component } from 'react';
import './App.css';
import {Cardlist} from "./components/card-list/card-list.components";

class App extends Component {
constructor(){
  super();

this.state = {

      developers:[]

};
  
}
componentDidMount(){
  fetch("https://jsonplaceholder.typicode.com/users")
  .then (response => response.json())
  .then (users => this.setState({developers : users}));
}


  render() {
    return (
      <div className="App">
          <Cardlist developers={this.state.developers}/ >
            
           
        
      </div>
    );
  }
}

export default App;
