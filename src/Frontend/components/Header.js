import styled from 'styled-components';
import React from 'react';
import LogoEscritaBranco from "../assets/Logo Escrito Azul PNG.png";

const HeaderContainer = styled.div`
    background-color: #3e7397;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    // margin: 0;;
    // padding: 0px;
    position: fixed;

    img {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 120px;
        height: auto;
    }
`;



function Header(){
    return(
        <HeaderContainer>
            <img src={LogoEscritaBranco} alt="Imagem" />
        </HeaderContainer>
    );
}

export default Header;