import React, { Component } from "react";
import SmurfList from './SmurfList';
import AddSmurf from './AddSmurf';
import { SmurfProvider} from '../contexts/SmurfContext'

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Context API</h1>
        {/* <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div> */}

        <SmurfProvider>
          <AddSmurf />
          <SmurfList />
        </SmurfProvider>
      </div>
    );
  }
}

export default App;
