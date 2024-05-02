import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/Logo Escrito 2 Branco PNG.png'

const CaixaContainer = styled.div`
    display:flex;
    justify-content: center;
    background: #64b3cc;
    align-items: center;
    min-height: 100vh;
   padding-right: 15%;

img{
    display:flex;
    justify-content: center;
    align-items:center
    height: auto;
    width:20%;
    padding-right: 10%;
}

.wrapper{
    background: transparent;
    border: 2px solid rgba(255, 255, 255, .2);
    backdrop-filter: blur(30px);
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
    color: #fff;
    width: 420px;
    border-radius: 10px;
    padding: 30px 40px;
}   

.wrapper h1{
    font-size: 36px;
    text-align: center;
}

.wrapper .input-box{
    position: relative;
   width: 100%;
    height: 50px;
    margin: 30px 0;
}

.input-box input{
    width:98%; 
    height:100%;
    background:transparent;
    outline: none;
    border: 2px solid rgba(255, 255, 255, .2);
    border-radius: 40px;
    font-size: 16px;
    color: #fff;
    padding-left: 20px;
}

.input-box input::placeholder{
    color: #fff;
    padding-left: 2px;
}

.wrapper .remember-forgot{
    display: flex;
    justify-content: space-between;
    font-size: 14.5px;
    margin: -15px 0 15px;
}

.remember-forgot label input{
    accent-color: #fff;
    margin-right: 4px;
}

.remember-forgot a{
    color: #fff;
    text-decoration: none;
}

.remember-forgot a:hover{
    text-decoration: underline;
}

.wrapper button{
    width: 100%;
    height: 45px;
    border: none;
    outline: none;
    border-radius: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    cursor: pointer;
    font-size: 16px;
    color: #00000;
    font-weight: 700;
    background:#f1faff;
}

.wrapper .register-link{
    font-size: 16px;
    text-align: center;
    margin-top: 20px;
}


.register-link p a{
    color: #fff;
    text-decoration: none;
    font-weight:600;
}

.register-link p a:hover{
    text-decoration: underline;
}
`

const CaixaCadastro = () => {
    return (
        <CaixaContainer>
            <img src={Logo} alt="Imagem" />
            <div className='wrapper'>
                <form action=''>
                    <h1>Cadastro</h1>
                    <div className='input-box'>
                        <input type='text' placeholder='Nome' required />
                    </div>
                    <div className='input-box'>
                        <input type='password' placeholder='Email' required />
                    </div>
                    <div className='input-box'>
                        <input type='text' placeholder='Senha' required />
                    </div>
                    <div className='remember-forgot'>
                        <a href='Login'>Tem uma conta? Conecte-se</a>
                    </div>
                    <button type='submit'>Finalize</button>
                </form>
            </div>
        </CaixaContainer>
    )
}
export default CaixaCadastro