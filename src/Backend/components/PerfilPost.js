import React from 'react';
import styled from 'styled-components';

const CenteredContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2vh;
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    padding: 15px;
    background-color: #fff;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    margin: 0 auto;
    max-width: 800px;
    
    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 10px;
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr; /* Uma coluna em dispositivos com largura máxima de 480px */
        padding: 10px; /* Reduzindo o padding */
    }
`;

const StyledImg = styled.img`
    max-width: 100%;
    height: auto;
    border-radius: 10px;
`;

function PerfilPost() {
    const posts = Array(3).fill({
        src: 'https://via.placeholder.com/300',
        alt: 'Placeholder Image'
    });

    return (
        <CenteredContainer>
            <Container>
                {posts.map((image, index) => (
                    <StyledImg key={index} src={image.src} alt={image.alt} />
                ))}
            </Container>
        </CenteredContainer>
    );
}

export default PerfilPost;










