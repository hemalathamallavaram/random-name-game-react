import React from 'react';
import './App.css';
import Header from './containers/Header/Header';

import NameList from './components/NameList/NameList';
function App() {

  return (
    <div className="App">
      <Header />
      <NameList />
    </div>
  );
}

export default App;
