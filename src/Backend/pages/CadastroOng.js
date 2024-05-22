import React from 'react'
import CaixaOng from '../components/CadastroOng'
import Footer from '../components/FooterL';
import GlobalStyle from '../styles/GlobalStyles';

function CadastroOng(){
    return (
        <div>
            <GlobalStyle />
            <CaixaOng />
            <Footer />
        </div>
    );
}

export default CadastroOng