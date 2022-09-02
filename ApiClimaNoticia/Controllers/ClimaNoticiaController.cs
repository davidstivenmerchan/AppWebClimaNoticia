using ApiClimaNoticia.Data;
using ApiClimaNoticia.Models;
using ApiClimaNoticia.Utilidades;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ApiClimaNoticia.Controllers
{
    [Route("api/ApiClimaNoticia")]
    [ApiController]
    public class ClimaNoticiaController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        private readonly ConsumirApiClima _apiClima;
        private readonly ConsumirApiNoticia _apiNoticia;

        public ClimaNoticiaController(ApplicationDBContext context, ConsumirApiClima apiClima, ConsumirApiNoticia apiNoticia)
        {
            _context = context;
            _apiClima = apiClima;
            _apiNoticia = apiNoticia;
        }

        [HttpGet("ClimaNoticia")]
        public async Task<List<string>> getClimaNoticia(string ciudad)
        {
            var respuestaClima = await _apiClima.getClima(_apiClima.UrlApi + ciudad + _apiClima.KeyApi);
            var respuestaNoticia = await _apiNoticia.getNoticia(_apiNoticia.UrlApi + ciudad);

            List<string> data = new List<string>();
            data.Add(respuestaClima);
            data.Add(respuestaNoticia);

            var historial = new Historial()
            {
                Ciudad = ciudad,
                Fecha = DateTime.Now.ToString()
            };
            _context.Historial.Add(historial);
            await _context.SaveChangesAsync();

            return data;
        }

        [HttpGet("Historial")]
        public async Task<ActionResult<List<Historial>>> getHistorial()
        {
            var Historial = await _context.Historial.ToListAsync();
            return Historial;
        }
    }
}
