using System.ComponentModel.DataAnnotations;

namespace ServidorExemplo.Models
{
    public class Usuario
    {
        [Key]
        public int id_usuario { get; set; }

        [Required]
        [MaxLength(50)]
        public string nome { get; set; }

        [Required]
        [MaxLength(255)]
        public string senha_hash { get; set; }

        [Required]
        [MaxLength(50)]
        public string email { get; set; }
    }

}
