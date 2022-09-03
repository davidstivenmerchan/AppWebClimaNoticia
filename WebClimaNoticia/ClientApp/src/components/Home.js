import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h1>Hola!</h1>
        <p>Bienvenido a WebClimaNoticia, En esta App web podras:</p>
        <ul>
          <li>Buscar el clima de una ciudad especifica</li>
          <li>Ver alguna reciente noticia de una ciudad especifica</li>
          <li>Ver el <strong>Historial</strong> de Busqueda</li>
        </ul>
        <p>Algunos Datos de la Aplicacion:</p>
        <ul>
          <li>Esta aplicacion fue creada con las siguientes tecnologias: c#, react, js, css, html, bootstrap</li>
          <li>Apis Utilizadas: <a href="https://openweathermap.org/api">Api-Clima</a> y <a href="https://newscatcherapi.com/">Api-Noticia</a></li>
        </ul>
          <p>Aplicacion web creada por <code>David Merchan</code>.</p>
      </div>
    );
  }
}
