namespace ApiClimaNoticia.Utilidades
{
    public class ConsumirApiClima
    {
        private readonly IHttpClientFactory _httpClient;

        public ConsumirApiClima(IHttpClientFactory httpClient)
        {
            _httpClient  = httpClient;
        }

        public string KeyApi = "&appid=21492235f1b6aead28a0692eb11d6870";
        public string UrlApi = "https://api.openweathermap.org/data/2.5/weather?q=";

        public async Task<string> getClima(string url)
        {
            var peticion = new HttpRequestMessage(HttpMethod.Get, url);

            var cliente = _httpClient.CreateClient();

            HttpResponseMessage respuesta = await cliente.SendAsync(peticion);

            if (respuesta.StatusCode == System.Net.HttpStatusCode.OK)
            {
                var jsonClima = await respuesta.Content.ReadAsStringAsync();
                var jsonClimaString = jsonClima.ToString();

                return jsonClimaString;
            }

            return null;
        }
    }
}
