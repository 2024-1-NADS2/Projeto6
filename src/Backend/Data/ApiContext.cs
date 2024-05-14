using Microsoft.EntityFrameworkCore;
using ServidorExemplo.Models;
using System.Data.Common;


namespace Api_ThunderCat.Data
{
    public class ApiContext:DbContext
    {
        public DbSet<Usuario> usuario { get; set; }
        public ApiContext(DbContextOptions<ApiContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
