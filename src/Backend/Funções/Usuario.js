const azureUrl = "https://apithuindercat-feacp20240519232636.azurewebsites.net/api";




export const criarUsuario = async (nome,senha_hash, email) => {
    try {
      const url = azureUrl + "/Servidor";
    
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, senha_hash, email })
      });
  
      if (!res.ok) {
        throw new Error("Alguns dos dados enviados não estão corretos");
      }
      
      const usuarioCriado = await res.text();
    
      return usuarioCriado;
    } catch (e) {
      throw e;
    }
  };
  
  export const criarOng = async (nome,senha_hash, cnpj, email) => {
    try {
      const url = azureUrl + "/ong/ong";
    
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, senha_hash,cnpj, email })
      });
  
      if (!res.ok) {
        throw new Error("Alguns dos dados enviados não estão corretos");
      }
      
      const usuarioCriado = await res.text();
    
      return usuarioCriado;
    } catch (e) {
      throw e;
    }
  };





  // Função de autenticação do usuário
export const autenticacaoUsuario = async (senha_hash, email) => {
  try {
      const url = "https://apithuindercat-feacp20240519232636.azurewebsites.net/api/Servidor/Login";
  
      const res = await fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ senha_hash, email })
      });

      if (!res.ok) {
          throw new Error("Email ou senha estão incorretos");
      }
    
      const data = await res.json();
      return data.email;
  } catch (e) {
      throw e;
  }
};