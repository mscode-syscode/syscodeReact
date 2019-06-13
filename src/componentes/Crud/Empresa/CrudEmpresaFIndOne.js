import React from 'react'
import axios from 'axios';

const URL = 'http://localhost:8080';

class CRUD extends React.Component {
  state = {
    empresa: []
  }
  componentDidMount() {
    axios.get(`${URL}/empresas/1`).then(response => response.data)
      .then((data) => {
        this.setState({ empresa: data })
        console.log(this.state.empresa)
      })
  }
  
  render() {

    return (
      <div className='col-md-12'>
      <table className='table table-striped '>
        <tbody className='thead-dark'>
          <tr>
            <td>IdEmpresa</td>
            <td>Empresa</td>
            <td>bairro</td>
            <td>cep</td>
            <td>cidade</td>
          </tr>
            <tr key={this.state.empresa.idempresa}>
              <td>{this.state.empresa.idempresa}</td>
              <td>{this.state.empresa.empresa}</td>
              <td>{this.state.empresa.bairro}</td>
              <td>{this.state.empresa.cep}</td>
              <td>{this.state.empresa.cidade}</td>
            </tr>
        </tbody>
      </table>
    </div>
    );
  }

}


export default CRUD;
