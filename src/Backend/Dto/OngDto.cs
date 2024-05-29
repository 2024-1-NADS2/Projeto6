using System.ComponentModel.DataAnnotations;

namespace Api_ThuinderCat_Feacp.Dto
{
    public class OngDto
    {
        [Required]
        [MaxLength(255)]
        public string senha_hash { get; set; }

        [Required]
        [MaxLength(50)]
        public string email { get; set; }
    }
}
