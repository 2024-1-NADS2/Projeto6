import styled from 'styled-components'

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 0px 100px 0px 100px;
`

const ImageContainer = styled.div`
    text-align:center;

    img{
        margin-top: 3%;
        width: 40%;
        height: auto;
    }

    p{
        text-align: left;
        margin-left: 30%;
        margin-right: 30%;
        margin-top: -3px;
    }
`



function PerfilPost({post}){
    return(
        <Container>
            {post.map((image, index) => (
                <ImageContainer key={index}>
                    <img src={image.src} alt={image.alt} />
                    <p>{image.text1}</p>
                </ImageContainer>
            ))}
        </Container>
    )
}
export default PerfilPost
