import styled from 'styled-components'
import Logo from '../assets/Logo Azul PNG.png'

const HeaderContainer = styled.div
`
    width: 100px;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0px;
    position: fixed;

    img {
        width: 120px;
        height: auto;
    }
`;



function HeaderLogin()
{
    return(
        <HeaderContainer>
             <img src={Logo} alt="Imagem" />
        </HeaderContainer>
    )
}
export default HeaderLogin