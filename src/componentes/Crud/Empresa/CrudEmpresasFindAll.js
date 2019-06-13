import React from 'react'
import axios from 'axios'

const URL = 'http://localhost:8080';

class CRUD extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      empresas: []
    };
  }

  // get / findAll
  componentDidMount() {
    axios.get(`${URL}/empresas`).then(response => response.data)
      .then((data) => {
        this.setState({ empresas: data })
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
            {this.state.empresas.map(empresa => (
              <tr key={empresa.idempresa.toString()}>
                <td>{empresa.idempresa}</td>
                <td>{empresa.empresa}</td>
                <td>{empresa.bairro}</td>
                <td>{empresa.cep}</td>
                <td>{empresa.cidade}</td>
              </tr>
            )
            )
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default CRUD