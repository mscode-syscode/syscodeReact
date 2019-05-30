import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

// import Site from './Site'
import Footer from './componentes/Footer'
import Cabecalho from './componentes/cabecalho'
import Inicio from './componentes/Inicio'
import Servicos from './componentes/Servicos'
import Empresas from './componentes/Empresas'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Cabecalho />

          <Route path='/' exact component={Inicio} />
          <Route path='/servicos' component={Servicos} />
          <Route path='/empresas' component={Empresas} />

          <Footer />
        </div>
      </BrowserRouter >
    );
  }
}
export default App;
