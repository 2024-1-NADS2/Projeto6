using AutoMapper;
using Dto;
using ServidorExemplo.Models;

namespace AutoMapperUser
{
    public class AutoMapperUsuario : Profile
    {

        public AutoMapperUsuario() 
        {
            CreateMap<Usuario, UsuarioDto>()
                .ReverseMap();
        }
        
    }
}
