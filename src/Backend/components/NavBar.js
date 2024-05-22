import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faRss, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    height: 100vh;
    margin: 15px;
    margin-top: 150px; /* Pode ajustar conforme necessário */
`;

const StyledLink = styled(Link)`
    color: #fff;
    padding: 15px;
    text-decoration: none;
    font-weight: bold; /* Ajustado para negrito */
    margin: 15px;
    font-size: 20px;
    background-color: #64b3cc;
    border-radius: 20px; 
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px; /* Ajuste conforme necessário */
    height: 40px; /* Ajuste conforme necessário */
`;

function NavBar() {
    return (
        <Container>   
            <StyledLink to="/perfil"><FontAwesomeIcon icon={faUser} size="lg" /></StyledLink>
            <StyledLink to="/feed"><FontAwesomeIcon icon={faRss} size="lg" /></StyledLink>
            <StyledLink to="/"><FontAwesomeIcon icon={faSignOutAlt} size="lg" /></StyledLink>
        </Container>
    );
}

export default NavBar;

