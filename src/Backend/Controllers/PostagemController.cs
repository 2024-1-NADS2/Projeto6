/*using Microsoft.AspNetCore.Mvc;
using WebApplication3.Models;
using Microsoft.AspNetCore.Http;
using ServidorExemplo.Models;
using ServidorExemplo.Data;
using System.Collections.Generic;
using System.Threading.Tasks;
using MySqlConnector;
using System.Diagnostics;
using System;
using WebApplication2.Models;
using Microsoft.EntityFrameworkCore;
using DotLiquid;

namespace WebApplication3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostagemController : ControllerBase
    {
        private readonly ApiContext _context;

        public PostagemController(ApiContext context)
        {
            _context = context;
        }

        // Método estático para obter todas as ONGs do banco de dados
        static async Task<List<Postagem>> GetAllPostagensFromDatabase()
        {
            var builder = new MySqlConnectionStringBuilder
            {
                Server = "thundercat.mysql.database.azure.com",
                Database = "thundercat",
                UserID = "adminthundercat",
                Password = "thundercat2023!",
                SslMode = MySqlSslMode.Required,
            };

            var postagens = new List<Postagem>();

            using (var conn = new MySqlConnection(builder.ConnectionString))
            {
                await conn.OpenAsync();

                using (var command = conn.CreateCommand())
                {
                    command.CommandText = "SELECT file_postagem, id_postagem, id_ong FROM postagem";

                    using (var reader = await command.ExecuteReaderAsync())
                    {
                        while (await reader.ReadAsync())
                        {
                            var postagem = new Postagem
                            {
                                file_postagem = reader.GetString(0),
                                id_postagem = reader.GetInt32(1),
                                id_ong = reader.GetInt32(2),
                            };
                            postagens.Add(postagem);
                        }
                    }
                }
            }

            return postagens;
        }

        static async Task<int> AddPostagemToDatabase(Postagem postagem)
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
                    command.CommandText = @"INSERT INTO postagem (file_postagem, id_ong) VALUES (@file_postagem, @id_ong)";
                    command.Parameters.AddWithValue("@id_postagem", postagem.file_postagem);
                    command.Parameters.AddWithValue("@id_ong", postagem.id_ong);
                    int rowCount = await command.ExecuteNonQueryAsync();
                    return rowCount;




                    //command.CommandText = @"INSERT INTO usuario (nome, senha_hash, email) VALUES (@nome, @senha_hash, @email)";
                    //command.Parameters.AddWithValue("@nome", usuario.nome);
                    //command.Parameters.AddWithValue("@senha_hash", usuario.senha_hash);
                    //command.Parameters.AddWithValue("@email", usuario.email);
                }
            }
        }

        // Método estático para obter uma ONG pelo nome e email
        static async Task<Postagem> GetOngById_ong(int id_ong)
        {
            var builder = new MySqlConnectionStringBuilder
            {
                Server = "thundercat.mysql.database.azure.com",
                Database = "thundercat",
                UserID = "adminthundercat",
                Password = "thundercat2023!",
                SslMode = MySqlSslMode.Required,
            };

            Postagem postagem = null;

            using (var conn = new MySqlConnection(builder.ConnectionString))
            {
                await conn.OpenAsync();

                using (var command = conn.CreateCommand())
                {
                    command.CommandText = "SELECT file_postagem FROM postagem WHERE id_ong = @id_ong";
                    command.Parameters.AddWithValue("@id_ong", id_ong);

                    using (var reader = await command.ExecuteReaderAsync())
                    {
                        if (await reader.ReadAsync())
                        {
                            postagem = new Postagem
                            {
                                file_postagem = reader.GetString(0),
                            };
                        }
                    }
                }
            }

            return postagem;
        }

        // Método estático para deletar uma ONG do banco de dados pelo ID
        static async Task<int> DeletePostagemFromDatabase(int id_postagem)
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
                    command.CommandText = @"DELETE FROM postagem WHERE id_postagem = @id";
                    command.Parameters.AddWithValue("@id", id_postagem);

                    int rowCount = await command.ExecuteNonQueryAsync();
                    return rowCount;
                }
            }
        }

        [HttpPost]
        public async Task<JsonResult> CriarEditar(Postagem postagem)
        {
            if (postagem.id_postagem == 0)
            {
                int rowCount = await AddPostagemToDatabase(postagem);
                if (rowCount > 0)
                {
                    return new JsonResult(Ok(new { message = "Postagem adicionado com sucesso" }));
                }
                else
                {
                    return new JsonResult(StatusCode(500, new { message = "Erro ao adicionar o postagem" }));
                }
            }
            else
            {
                var postagemNoBD = _context.postagens.Find(postagem.id_postagem);

                if (postagemNoBD == null)
                {
                    return new JsonResult(NotFound(new { message = "Postagem não encontrado" }));
                }
                postagemNoBD.file_postagem = postagem.file_postagem;
                postagemNoBD.id_ong = postagem.id_ong;
                _context.SaveChanges();
                return new JsonResult(Ok(new { message = "Postagem atualizado com sucesso" }));
            }
        }


        // Método HTTP DELETE para deletar uma ONG pelo ID
        [HttpDelete("{id_postagem}")]
        public async Task<IActionResult> Deletar(int id_postagem)
        {
            int rowCount = await DeletePostagemFromDatabase(id_postagem);

            if (rowCount == 0)
            {
                return NotFound(new { message = "Postagem não encontrada" });
            }

            return NoContent();
        }

        // Método HTTP GET para obter todas as ONGs
        [HttpGet("/GetAllPostagem")]
        public async Task<JsonResult> TodasPostagens()
        {
            var postagens = await GetAllPostagensFromDatabase();
            return new JsonResult(Ok(postagens));
        }
    }
}


using Microsoft.AspNetCore.Mvc;
using ServidorExemplo.Models;
using ServidorExemplo.Data;
using Microsoft.EntityFrameworkCore;
using MySqlConnector;
using System.Collections.Generic;
using System.Threading.Tasks;
using WebApplication3.Models;

namespace WebApplication3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostagemController : ControllerBase
    {

        private readonly ApiContext _context;

        public PostagemController(ApiContext context)
        {
            _context = context;
        }

        // Método HTTP GET para obter todas as postagens
        [HttpGet]
        public async Task<IActionResult> GetAllPostagens()
        {
            var postagens = await _context.postagens.ToListAsync();
            return Ok(postagens);
        }

        // Método HTTP POST para criar uma nova postagem
        [HttpPost]
        public async Task<IActionResult> CriarPostagem(Postagem postagem)
        {
            if (postagem.id_postagem == 0)
            {
                _context.postagens.Add(postagem);
                await _context.SaveChangesAsync();
                return Ok(new { message = "Postagem adicionada com sucesso" });
            }
            else
            {
                var postagemNoBD = await _context.postagens.FindAsync(postagem.id_postagem);

                if (postagemNoBD == null)
                {
                    return NotFound(new { message = "Postagem não encontrada" });
                }

                postagemNoBD.file_postagem = postagem.file_postagem;
                postagemNoBD.id_ong = postagem.id_ong;

                await _context.SaveChangesAsync();
                return Ok(new { message = "Postagem atualizada com sucesso" });
            }
        }

        // Método HTTP DELETE para deletar uma postagem pelo ID
        [HttpDelete("{id_postagem}")]
        public async Task<IActionResult> DeletarPostagem(int id_postagem)
        {
            var postagem = await _context.postagens.FindAsync(id_postagem);

            if (postagem == null)
            {
                return NotFound(new { message = "Postagem não encontrada" });
            }

            _context.postagens.Remove(postagem);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}*/




using Microsoft.AspNetCore.Mvc;
using ServidorExemplo.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using MySqlConnector;
using WebApplication3.Models;

namespace WebApplication3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostagemController : ControllerBase
    {
        private readonly string _connectionString = "Server=thundercat.mysql.database.azure.com;Database=thundercat;User=adminthundercat;Password=thundercat2023!;SslMode=Required";

        [HttpGet]
        public async Task<IActionResult> GetAllPostagens()
        {
            var postagens = new List<Postagem>();

            using (var conn = new MySqlConnection(_connectionString))
            {
                await conn.OpenAsync();

                using (var command = conn.CreateCommand())
                {
                    command.CommandText = "SELECT file_postagem, id_postagem, id_ong FROM postagem";

                    using (var reader = await command.ExecuteReaderAsync())
                    {
                        while (await reader.ReadAsync())
                        {
                            var postagem = new Postagem
                            {
                                file_postagem = reader.GetString(0),
                                id_postagem = reader.GetInt32(1),
                                id_ong = reader.GetInt32(2),
                            };
                            postagens.Add(postagem);
                        }
                    }
                }
            }

            return Ok(postagens);
        }

        [HttpPost]
        public async Task<IActionResult> CriarPostagem(Postagem postagem)
        {
            using (var conn = new MySqlConnection(_connectionString))
            {
                await conn.OpenAsync();

                using (var command = conn.CreateCommand())
                {
                    if (postagem.id_postagem == 0)
                    {
                        command.CommandText = "INSERT INTO postagem (file_postagem, id_ong) VALUES (@file_postagem, @id_ong)";
                        command.Parameters.AddWithValue("@file_postagem", postagem.file_postagem);
                        command.Parameters.AddWithValue("@id_ong", postagem.id_ong);
                    }
                    else
                    {
                        command.CommandText = "UPDATE postagem SET file_postagem = @file_postagem, id_ong = @id_ong WHERE id_postagem = @id_postagem";
                        command.Parameters.AddWithValue("@file_postagem", postagem.file_postagem);
                        command.Parameters.AddWithValue("@id_ong", postagem.id_ong);
                        command.Parameters.AddWithValue("@id_postagem", postagem.id_postagem);
                    }

                    int rowCount = await command.ExecuteNonQueryAsync();
                    if (rowCount > 0)
                    {
                        return Ok(new { message = "Postagem adicionada/atualizada com sucesso" });
                    }
                    else
                    {
                        return StatusCode(500, new { message = "Erro ao adicionar/atualizar a postagem" });
                    }
                }
            }
        }

        [HttpDelete("{id_postagem}")]
        public async Task<IActionResult> DeletarPostagem(int id_postagem)
        {
            using (var conn = new MySqlConnection(_connectionString))
            {
                await conn.OpenAsync();

                using (var command = conn.CreateCommand())
                {
                    command.CommandText = "DELETE FROM postagem WHERE id_postagem = @id_postagem";
                    command.Parameters.AddWithValue("@id_postagem", id_postagem);

                    int rowCount = await command.ExecuteNonQueryAsync();
                    if (rowCount == 0)
                    {
                        return NotFound(new { message = "Postagem não encontrada" });
                    }

                    return NoContent();
                }
            }
        }
    }
}


