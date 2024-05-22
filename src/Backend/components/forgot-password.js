import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../assets/Logo Escrito 2 Azul PNG.png';
import { useNavigate, Link } from 'react-router-dom';

const ContainerFundo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d5f6ff;
    min-height: 100vh;
`;

const CaixaFormulario = styled.div`
    background: #ffffff; /* Alterado para branco */
    border: 2px solid rgba(0, 0, 0, .2); /* Alterado para preto */
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
    color: #000000; /* Alterado para preto */
    width: 90%; /* Ajustado para 90% da largura */
    max-width: 420px; /* Adicionado max-width */
    border-radius: 10px;
    padding: 30px 40px;
`;

const ImagemLogo = styled.img`
    display: block;
    margin: 0 auto;
    width: 300px; /* Tamanho ajustado */
`;

const CaixaEntrada = styled.div`
    position: relative;
    margin: 20px 0; /* Ajustado para 20px de espaçamento */
`;

const Entrada = styled.input`
    width: 100%; 
    height: 50px;
    background: transparent;
    outline: none;
    border: 2px solid rgba(0, 0, 0, .2); /* Alterado para preto */
    border-radius: 40px;
    font-size: 16px;
    color: #000000; /* Alterado para preto */
    padding-left: 20px;
`;

const CaixaLembrarEsqueceu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    margin: -15px 0 15px;
`;

const LabelLembrar = styled.label`
    margin-top: 10px;
    display: flex;
    align-items: center;
`;

const InputLembrar = styled.input`
    margin-right: 4px;
`;

const BotaoEntrar = styled.button`
    width: 100%;
    height: 45px;
    border: none;
    outline: none;
    border-radius: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    cursor: pointer;
    font-size: 16px;
    color: black; /* Alterado para branco */
    font-weight: 700;
    background: #FAAF83;
    transition: background 0.3s;
`;

const NaoTemConta = styled.div`
    margin-top: 10px; /* Aumentando o espaçamento superior */
    text-align: center;
`;

const TextoCadastro = styled.p`
    font-size: 13px;
    margin-top: 30px;
    margin-bottom: 10px;
`;

const LinkCadastro = styled(Link)`
    color: black; /* Cor ajustada */
    text-decoration: none;
    font-weight: bold;
`;

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (email && password) {
            navigate('/feed');
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    };

    return (
        <ContainerFundo>
            <CaixaFormulario>
                <form onSubmit={handleLogin}>
                    <ImagemLogo src={Logo} alt="Logo" />
                    <CaixaEntrada>
                        <Entrada 
                            type='email' 
                            placeholder='Digite seu email' 
                            required 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </CaixaEntrada>
                    <CaixaEntrada>
                        <Entrada 
                            type='password' 
                            placeholder='Digite sua senha' 
                            required 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </CaixaEntrada>
                    <CaixaEntrada>
                        <Entrada 
                            type='password' 
                            placeholder='Confirme a sua senha' 
                            required 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </CaixaEntrada>
                    <CaixaLembrarEsqueceu>
                        <LabelLembrar>
                            <InputLembrar type='checkbox' />Lembre-me
                        </LabelLembrar>
                    </CaixaLembrarEsqueceu>
                    <BotaoEntrar type="submit">Alterar senha</BotaoEntrar>
                </form>
                <NaoTemConta>
                    <hr /> {/* Linha horizontal */}
                    <TextoCadastro>Já tem uma conta? <LinkCadastro to="/">Faça login</LinkCadastro></TextoCadastro>
                </NaoTemConta>
            </CaixaFormulario>
        </ContainerFundo>
    );
};

export default Login;




