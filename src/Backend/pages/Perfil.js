import React from 'react';
import Header from '../components/Header-Perfil';
import ImagePerfil from '../assets/avatar.jpg';
import PerfilText from '../components/PerfilText';
import PerfilPost from '../components/PerfilPost';
import PostPerfil from '../assets/Post1.jpg';
import PostPerfil2 from '../assets/post2.jpg';
import PostPerfil3 from '../assets/post3.jpg';
import GlobalStyle from '../styles/GlobalStyles';
import Footer from '../components/Footer';
import Chat2 from '../components/Chat'

function Perfil() {
    return (
        <div>
            <GlobalStyle />
            <Header />
            <PerfilText 
                images={[
                    {src:ImagePerfil, alt: "Descrição",text1: "Filipi Pires David", text2:"19 anos", text3:"🐾 Apaixonado por gatos 🐾 | Compartilhando momentos fofos, dicas e curiosidades sobre nossos amigos felinos 🐱❤️"}
                ]}
            />
            <PerfilPost 
                post={[
                    {src:PostPerfil, alt: "Descrição",text1: "Filipi Pires: Meu gatinho lindo!!!"}
                ]}
            />
            <PerfilPost 
                post={[
                    {src:PostPerfil2, alt: "Descrição",text1: "Filipi Pires: Meu segundo gatinho lindoooo"}
                ]}
            />
            <PerfilPost 
                post={[
                    {src:PostPerfil3, alt: "Descrição",text1: "Filipi Pires: Meus filhotes lindinhossss"}
                ]}
            />
            <Footer />
            <Chat2 />
        </div>
    );
}

export default Perfil;
