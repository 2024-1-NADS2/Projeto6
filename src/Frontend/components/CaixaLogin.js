import styled from 'styled-components'
import LogoCentral from '../assets/Logo Escrito Azul PNG.png'

const CaixaContainer = styled.div
    `

`
const Separa = styled.div
`
    text-align: center;
    margin: 5px;
    padding: 5px 40px;
`

const Buttons1 = styled.div
`
    display: flex;
    * gap: 5px; */
    justify-content: center;

    a{
        width: 30%;
        height: 18px;
        color: #000000;
        border-radius: 30px;
        text-decoration: none;
        font-weight: bold;
        text-align: center;
    }
`

const InputBox = styled.div
`
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    border: 2px solid rgba(197, 187, 187, 0.2);
    border-radius: 40px;
    font-size: 16px;
    color: #000000;
    padding: 20px 45px 20px 20px;
`
const RememberForgot = styled.div
`
    position: absolute;
    right: 1px;
    /* top: 50%; */
    transform: translateY(-50%);
    font-size: 25px;
    margin: 10px 70px;
    padding-top: 30px;
`

const Btn = styled.div
`
    width: 100%;
    height: 45px;
    background: #3e8a4e;
    border: none;
    outline: none;
    border-radius: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    cursor: pointer;
    font-size: 16px;
    color: #333;
    font-weight: 700;
    margin-bottom: 6px;
`

function CaixaLogin() {
    return (
        <CaixaContainer>
            <form action="sidebar.html" method="get">
            <img src="Logo Escrito 2 Azul PNG.png" alt="ThunderCat"></img>
            <Separa>
                <p>Não tem uma conta ?</p>
            </Separa>
            <Buttons1>
                <a href="cadastro.html">Cadastre-se</a>
            </Buttons1>
            <InputBox>
                <input type="text" placeholder="Email" required></input>
                <i class='bx bxs-user'></i>
            </InputBox>
            <InputBox>
                <input type="password" placeholder="Senha" required></input>
                <i class='bx bxs-lock'></i>
            </InputBox>
            <RememberForgot>
                <label><input type="checkbox"> Lembre-me</input></label>
                <a href="#">Esqueceu sua senha ?</a>
            </RememberForgot>

            <Btn type="submit">Login</Btn>
            <a href="sidebar.html"></a>
            <form />
        </CaixaContainer>
    )
}
export default CaixaLogin