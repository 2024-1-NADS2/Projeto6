using System.ComponentModel.DataAnnotations;

namespace Api_ThuinderCat_Feacp.Dto
{
    public class NovaSenha
    {

        [Required]
        [MaxLength(255)]
        public string email { get; set; }

        /*[Required]
        [MaxLength(255)]
        public string senha_hash { get; set; }*/

        [Required]
        [MaxLength(255)]
        public string NovaSenha_hash { get; set; }
        
    }
}
