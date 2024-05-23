import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../styles/GlobalStyles';
import LogoImage from '../assets/Logo Azul PNG.png'; // Substitua pelo caminho da sua imagem

const FooterContainer = styled.footer`
    margin-top: 20px;
    background-color: #d5f6ff;  /* Cor de fundo do footer */
    color: black; /* Cor do texto */
    text-align: center; /* Centralizar o texto */
    padding: 20px; /* Espaçamento interno */
    position: fixed; /* Posição fixa */
    bottom: 0; /* Alinhar ao fundo da tela */
    width: 100%; /* Largura total */
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 576px) {
        flex-direction: column; /* Alterando o layout para empilhado em telas menores */
        padding: 10px; /* Reduzindo o padding */
    }
`;

const Logo = styled.img`
    width: 30px; /* Defina o tamanho do logo conforme necessário */
    margin-left: 10px; /* Adicione um espaço entre o texto e o logo */

    @media screen and (max-width: 576px) {
        margin-left: 0; /* Removendo a margem à esquerda em telas menores */
        margin-top: 10px; /* Adicionando margem superior em telas menores */
    }
`;

function Footer() {
    return (
        <div>
            <GlobalStyle />
            <FooterContainer>
                ®️ 2024 ThunderCat
                <Logo src={LogoImage} alt="Logo da Empresa" />
            </FooterContainer>
        </div>
    );
}

export default Footer;



