using Api_ThunderCat.Data;
using Api_ThunderCat.Repositorio.Interfaces;
using Microsoft.EntityFrameworkCore;
using ServidorExemplo.Models;
using System.Linq;

namespace Api_ThunderCat.Repositorio
{
    public class UsuarioRepositorio : IUsuarioRepositorio
    {
        private readonly ApiContext _dbContext;
        public UsuarioRepositorio(ApiContext ApiContext)
        {
            _dbContext = ApiContext;
        }
        public async Task<Usuario> BuscarPorId(int id)
        {
            return await _dbContext.usuario.FirstOrDefaultAsync(x => x.id_usuario == id);
        }

        public async Task<List<Usuario>> BuscarTodosUsuarios()
        {
            return await _dbContext.usuario.ToListAsync();
        }
        public async Task<Usuario> Adicionar(Usuario usuario)
        {
            await _dbContext.usuario.AddAsync(usuario);
            await _dbContext.SaveChangesAsync();

            return usuario;
        }

        public async Task<Usuario> Atualizar(Usuario usuario, int id)
        {
            Usuario usuarioPorId = await BuscarPorId(id);

            if(usuarioPorId == null)
            {
                throw new Exception($"Usuario Não encontrado: {id}");
            }
            usuarioPorId.nome = usuario.nome;
            usuarioPorId.email = usuario.email;
            usuarioPorId.senha_hash = usuario.senha_hash;

            _dbContext.usuario.Update(usuarioPorId);
            await _dbContext.SaveChangesAsync();

            return usuarioPorId;
        }
        public async Task<bool> Apagar(int id)
        {
            Usuario usuarioPorId = await BuscarPorId(id);

            if (usuarioPorId == null)
            {
                throw new Exception($"Usuario Não encontrado: {id}");
            }
            _dbContext.usuario.Remove(usuarioPorId);
            await _dbContext.SaveChangesAsync();
            return true;
        }
    }
}
