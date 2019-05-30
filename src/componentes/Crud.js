import React from 'react'

const URL = 'http://localhost:8090';

class CRUD extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  // get / findAll
  componentDidMount() {
    fetch(`${URL}/empresas`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            items: result
          });
        }
      )
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
            { this.state.items.map(item => (
              <tr key={item.idempresa.toString()}>
                <td>{item.idempresa}</td>
                <td>{item.empresa}</td>
                <td>{item.bairro}</td>
                <td>{item.cep}</td>
                <td>{item.cidade}</td>
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