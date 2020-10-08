import React from 'react';
import './App.sass';
import fontAwesomeInitialize from "./model/fontawesome.config";
import Repository from './model/pages/Repository';

// use fontawesome icon
fontAwesomeInitialize();

function App() {

  return (
    <div className="App">
      <div className="page-container">
        <Repository />
      </div>
    </div>
  );
}

export default App;
