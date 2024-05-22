import React, { useState } from 'react';
import styled from 'styled-components';

const ContainerChat = styled.div`
    position: fixed;
    bottom: 0;
  right: 0; /* Muda a posição para o canto direito */
    width: 300px;
    height: ${({ isAberto }) => (isAberto ? '400px' : '40px')};
    background-color: #f1f1f1;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: height 0.3s ease;
    border-radius: 10px 10px 0 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const CabecalhoChat = styled.div`
    height: 40px;
    background-color: #64B3CC;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    border-radius: 10px 10px 0 0;
    cursor: pointer;
`;

const CorpoChat = styled.div`
    flex: 1;
    padding: 10px;
    overflow-y: auto;
`;

const Mensagem = styled.div`
    margin: 5px 0;
    padding: 10px;
    border-radius: 5px;
    background-color: ${({ isUsuario }) => (isUsuario ? '#FAAF83' : '#e1e1e1')};
    color: ${({ isUsuario }) => (isUsuario ? 'white' : 'black')};
    align-self: ${({ isUsuario }) => (isUsuario ? 'flex-end' : 'flex-start')};
`;

const NomeUsuario = styled.span`
    font-weight: bold;
    display: block;
`;

const ContainerInputChat = styled.div`
    display: flex;
    padding: 10px;
    border-top: 1px solid #ccc;
    background-color: #f9f9f9;
    border-radius: 0 0 10px 10px;
`;

const InputChat = styled.input`
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const BotaoEnviar = styled.button`
    padding: 10px;
    margin-left: 5px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

&:hover {
    background-color: #0056b3;
}
`;

const Chat = () => {
    const [isAberto, setIsAberto] = useState(false);
    const [mensagens, setMensagens] = useState([]);
    const [novaMensagem, setNovaMensagem] = useState('');
    const nomeUsuario = 'Usuário'; // Nome do usuário fixo

    const alternarChat = () => {
        setIsAberto(!isAberto);
    };

    const enviarMensagem = () => {
        if (novaMensagem.trim() !== '') {
            setMensagens([...mensagens, { nome: nomeUsuario, texto: novaMensagem, isUsuario: true }]);
            setNovaMensagem('');
        }
    };

    const handleInputChange = (e) => {
        setNovaMensagem(e.target.value);
    };

    return (
        <ContainerChat isAberto={isAberto}>
            <CabecalhoChat onClick={alternarChat}>
                <span>Chat</span>
                <span>{isAberto ? '-' : '+'}</span>
            </CabecalhoChat>
            {isAberto && (
                <>
                    <CorpoChat>
                        {mensagens.map((mensagem, index) => (
                            <Mensagem key={index} isUsuario={mensagem.isUsuario}>
                                <NomeUsuario>{mensagem.nome}</NomeUsuario>
                                {mensagem.texto}
                            </Mensagem>
                        ))}
                    </CorpoChat>
                    <ContainerInputChat>
                        <InputChat
                            type="text"
                            value={novaMensagem}
                            onChange={handleInputChange}
                            placeholder="Digite uma mensagem..."
                        />
                        <BotaoEnviar onClick={enviarMensagem}>Enviar</BotaoEnviar>
                    </ContainerInputChat>
                </>
            )}
        </ContainerChat>
    );
};

export default Chat;





