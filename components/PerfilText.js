import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 100px 8px 100px;
`

const ImageContainer = styled.p`
    text-align: center;

    img{
        border-radius: 50%;
        margin-top: 120px;
    }
`


function PerfilText({images}){
    return(
        <Container>
            {images.map((image, index) => (
                <ImageContainer key={index}>
                    <img src={image.src} alt={image.alt} />
                    <p>{image.text1}</p>
                    <p>{image.text2}</p>
                    <p>{image.text3}</p>
                </ImageContainer>
            ))}
        </Container>
    )
}

export default PerfilText