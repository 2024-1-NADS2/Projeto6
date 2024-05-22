import React from 'react';
import Header from '../components/Header';
import Postagem from '../components/Postagem3';
import GlobalStyle from '../styles/GlobalStyles';
import Chat from '../components/Chat';

function Feed(){
    return(
        <div>
            <GlobalStyle/>
            <Header />
            <div className="postagem-container">
                {/* Corrigindo a tag do componente Postagem */}
                <Chat />
                <Postagem />
            </div>
        </div> 
    );
}

export default Feed;
