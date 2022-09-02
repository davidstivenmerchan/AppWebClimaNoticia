namespace ApiClimaNoticia.Utilidades
{
    public class ConsumirApiNoticia
    {
        private readonly IHttpClientFactory _httpClient;

        public ConsumirApiNoticia(IHttpClientFactory httpClient)
        {
            _httpClient = httpClient;
        }

        public string KeyApi = "&from=2022-08-02&sortBy=publishedAt&apiKey=806ac58329494335b05ba960df4c3b80&pageSize=1";
        public string UrlApi = "https://newsapi.org/v2/everything?q=";

        public async Task<string> getNoticia(string url)
        {
            var peticion = new HttpRequestMessage(HttpMethod.Get, url);
            
            var cliente = _httpClient.CreateClient();

            HttpResponseMessage respuesta = await cliente.SendAsync(peticion);

            if(respuesta.StatusCode == System.Net.HttpStatusCode.OK)
            {
                var jsonNoticia = respuesta.Content.ReadAsStringAsync();
                var jsonNoticiaString = jsonNoticia.ToString();

                return jsonNoticiaString;
            }

            return null;
        }
    }
}
