 import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component'

import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField:''
    };
  }
// getning data from API 
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }
  
  handleChange= e => { 
    this.setState({ searchField: e.target.value });
  };

  render(){
    //make a good search field som interactive 
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      )
    return (
      <div className="App">
      
      <h1>MonstRS RoloEX</h1>
      <SearchBox
      placeholder='search monster'
      handleChange={this.handleChange} 
      />

      <CardList monsters={filteredMonsters} /> 
      
      </div>

  );
  }
  
}

 
 /* <div className="App">
        <h1>{this.state.string}</h1>
        <button onClick={() => this.setState({string: 'hiii YOOOO!!'})}> change the text</button>

 </div> */
 

export default App;
