import React, { Component } from 'react';
import Presentacion from './components/main_presentacion';
import MainContent from './containers/main_content';
// import CarroCompra from './containers/carro_de_compras';

class App extends Component {
  render() {
    return (
      <div className="">
        {/* <CarroCompra/> */}
        <Presentacion/>
        <MainContent/>
      </div>
    );
  }
}

export default App;
