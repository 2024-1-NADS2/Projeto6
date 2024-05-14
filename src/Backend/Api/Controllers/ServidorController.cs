using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ServidorExemplo.Models;
using System.Threading.Tasks;
using MySqlConnector;
using System.Diagnostics;
using System;
using Microsoft.AspNetCore.Identity.Data;
using BCrypt.Net;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Api_ThunderCat.Data;

namespace ServidorExemplo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServidorController : ControllerBase
    {
        private readonly ApiContext _context;

        public ServidorController(ApiContext context)
        {
            _context = context;
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
                    command.CommandText = @"INSERT INTO usuario (nome, senha_hash, email) VALUES (""Filipi Pires"", ""200416"", ""fipida1020@gmail.com"")";
                    int rowCount = await command.ExecuteNonQueryAsync();
                    Debug.Write(String.Format("Number of rows inserted={0}", rowCount));
                }

            }


        }
    }
}
