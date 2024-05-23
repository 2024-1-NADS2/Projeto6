import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';
import Logo from '../assets/Logo Escrito 2 Azul PNG.png';
import { criarUsuario } from "../Funções/Usuario.js";

const ContainerFundo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d5f6ff;
    min-height: 100vh;

    
`;

const CaixaFormulario = styled.div`
    background: #ffffff;
    border: 2px solid rgba(0, 0, 0, .2);
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
    color: #000000;
    width: 90%;
    max-width: 420px;
    border-radius: 10px;
    padding: 30px 40px;

    @media (max-width: 500px) {
        width: 80%;
    }
    @media (max-width: 700px){
        width: 50%; /* Ajustado para 90% da largura */
        max-width: 60%; /* Adicionado max-width */
}
`;

const ImagemLogo = styled.img`
    display: block;
    margin: 0 auto;
    width: 300px;
    margin-bottom: 20px;

    @media (max-width: 500px) {
        width: 250px;
    }
    @media(max-width: 700px){
        width: 200px; /* Tamanho ajustado */
    }

    @media(max-width: 366px){
        width: 150px; /* Tamanho ajustado */
    }

    @media(max-width: 255px){
        width: 130px; /* Tamanho ajustado */
    }
`;

const Entrada = styled.input`
    width: 100%; 
    height: 50px;
    background: transparent;
    outline: none;
    border: 2px solid rgba(0, 0, 0, .2);
    border-radius: 40px;
    font-size: 16px;
    color: #000000;
    padding-left: 10px;
    margin-bottom: 20px;
`;

const BotaoCadastrar = styled.button`
    width: 100%;
    height: 45px;
    border: none;
    outline: none;
    border-radius: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    cursor: pointer;
    font-size: 16px;
    color: white;
    font-weight: 700;
    background: #FAAF83;
    transition: background 0.3s;
`;

const NaoTemConta = styled.div`
    margin-top: 10px;
    text-align: center;
`;

const TextoCadastro = styled.p`
    font-size: 13px;
    margin-top: 30px;
    margin-bottom: 10px;
`;

const TextoCadastro2 = styled.p`
    font-size: 13px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const LinkLogin = styled(Link)`
    color: black;
    text-decoration: none;
    font-weight: bold;
`;

const Cadastro = () => {
    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [senha_hash, setSenha_hash] = useState('');
    const [email, setEmail] = useState('');

    const handleCadastro = async (e) => {
        e.preventDefault();

        try {
            // Chama a função para criar o usuário
            const usuarioCriado = await criarUsuario(nome, senha_hash, email);

            // Se o usuário for criado com sucesso, redireciona para a página inicial
            navigate("/");
        } catch (error) {
            // Se houver erro, exibe uma mensagem para o usuário
            window.alert("Erro ao cadastrar, algum dado deve estar incorreto!");
        }
    };

    return (
        <ContainerFundo>
            <CaixaFormulario>
                <ImagemLogo src={Logo} alt="Logo" />
                <form onSubmit={handleCadastro}>
                    <Entrada 
                        type='text' 
                        placeholder='Nome' 
                        required 
                        value={nome} 
                        onChange={e => setNome(e.target.value)} 
                    />
                    <Entrada 
                        type='pssword' 
                        placeholder='Senha' 
                        required 
                        value={senha_hash} 
                        onChange={e => setSenha_hash(e.target.value)} 
                    />
                    <Entrada 
                        type='text' 
                        placeholder='Email' 
                        required 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                    />
                    <BotaoCadastrar type="submit">Cadastrar</BotaoCadastrar>
                </form>
                <NaoTemConta>
                    <hr />
                    <TextoCadastro>Deseja se registrar como uma ONG? <LinkLogin to="/cadastroOng">Registre-se</LinkLogin></TextoCadastro>
                    <TextoCadastro2>Já tem uma conta? <LinkLogin to="/">Faça login</LinkLogin></TextoCadastro2>
                </NaoTemConta>
            </CaixaFormulario>
        </ContainerFundo>
    );
};

export default Cadastro;