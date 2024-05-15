using System.ComponentModel.DataAnnotations;

namespace WebApplication2.Models
{
    public class Ong
    {
        [Key]
        public int id_ong { get; set; }

        [Required]
        [MaxLength(50)]
        public string nome { get; set; }

        [Required]
        [MaxLength(255)]
        public string senha_hash { get; set; }

        [Required]
        [MaxLength(14)]
        public string cnpj { get; set; }

        [Required]
        [MaxLength(50)]
        public string email { get; set; }
    }
}
