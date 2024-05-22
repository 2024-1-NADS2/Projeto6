using Microsoft.EntityFrameworkCore;
using ServidorExemplo.Models;
using System.Data.Common;
using WebApplication2.Models;
using WebApplication3.Models;

namespace ServidorExemplo.Data
{

    public class ApiContext : DbContext
    {
        public DbSet<Usuario> usuarios { get; set; }
        public DbSet<Ong> ongs { get; set; }
        public DbSet<Postagem> postagens { get; set; }
        public ApiContext(DbContextOptions<ApiContext> options) : base(options)
        {

        }

        /*protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Postagem>()
                .HasOne(p => p.Ong)
                .WithMany(o => o.Postagens)
                .HasForeignKey(p => p.id_ong);
        }*/
    }
}