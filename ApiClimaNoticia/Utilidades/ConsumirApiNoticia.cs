namespace ApiClimaNoticia.Utilidades
{
    public class ConsumirApiNoticia
    {
        private readonly IHttpClientFactory _httpClient;

        public ConsumirApiNoticia(IHttpClientFactory httpClient)
        {
            _httpClient = httpClient;
        }

        public string UrlApi = "https://api.newscatcherapi.com/v2/search?page_size=1&q=";

        public async Task<string> getNoticia(string url)
        {
            var peticion = new HttpRequestMessage(HttpMethod.Get, url);
            {
                peticion.Headers.Add("x-api-key", "UNDIuqYGJsOe2BK96Y60aXrD78rJ8gRXuhq3U5yz-CM");
            }
            
            var cliente = _httpClient.CreateClient();

            HttpResponseMessage respuesta = await cliente.SendAsync(peticion);

            if(respuesta.StatusCode == System.Net.HttpStatusCode.OK)
            {
                var jsonNoticia = await respuesta.Content.ReadAsStringAsync();
                var jsonNoticiaString = jsonNoticia.ToString();

                return jsonNoticiaString;
            }

            return null;
        }
    }
}
