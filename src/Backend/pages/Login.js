import React from 'react'
import CaixaLogin from '../components/Login'
import GlobalStyle from '../styles/GlobalStyles';
import Footer from '../components/FooterL';


function Login(){
    return (
        <div>
            <GlobalStyle />
            <CaixaLogin />
            <Footer />
        </div>
    );
}

export default Login