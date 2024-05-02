import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Perfil from './pages/Perfil';
import Feed from './pages/Feed';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import CadastroOng from './pages/CadastroOng';
// import GlobalStyles from './styles/GlobalStyle';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Perfil />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/cadastro" element={<Cadastro />}/>
                <Route path="/cadastroOng" element={<CadastroOng />}/>
            </Routes>
        </Router>
    );
}

export default App;
