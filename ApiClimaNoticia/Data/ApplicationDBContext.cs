using ApiClimaNoticia.Models;
using Microsoft.EntityFrameworkCore;

namespace ApiClimaNoticia.Data
{
    public class ApplicationDBContext :DbContext
    {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options)
        {


        }

        public DbSet<Historial> Historial { get; set; }
    }
}
