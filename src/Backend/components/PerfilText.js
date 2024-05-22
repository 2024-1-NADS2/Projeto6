import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 17vh 20px 8px 20px; /* Reduzindo as margens */
`;

const ProfileInfoContainer = styled.div`
    display: flex; /* Usando flexbox para alinhar itens horizontalmente */
    align-items: center; /* Alinhando itens verticalmente ao centro */
    width: 100%;
    max-width: 790px; /* Definindo largura máxima */
    background-color: #ffffff; /* Fundo branco */
    border-radius: 10px; /* Borda arredondada */
    padding: 20px; /* Espaçamento interno */
    margin-top: 20px; /* Espaçamento superior */
    text-align: left; /* Alinhando texto à esquerda */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Sombra */
    
    @media screen and (max-width: 768px) {
        flex-direction: column; /* Empilhando os elementos em telas menores */
        align-items: flex-start; /* Alinhando itens à esquerda */
    }
`;

const ImageContainer = styled.div`
    margin-right: 20px; /* Espaçamento à direita para separar a imagem das informações */
    flex-shrink: 0; /* Impedindo a redução do tamanho da imagem */
    
    @media screen and (max-width: 768px) {
        margin-right: 0; /* Removendo o espaçamento à direita em telas menores */
        margin-bottom: 20px; /* Adicionando espaçamento inferior em telas menores */
    }
`;

const ProfileImage = styled.img`
    width: 100px; /* Definindo largura da imagem */
    height: 100px; /* Definindo altura da imagem */
    border-radius: 50%; /* Bordas arredondadas */
    border: 2px solid #007bff; /* Borda azul */
    
    @media screen and (max-width: 768px) {
        width: 80px; /* Reduzindo o tamanho da imagem em telas menores */
        height: 80px;
    }
    
    @media screen and (max-width: 480px) {
        width: 60px; /* Reduzindo ainda mais o tamanho da imagem em telas muito pequenas */
        height: 60px;
    }
`;

const InfoText = styled.p`
    margin-bottom: 10px; /* Espaçamento inferior */
    font-size: 16px; /* Tamanho da fonte */
    color: #333; /* Cor do texto */
`;

const InfoLink = styled.a`
    color: #007bff; /* Cor do link */
    text-decoration: none; /* Remover decoração de texto */
    &:hover {
        text-decoration: underline; /* Adicionar sublinhado ao passar o mouse */
    }
`;

function PerfilText({ images }) {
    return (
        <Container>
            {images.map((image, index) => (
                <ProfileInfoContainer key={index}>
                    <ImageContainer>
                        <ProfileImage src={image.src} alt={image.alt} />
                    </ImageContainer>
                    <div>
                        <InfoText>{image.text1}</InfoText>
                        <InfoText>{image.text2}</InfoText>
                        <InfoText>{image.text3}</InfoText>
                        <InfoLink href={image.link}>{image.linkText}</InfoLink>
                    </div>
                </ProfileInfoContainer>
            ))}
        </Container>
    );
}

export default PerfilText;



