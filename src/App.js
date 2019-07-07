import React, { Component } from 'react';
import './App.css';
import Countries from './Countries';

const countryList = [
  { id: 1, name: 'Korea', city: 'Seoul' },
  { id: 2, name: 'Australia', city: 'Melbourne' },
  { id: 3, name: 'China', city: 'Beijing' }
]

class App extends Component {
    state = {
        ascending: false
    }
    handleClick = () => {
        this.setState(state => ({ ascending: !state.ascending }))
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Countries countryList={countryList} />
                </header>
            </div>
        )
    }
}

export default App;
