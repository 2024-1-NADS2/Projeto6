import React from 'react';
import Header from '../components/Header-Perfil';
import ImagePerfil from '../assets/img_logo_sos (2).png';
import PerfilText from '../components/PerfilText';
// import PerfilPost from '../components/PerfilPost';
import PostPerfil from '../assets/Post1.jpg';
import PostPerfil2 from '../assets/post2.jpg';
import PostPerfil3 from '../assets/post3.jpg';
import GlobalStyle from '../styles/GlobalStyles';
import Footer from '../components/Footer';
import Chat2 from '../components/Chat'
import Postagem2 from '../components/PostagemPerfil';

function Perfil() {
    return (
        <div>
            <GlobalStyle />
            <Header />
            <PerfilText 
                images={[
                    {src:ImagePerfil, alt: "Descrição",text1: "Sos vidas", text2:"🐾 Bem-vindo à nossa ONG de Adoção de Pets! 🐾", text3:"Somos apaixonados por criar lares amorosos para animais de estimação necessitados e ajudar a construir conexões duradouras entre humanos e animais. Aqui na nossa ONG, estamos comprometidos em encontrar lares para animais abandonados, proporcionando-lhes uma segunda chance na vida e um lugar para chamar de lar."}
                ]}
            />
            <Postagem2 />
            <Footer />
            <Chat2 />
        </div>
    );
}

export default Perfil;
