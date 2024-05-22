import React from 'react'
import CaixaCadastro from '../components/CadastroUsuario'
import Footer from '../components/FooterL';
import GlobalStyle from '../styles/GlobalStyles';

function Cadastro(){
    return (
        <div>
            <GlobalStyle />
            <CaixaCadastro />
            <Footer />
        </div>
    );
}

export default Cadastro