using AutoMapper;
using System.ComponentModel.DataAnnotations;

namespace Dto
{
    public class UsuarioDto
    {

        [Required]
        [MaxLength(255)]
        public string senha_hash { get; set; } 

        [Required]
        [MaxLength(50)]
        public string email { get; set; } 
    }
}
