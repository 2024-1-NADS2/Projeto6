using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ServidorExemplo.Models;
using ServidorExemplo.Data;
using System.Collections.Generic;
using System.Threading.Tasks;
using MySqlConnector;
using System.Diagnostics;
using System;
using WebApplication2.Models;
using WebApplication3.Models;
using Microsoft.EntityFrameworkCore;
using Dto;
using DotLiquid.Util;
using AutoMapper;
using Api_ThuinderCat_Feacp.Dto;
using Microsoft.AspNetCore.Identity.Data;



namespace ServidorExemplo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServidorController : ControllerBase
    {
        private readonly ApiContext _context;
        private readonly IMapper _mapper;

        public ServidorController(ApiContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
      
            static async Task Chamada()
        {
            var builder = new MySqlConnectionStringBuilder
            {
                Server = "thundercat.mysql.database.azure.com",
                Database = "thundercat",
                UserID = "adminthundercat",
                Password = "thundercat2023!",
                SslMode = MySqlSslMode.Required,
            };

            using (var conn = new MySqlConnection(builder.ConnectionString))
            {
                Debug.Write("Opening connection");
                await conn.OpenAsync();

                using (var command = conn.CreateCommand())
                {
                    command.CommandText = @"INSERT INTO usuario (nome, senha_hash, email) VALUES (""teobaldo"", ""9"", ""ppppppppppppppppp@gmail.com"")";
                    int rowCount = await command.ExecuteNonQueryAsync();
                    Debug.Write(String.Format("Number of rows inserted={0}", rowCount));
                }
            }
        }

        static async Task<int> DeleteUsuarioFromDatabase(int id_usuario)
        {
            var builder = new MySqlConnectionStringBuilder
            {
                Server = "thundercat.mysql.database.azure.com",
                Database = "thundercat",
                UserID = "adminthundercat",
                Password = "thundercat2023!",
                SslMode = MySqlSslMode.Required,
            };

            using (var conn = new MySqlConnection(builder.ConnectionString))
            {
                await conn.OpenAsync();

                using (var command = conn.CreateCommand())
                {
                    command.CommandText = @"DELETE FROM usuario WHERE id_usuario = @id";
                    command.Parameters.AddWithValue("@id", id_usuario);

                    int rowCount = await command.ExecuteNonQueryAsync();
                    return rowCount;
                }
            }
        }

        static async Task<List<Usuario>> GetAllUsuariosFromDatabase()
        {
            var builder = new MySqlConnectionStringBuilder
            {
                Server = "thundercat.mysql.database.azure.com",
                Database = "thundercat",
                UserID = "adminthundercat",
                Password = "thundercat2023!",
                SslMode = MySqlSslMode.Required,
            };

            var usuarios = new List<Usuario>();

            using (var conn = new MySqlConnection(builder.ConnectionString))
            {
                await conn.OpenAsync();

                using (var command = conn.CreateCommand())
                {
                    command.CommandText = "SELECT id_usuario, nome, senha_hash, email FROM usuario";

                    using (var reader = await command.ExecuteReaderAsync())
                    {
                        while (await reader.ReadAsync())
                        {
                            var usuario = new Usuario
                            {
                                id_usuario = reader.GetInt32(0),
                                nome = reader.GetString(1),
                                senha_hash = reader.GetString(2),
                                email = reader.GetString(3)
                            };
                            usuarios.Add(usuario);
                        }
                    }
                }
            }

            return usuarios;
        }

        static async Task<Usuario> GetUsuarioByNomeEmail(string nome, string email)
        {
            var builder = new MySqlConnectionStringBuilder
            {
                Server = "thundercat.mysql.database.azure.com",
                Database = "thundercat",
                UserID = "adminthundercat",
                Password = "thundercat2023!",
                SslMode = MySqlSslMode.Required,
            };

            Usuario usuario = null;

            using (var conn = new MySqlConnection(builder.ConnectionString))
            {
                await conn.OpenAsync();

                using (var command = conn.CreateCommand())
                {
                    command.CommandText = "SELECT id_usuario, nome, senha_hash, email FROM usuario WHERE nome = @nome AND email = @email";
                    command.Parameters.AddWithValue("@nome", nome);
                    command.Parameters.AddWithValue("@email", email);

                    using (var reader = await command.ExecuteReaderAsync())
                    {
                        if (await reader.ReadAsync())
                        {
                            usuario = new Usuario
                            {
                                id_usuario = reader.GetInt32(0),
                                nome = reader.GetString(1),
                                senha_hash = reader.GetString(2),
                                email = reader.GetString(3)
                            };
                        }
                    }
                }
            }

            return usuario;
        }

        static async Task<Usuario> GetUsuarioById(int id)
        {
            var builder = new MySqlConnectionStringBuilder
            {
                Server = "thundercat.mysql.database.azure.com",
                Database = "thundercat",
                UserID = "adminthundercat",
                Password = "thundercat2023!",
                SslMode = MySqlSslMode.Required,
            };

            Usuario usuario = null;

            using (var conn = new MySqlConnection(builder.ConnectionString))
            {
                await conn.OpenAsync();

                using (var command = conn.CreateCommand())
                {
                    command.CommandText = "SELECT id_usuario, nome, senha_hash, email FROM usuario WHERE id_usuario = @id_usuario";
                    command.Parameters.AddWithValue("@id_usuario", id);

                    using (var reader = await command.ExecuteReaderAsync())
                    {
                        if (await reader.ReadAsync())
                        {
                            usuario = new Usuario
                            {
                                id_usuario = reader.GetInt32(0),
                                nome = reader.GetString(1),
                                senha_hash = reader.GetString(2),
                                email = reader.GetString(3)
                            };
                        }
                    }
                }
            }

            return usuario;
        }

        static async Task<int> AddUsuarioToDatabase(Usuario usuario)
        {
            var builder = new MySqlConnectionStringBuilder
            {
                Server = "thundercat.mysql.database.azure.com",
                Database = "thundercat",
                UserID = "adminthundercat",
                Password = "thundercat2023!",
                SslMode = MySqlSslMode.Required,
            };

            using (var conn = new MySqlConnection(builder.ConnectionString))
            {
                await conn.OpenAsync();

                using (var command = conn.CreateCommand())
                {
                    command.CommandText = @"INSERT INTO usuario (nome, senha_hash, email) VALUES (@nome, @senha_hash, @email)";
                    command.Parameters.AddWithValue("@nome", usuario.nome);
                    command.Parameters.AddWithValue("@senha_hash", usuario.senha_hash);
                    command.Parameters.AddWithValue("@email", usuario.email);

                    int rowCount = await command.ExecuteNonQueryAsync();
                    return rowCount;
                }
            }
        }


        // Criar/Editar Post/Put
        [HttpPost]
        public async Task<JsonResult> CriarEditar(Usuario usuario)
        {
            if (usuario.id_usuario == 0)
            {
                int rowCount = await AddUsuarioToDatabase(usuario);
                if (rowCount > 0)
                {
                    return new JsonResult(Ok(new { message = "Usuário adicionado com sucesso" }));
                }
                else
                {
                    return new JsonResult(StatusCode(500, new { message = "Erro ao adicionar o usuário" }));
                }
            }
            else
            {
                var usuarioNoBD = _context.usuarios.Find(usuario.id_usuario);
                if (usuarioNoBD == null)
                {
                    return new JsonResult(NotFound(new { message = "Usuário não encontrado" }));
                }
                usuarioNoBD.nome = usuario.nome;
                usuarioNoBD.senha_hash = usuario.senha_hash;
                usuarioNoBD.email = usuario.email;
                _context.SaveChanges();
                return new JsonResult(Ok(new { message = "Usuário atualizado com sucesso" }));
            }
        }

        [HttpPost("Login")]
        public async Task<IActionResult> Autenticar([FromBody] LoginDto login)
        {
            var builder = new MySqlConnectionStringBuilder
            {
                Server = "thundercat.mysql.database.azure.com",
                Database = "thundercat",
                UserID = "adminthundercat",
                Password = "thundercat2023!",
                SslMode = MySqlSslMode.Required,
            };

            using (var conn = new MySqlConnection(builder.ConnectionString))
            {
                await conn.OpenAsync();

                using (var command = conn.CreateCommand())
                {
                    command.CommandText = "SELECT senha_hash, email FROM usuario WHERE email = @Email";
                    command.Parameters.AddWithValue("@Email", login.email);

                    using (var reader = await command.ExecuteReaderAsync())
                    {
                        if (await reader.ReadAsync())
                        {
                            var usuarioDto = new UsuarioDto
                            {
                                senha_hash = reader.GetString(reader.GetOrdinal("senha_hash")),
                                email = reader.GetString(reader.GetOrdinal("email")),
                            };

                            if (login.senha_hash == usuarioDto.senha_hash)
                            {
                                return Ok(new { Tipo = "Usuario", Email = usuarioDto.email });
                            }
                        }
                    }

                    // Resetando o comando para a próxima consulta
                    command.Parameters.Clear();
                    command.CommandText = "SELECT senha_hash, email FROM ong WHERE email = @Email";
                    command.Parameters.AddWithValue("@Email", login.email);

                    using (var reader = await command.ExecuteReaderAsync())
                    {
                        if (await reader.ReadAsync())
                        {
                            var ongDto = new OngDto
                            {
                                senha_hash = reader.GetString(reader.GetOrdinal("senha_hash")),
                                email = reader.GetString(reader.GetOrdinal("email")),
                            };

                            if (login.senha_hash == ongDto.senha_hash)
                            {
                                return Ok(new { Tipo = "Ong", Email = ongDto.email });
                            }
                        }
                    }
                }
            }

            return Unauthorized(new { message = "Credenciais inválidas" });
        }

        // Restante do código permanece inalterado



        // Pegar GET
        [HttpGet("/GetId")]
        public async Task<JsonResult> PegarPorNomeEmail(int id)
        {
            var usuario = await GetUsuarioById(id);
            if (usuario == null)
            {
                return new JsonResult(NotFound(new { message = "Usuário não encontrado" }));
            }
            return new JsonResult(Ok(usuario));
        }

        // Deletar
        [HttpDelete("{id_usuario}")]
        public async Task<IActionResult> Deletar(int id_usuario)
        {
            int rowCount = await DeleteUsuarioFromDatabase(id_usuario);

            if (rowCount == 0)
            {
                return NotFound(new { message = "Usuário não encontrado" });
            }

            return NoContent();
        }

        // Pegar todos os dados
        [HttpGet("/GetAll")]
        public async Task<JsonResult> TodosUsuarios()
        {
            var usuarios = await GetAllUsuariosFromDatabase();
            return new JsonResult(Ok(usuarios));
        }

        // Pegar usuário por nome e email
        [HttpGet("/GetByNomeEmail")]
        public async Task<JsonResult> PegarPorNomeEmail(string nome, string email)
        {
            var usuario = await GetUsuarioByNomeEmail(nome, email);
            if (usuario == null)
            {
                return new JsonResult(NotFound(new { message = "Usuário não encontrado" }));
            }
            return new JsonResult(Ok(usuario));
        }

        [HttpGet("/Mysql")]
        async public void Banco()
        {
            await Chamada();
        }
    }
}

