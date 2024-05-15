using Microsoft.EntityFrameworkCore;
using ServidorExemplo.Models;
using System.Data.Common;
using WebApplication2.Models;

namespace ServidorExemplo.Data
{

    public class ApiContext : DbContext
    {
        public DbSet<Usuario> usuario { get; set; }
        public DbSet<Ong> ongs { get; set; }
        public ApiContext(DbContextOptions<ApiContext> options) : base(options)
        {

        }
    }
}