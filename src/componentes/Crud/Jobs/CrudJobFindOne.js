import React from 'react'

const URL = 'http://localhost:8080';



class CRUD extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  // get / findAll
  componentDidMount() {
    fetch(`${URL}/jobs/1`)
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
              <td>IdJob</td>
              <td>Descrição</td>
              </tr>
              <tr key={item.idJob.toString()}>
                <td>{item.idJob}</td>
                <td>{item.titulo}</td>
               </tr>
            </tbody>
        </table>
      </div>
    );
  }
}

export default CRUD
