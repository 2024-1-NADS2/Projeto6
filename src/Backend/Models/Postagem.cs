using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WebApplication2.Models;

namespace WebApplication3.Models
{
    public class Postagem
    {
        [Key]
        public int id_postagem { get; set; }

        [Required]
        public string file_postagem { get; set; }

        [ForeignKey("Ong")]
        public int id_ong {  get; set; }
      //  public virtual Ong Ong { get; set; }
    }
}
