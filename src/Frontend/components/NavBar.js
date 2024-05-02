import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaUserLarge } from "react-icons/fa6";
import { MdDynamicFeed } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    height: 100vh;
    margin: 15px;
    margin-top:150px;
`;

const StyledLink = styled(Link)`
    color: #fff;
    padding: 15px;
    text-decoration: none;
    font-weight: 1500;
    margin:15px;
    font-size: 20px;
    background-color: #64b3cc;
    border-radius: 20px; 
`;

function NavBar() {
    return (
        <Container>   
            <StyledLink to="/"><FaUserLarge /></StyledLink>
            <StyledLink to="/feed"><MdDynamicFeed /></StyledLink>
            <StyledLink to="/login"><IoLogOut /></StyledLink>
        </Container>
    );
}

export default NavBar;