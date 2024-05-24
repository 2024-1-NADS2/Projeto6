// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart as solidHeart, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
// import { faHeart } from '@fortawesome/free-regular-svg-icons';
// import AvatarImage1 from '../assets/img_logo_sos (2).png';
// import PostImage1 from '../assets/post2.jpg';
// import PostImage2 from '../assets/Post1.jpg';
// import PostImage3 from '../assets/post3.jpg';
// import PostImage4 from '../assets/foto14.png';
// import PostImage5 from '../assets/Logo Escrito 2 Azul PNG.png';

// import GlobalStyle from '../styles/GlobalStyles';
// import '../styles/Postagem.css';

// function Postagem() {
//     const [curtidas, setCurtidas] = useState([false, false, false, false, false]);

//     const handleCurtir = (index) => {
//         const newCurtidas = [...curtidas];
//         newCurtidas[index] = !newCurtidas[index];
//         setCurtidas(newCurtidas);
//     };

//     return (
//         <div className="feed-container">
//             <GlobalStyle />
//             {[...Array(5)].map((_, i) => (
//                 <div key={i} className="postagem">
//                     <div className="informacoes">
//                         <div className="usuario">
//                             <div className="miniaturaperfil">
//                                 <img src={AvatarImage1} alt="Avatar do usuário" />
//                             </div>
//                             <p className="nome-do-usuario">Sos vidas</p>
//                         </div>
//                     </div>
//                     <img src={PostImage1} alt="Imagem da postagem" className="capa-post" />
//                     <div className="conteudo-da-postagem">
//                         <div className="reacoes-icones">
//                             <button className="icon" onClick={() => handleCurtir(i)}>
//                                 <FontAwesomeIcon icon={curtidas[i] ? solidHeart : faHeart} />
//                             </button>
//                             <button className="icon">
//                                 <FontAwesomeIcon icon={faPaperPlane} />
//                             </button>
//                         </div>
//                         <p className="descricao">
//                             <span className="span">Sos Vidas</span>
//                             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, sint aut optio
//                             deseamet provident eum ullam? Debitis laborum, amet ipsa nesciunt mollitia reiciendis rerum
//                             fugiat quia facilis exercitationem libero?
//                         </p>
//                     </div>
                    
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default Postagem;




import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import GlobalStyle from '../styles/GlobalStyles';
import '../styles/Postagem.css';

// Importe suas imagens de postagens
import AvatarImage1 from '../assets/img_logo_sos (2).png';
import PostImage1 from '../assets/pexels-ingewallu-177809.jpg';
import PostImage2 from '../assets/pexels-kowalievska-1170986.jpg';
import PostImage3 from '../assets/pexels-pixabay-45201.jpg';

function Postagem() {
    const [curtidas, setCurtidas] = useState([false, false, false, false, false]);

    const handleCurtir = (index) => {
        const newCurtidas = [...curtidas];
        newCurtidas[index] = !newCurtidas[index];
        setCurtidas(newCurtidas);
    };

    // Array de objetos com informações sobre as postagens, incluindo URLs das imagens
    const postagens = [
        {
            id: 1,
            usuario: 'Sos vidas',
            avatar: AvatarImage1,
            imagem: PostImage1,
            descricao: 'Luna Idade: 2 anos. Personalidade: Carinhosa, afetuosa e curiosa. Gosta de "conversar" e explorar.História: Resgatada das ruas filhote. Se dá bem com outros gatos e cachorros.',
        },
        {
            id: 2,
            usuario: 'Sos vidas',
            avatar: AvatarImage1,
            imagem: PostImage2,
            descricao: "Tigrão. Personalidade: Brincalhão e cheio de energia. Amigável, adora crianças e aconchegos. História: Abandonado em um parque, resgatado e saudável."
        },
        {
            id: 3,
            usuario: 'Sos vidas',
            avatar: AvatarImage1,
            imagem: PostImage3,
            descricao: 'Mimi. Personalidade: Tranquila e independente. Gosta de lugares altos e de observar o ambiente. História: Entregue para adoção por sua família anterior. Prefere um ambiente calmo.',
        },
        // Adicione mais objetos de postagem conforme necessário
    ];

    return (
        <div className="feed-container">
            <GlobalStyle />
            {postagens.map((postagem, index) => (
                <div key={postagem.id} className="postagem">
                    <div className="informacoes">
                        <div className="usuario">
                            <div className="miniaturaperfil">
                                <img src={postagem.avatar} alt="Avatar do usuário" />
                            </div>
                            <p className="nome-do-usuario">{postagem.usuario}</p>
                        </div>
                    </div>
                    <img src={postagem.imagem} alt="Imagem da postagem" className="capa-post" />
                    <div className="conteudo-da-postagem">
                        <div className="reacoes-icones">
                            <button className="icon" onClick={() => handleCurtir(index)}>
                                <FontAwesomeIcon icon={curtidas[index] ? solidHeart : faHeart} />
                            </button>
                            <button className="icon">
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </button>
                        </div>
                        <p className="descricao">
                            <span className="span">{postagem.usuario}</span>
                            {postagem.descricao}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Postagem;
















