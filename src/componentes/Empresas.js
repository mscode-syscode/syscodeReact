import React from 'react'

import Empresas from './Crud/Empresa/CrudEmpresasFindAll'

const Empresa = props => {
    return (
        <div id='services' className='container-fluid text-center'>
            <h2>EMPRESAS</h2>
            <h4>Lista de Empresas Cadastradas</h4>
            <br />
       

            <br /><br />
            <div className='row '>
                
                <Empresas />


            </div>
        </div>
    )
}


export default Empresa