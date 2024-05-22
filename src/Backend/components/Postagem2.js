// Explicação dos Componentes e Funções:
// Importações: Importa as dependências necessárias, incluindo React, FontAwesome, imagens de exemplo, estilos globais e CSS específico para postagens.

// useRef:

// endPageRef: Referência para o elemento de final da página para carregar mais postagens.
// observerRef: Referência para o observador de interseção que observa o endPageRef.
// useState:

// numPostagens: Número de postagens a serem exibidas inicialmente.
// curtidas: Array que armazena o estado das curtidas para cada postagem.
// postagens: Array de objetos de postagens.
// descricaoNovaPostagem: Estado para a descrição da nova postagem.
// imagemNovaPostagem: Estado para armazenar a imagem carregada para a nova postagem.
// useEffect (inicial):

// Cria postagens iniciais e configura um observador para carregar mais postagens quando o usuário rola até o final da página.
// IntersectionObserver é usado para observar o endPageRef e carregar mais postagens quando ele é visível (50% visível).
// useEffect (curtidas):

// Atualiza o array de curtidas para corresponder ao número de postagens quando elas são atualizadas.
// handleCurtir:

// Alterna o estado da curtida (like) para uma postagem específica.
// handleImageUpload:

// Carrega e pré-visualiza a imagem antes de postar.
// Usa FileReader para ler o arquivo selecionado e atualiza o estado imagemNovaPostagem com o resultado.
// criarNovoPost:

// Cria uma nova postagem e adiciona ao início do array de postagens.
// Limpa os estados da descrição e da imagem após adicionar a nova postagem.
// JSX (Renderização):

// Renderiza a interface do usuário, incluindo os inputs para a nova postagem, botões de ação e a lista de postagens.
// Cada postagem inclui um avatar, imagem, ícones de reação (curtir e enviar), e descrição.
// endPageRef é um div no final da página para carregar mais postagens quando visível.

import React, { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import AvatarImage1 from '../assets/avatar.jpg';
import PostImage1 from '../assets/HD-wallpaper-reddeadredemption2-games-gta-online-rdr2-red-dead-redemption-2-rockstar-xbox.jpg';
import GlobalStyle from '../styles/GlobalStyles';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import '../styles/Postagem.css';

function Postagem2() {
    // Referências para rolagem para carregar mais postagens
    const endPageRef = useRef(null);
    const observerRef = useRef(null);

    // Estados para controlar o número de postagens, curtidas, dados das postagens, descrição da nova postagem e imagem da nova postagem
    const [numPostagens, setNumPostagens] = useState(10);
    const [curtidas, setCurtidas] = useState(new Array(numPostagens).fill(false));
    const [postagens, setPostagens] = useState([]);
    const [descricaoNovaPostagem, setDescricaoNovaPostagem] = useState('');
    const [imagemNovaPostagem, setImagemNovaPostagem] = useState(null);

    useEffect(() => {
        // Cria postagens iniciais
        let postsIniciais = [];
        for (let i = 0; i < numPostagens; i++) {
            postsIniciais.push({
                avatar: AvatarImage1,
                image: PostImage1,
                descricao: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, sint aut optio dese amet provident eum ullam?"
            });
        }
        setPostagens(postsIniciais);

        // Observer para carregar mais postagens quando o final da página for alcançado
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.target === endPageRef.current) {
                    setNumPostagens(prevNumPostagens => prevNumPostagens + 10);
                }
            });
        }, { threshold: 0.5 });

        const currentObserver = observerRef.current;
        const currentRef = endPageRef.current;

        if (currentRef && currentObserver) {
            currentObserver.observe(currentRef);
        }

        return () => {
            if (currentRef && currentObserver) {
                currentObserver.unobserve(currentRef);
            }
        };
    }, [numPostagens]);

    useEffect(() => {
        setCurtidas(new Array(postagens.length).fill(false));
    }, [postagens]);

    const handleCurtir = (index) => {
        const newCurtidas = [...curtidas];
        newCurtidas[index] = !newCurtidas[index];
        setCurtidas(newCurtidas);
    };

    // Manipula o upload da imagem e faz a pré-visualização antes de postar
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

    // Cria uma nova postagem e adiciona ao início do array de postagens
    const criarNovoPost = () => {
        if (!imagemNovaPostagem) {
            alert('Por favor, carregue uma imagem para a postagem.');
            return;
        }
        const novoPost = {
            avatar: AvatarImage1,
            image: imagemNovaPostagem,
            descricao: descricaoNovaPostagem // Usando o estado da nova descrição
        };
        setPostagens([novoPost, ...postagens]);
        setDescricaoNovaPostagem(''); // Limpa o input após adicionar
        setImagemNovaPostagem(null); // Limpa a imagem após adicionar
    };

    return (
        <div>
            <GlobalStyle />
            <input
                type="text"
                value={descricaoNovaPostagem}
                onChange={e => setDescricaoNovaPostagem(e.target.value)}
                placeholder="Digite a descrição da nova postagem"
            />
            <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
            />
            <button onClick={criarNovoPost}>Adicionar Postagem</button>
            <div>
                {postagens.map((post, index) => (
                    <div key={index} className="postagem">
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
                                <button className="icon" onClick={() => handleCurtir(index)}>
                                    <FontAwesomeIcon icon={curtidas[index] ? solidHeart : faHeart} />
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
    );
}

export default Postagem2;


