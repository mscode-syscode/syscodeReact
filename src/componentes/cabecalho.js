import React from 'react'

const Cabecalho = props =>{
    return (
        <nav className='navbar navbar-default navbar-fixed-top'>
                <div className='container'>
                    <div className='navbar-header'>
                        <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                        </button>
                        <a className='navbar-brand' href='/'>HOME</a>
                    </div>
                    <div className='collapse navbar-collapse' id='myNavbar'>
                        <ul className='nav navbar-nav navbar-right'>
                            <li><a href='/jobs'>JOBS</a></li>
                            <li><a href='/servicos'>LISTAS</a></li>
                            <li><a href='/empresas'>CADASTROS</a></li>
                            <li><a href='/empresas'>EMPRESAS</a></li>
                            <li><a href='/producao'>PRODUÇÃO</a></li>
                            <li><a href='/financeiro'>FINANCEIRO</a></li>
                            <li><a href='/adminstracao'>ADMINISTRAÇÃO</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}

export default Cabecalho