import React from 'react'
import EsquecerASenha from '../components/forgot-password'
import Footer from '../components/FooterL';
import GlobalStyle from '../styles/GlobalStyles';


function Esquecer(){
    return (
        <div>
            <GlobalStyle />
            <EsquecerASenha />
            <Footer />
        </div>
    );
}

export default Esquecer