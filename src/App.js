import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Countries from './Countries';

const countryList = [
  { id: 1, name: 'Korea' },
  { id: 2, name: 'Australia' },
  { id: 3, name: 'China' }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button className="btn-sort">Sort</button>
          <Countries countryList={countryList} />
        </header>
      </div>
    )
  }
}

export default App;
