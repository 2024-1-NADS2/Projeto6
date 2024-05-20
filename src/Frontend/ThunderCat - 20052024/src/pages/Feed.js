import React from 'react';
import Header from '../components/Header';
import Postagem from '../components/Postagem';
import GlobalStyle from '../styles/GlobalStyles';

function Feed(){
    return(
        <div>
            <GlobalStyle/>
            <Header />
            <div className="postagem-container">
                {/* Corrigindo a tag do componente Postagem */}
                <Postagem />
            </div>
        </div> 
    );
}

export default Feed;
