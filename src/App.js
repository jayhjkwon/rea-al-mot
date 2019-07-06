import React, { Component } from 'react';
import './App.css';
import Countries from './Countries';
import { orderBy } from 'lodash';

const countryList = [
  { id: 1, name: 'Korea' },
  { id: 2, name: 'Australia' },
  { id: 3, name: 'China' }
]

/*
 - order by ascending 
   orderBy(countryList, ['name'], ['asc'])
 - order by descending
   orderBy(countryList, ['name'], ['desc'])
*/

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
