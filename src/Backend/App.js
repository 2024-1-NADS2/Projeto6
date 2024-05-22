import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Perfil from './pages/Perfil';
import Feed from './pages/Feed';
import Login from './pages/Login';
import Cadastro from './pages/CadastroUsuario';
import CadastroOng from './pages/CadastroOng';
import Forgot from './pages/Forgot';

// import GlobalStyles from './styles/GlobalStyle'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/cadastro" element={<Cadastro />}/>
                <Route path="/cadastroOng" element={<CadastroOng />}/>
                <Route path="/forgot" element={<Forgot />}/>
            </Routes>
        </Router>
    );
}

export default App;