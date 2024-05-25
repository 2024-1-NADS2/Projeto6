using Api_ThuinderCat_Feacp.Dto;
using AutoMapper;
using WebApplication2.Models;

namespace AutoMapperUser
{
    public class AutoMapperOng : Profile
    {

        public AutoMapperOng()
        {
            CreateMap<Ong, OngDto>()
                .ReverseMap();
        }

    }
}
