import React from 'react';
import Header from '../components/Header';
import Postagem from '../components/Postagem';
import GlobalStyle from '../styles/GlobalStyles';
import NavBar from '../components/NavBar';

function Feed(){
    return(
        <div>
            <GlobalStyle/>
            <Header />
            <NavBar />
            <div className="postagem-container">
                {/* Corrigindo a tag do componente Postagem */}
                <Postagem />
            </div>
        </div> 
    );
}

export default Feed;
