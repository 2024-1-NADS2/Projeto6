import React, { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart, faPaperPlane } from '@fortawesome/free-solid-svg-icons'; // Importe o ícone de coração sólido
import AvatarImage1 from '../assets/avatar.jpg';
import PostImage1 from '../assets/HD-wallpaper-reddeadredemption2-games-gta-online-rdr2-red-dead-redemption-2-rockstar-xbox.jpg';
import GlobalStyle from '../styles/GlobalStyles';
import { faHeart } from '@fortawesome/free-regular-svg-icons'; // Importe o ícone de coração vazio
import '../styles/Postagem.css';



function Postagem() {
    const endPageRef = useRef(null);
    const observerRef = useRef(null);
    const [numPostagens, setNumPostagens] = useState(10);
    const [curtidas, setCurtidas] = useState(new Array(numPostagens).fill(false)); // Estado para controlar as curtidas de cada postagem

    useEffect(() => {
        
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

    const handleCurtir = (index) => {
        const newCurtidas = [...curtidas]; // Cria uma cópia do array de curtidas
        newCurtidas[index] = !newCurtidas[index]; // Alterna entre curtido e não curtido para a postagem específica
        setCurtidas(newCurtidas); // Atualiza o estado de curtidas
    };

    const postagens = [];

    for (let i = 0; i < numPostagens; i++) {
        postagens.push(
            <div key={i} className="postagem">
                <div className="informacoes">
                    <div className="usuario">
                        <div className="miniaturaperfil">
                            <img src={AvatarImage1} alt="Avatar do usuário" />
                        </div>
                        <p className="nome-do-usuario">Usuario</p>
                    </div>
                </div>
                <img src={PostImage1} alt="Imagem da postagem" className="capa-post" />
                <div className="conteudo-da-postagem">
                    <div className="reacoes-icones">
                        <button className="icon" onClick={() => handleCurtir(i)}>
                            <FontAwesomeIcon icon={curtidas[i] ? solidHeart : faHeart} /> {/* Alterna entre coração sólido e vazio */}
                        </button>
                        <button className="icon">
                            <FontAwesomeIcon icon={faPaperPlane} /> {/* Ícone de comentário */}
                        </button>
                    </div>
                    <p className="descricao">
                        <span className="span">Usuario</span>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, sint aut optio
                        deseamet provident eum ullam? Debitis laborum, amet ipsa nesciunt mollitia reiciendis rerum
                        fugiat quia facilis exercitationem libero?
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div>
            <GlobalStyle />
            <div>
                {postagens}
            </div>
            <div ref={endPageRef} style={{ height: '20px', background: 'transparent' }}></div>
        </div>
    );
}

export default Postagem;













