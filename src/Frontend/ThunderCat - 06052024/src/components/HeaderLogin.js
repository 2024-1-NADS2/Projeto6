import styled from 'styled-components'
import Logo from '../assets/Logo Branco .png'

const HeaderContainer = styled.div
    `
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10;
    padding: 10px;
    position: fixed;

    img {
        width: 80px;
        height: auto;
    }
`;



function HeaderLogin() {
    return (
        <HeaderContainer>
            <img src={Logo} alt="Imagem" />
        </HeaderContainer>
    )
}
export default HeaderLogin