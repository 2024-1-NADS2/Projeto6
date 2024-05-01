import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Perfil from './pages/Perfil';
import Feed from './pages/Feed';
import Login from './pages/Login';
// import GlobalStyles from './styles/GlobalStyle';

function App(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Perfil />}/>
                <Route path="/feed" element={<Feed />}/>
                <Route path="/login" element={<Login />}/>
            </Routes>
        </Router>
    );
}

export default App;