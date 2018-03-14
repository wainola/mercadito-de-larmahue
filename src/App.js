import React, { Component } from 'react';
import Presentacion from './components/main_presentacion';
import MainContent from './components/main_content';

class App extends Component {
  render() {
    return (
      <div className="">
        <Presentacion/>
        <MainContent/>
      </div>
    );
  }
}

export default App;
