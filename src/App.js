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
    state = {
        ascending: false
    }
    handleClick = () => {
        this.setState(state => ({ ascending: !state.ascending }))
    }
    render() {
        const sortedCountries = orderBy(countryList, ['name'], [`${this.state.ascending ? 'asc' : 'desc'}`])
        return (
            <div className="App">
                <header className="App-header">
                    <button className="btn-sort" onClick={this.handleClick}>Sort</button>
                    <Countries countryList={sortedCountries} />
                </header>
            </div>
        )
    }
}

export default App;
