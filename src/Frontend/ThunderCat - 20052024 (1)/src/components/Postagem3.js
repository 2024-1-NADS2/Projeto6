import React, { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import AvatarImage1 from '../assets/avatar.jpg';
import GlobalStyle from '../styles/GlobalStyles';
import '../styles/Postagem.css';

function Postagem2() {
    const endPageRef = useRef(null);
    const [curtidas, setCurtidas] = useState([]);
    const [postagens, setPostagens] = useState([]);
    const [descricaoNovaPostagem, setDescricaoNovaPostagem] = useState('');
    const [imagemNovaPostagem, setImagemNovaPostagem] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setPostagens(prevPostagens => {
                    const newPostagens = [];
                    const startIndex = prevPostagens.length;
                    for (let i = startIndex; i < startIndex + 10; i++) {
                        newPostagens.push({
                            id: i,
                            avatar: AvatarImage1,
                            image: AvatarImage1,
                            descricao: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, sint aut optio dese amet provident eum ullam?"
                        });
                    }
                    return [...prevPostagens, ...newPostagens];
                });
                setCurtidas(prevCurtidas => {
                    return [...prevCurtidas, ...new Array(10).fill(false)];
                });
            }
        }, { threshold: 0.5 });

        observer.observe(endPageRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    const handleCurtir = (id) => {
        setCurtidas(prevCurtidas => {
            const newCurtidas = [...prevCurtidas];
            newCurtidas[id] = !newCurtidas[id];
            return newCurtidas;
        });
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagemNovaPostagem(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const criarNovoPost = () => {
        if (!imagemNovaPostagem) {
            alert('Por favor, carregue uma imagem para a postagem.');
            return;
        }
        const novoPost = {
            id: Date.now(),
            avatar: AvatarImage1,
            image: imagemNovaPostagem,
            descricao: descricaoNovaPostagem
        };
        setPostagens(prevPostagens => [novoPost, ...prevPostagens]);
        setCurtidas(prevCurtidas => [false, ...prevCurtidas]);
        setDescricaoNovaPostagem('');
        setImagemNovaPostagem(null);
    };

    return (
        <div>
            <GlobalStyle />
            <div className="post-container">
                <div className="post-buttons-container">
                    <input
                        type="text"
                        value={descricaoNovaPostagem}
                        onChange={e => setDescricaoNovaPostagem(e.target.value)}
                        placeholder="Digite a descrição da nova postagem"
                        className="post-input"
                    />
                    <div className="buttons-row">
                        <input
                            type="file"
                            accept="image/*"
                            id="file-input"
                            onChange={handleImageUpload}
                            className="file-input"
                        />
                        <label htmlFor="file-input" className="file-label">Escolher Arquivo</label>
                        <button onClick={criarNovoPost} className="post-button">Add Postagem</button>
                    </div>
                </div>
                <div className="feed-container">
                    {postagens.map((post) => (
                        <div key={post.id} className="postagem">
                            <div className="informacoes">
                                <div className="usuario">
                                    <div className="miniaturaperfil">
                                        <img src={post.avatar} alt="Avatar do usuário" />
                                    </div>
                                    <p className="nome-do-usuario">Usuario</p>
                                </div>
                            </div>
                            <img src={post.image} alt="Imagem da postagem" className="capa-post" />
                            <div className="conteudo-da-postagem">
                                <div className="reacoes-icones">
                                    <button className="icon" onClick={() => handleCurtir(post.id)}>
                                        <FontAwesomeIcon icon={curtidas[post.id] ? solidHeart : faHeart} />
                                    </button>
                                    <button className="icon">
                                        <FontAwesomeIcon icon={faPaperPlane} />
                                    </button>
                                </div>
                                <p className="descricao">
                                    <span className="span">Usuario</span>
                                    {post.descricao}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div ref={endPageRef} style={{ height: '20px', background: 'transparent' }}></div>
            </div>
        </div>
    );
}

export default Postagem2;









