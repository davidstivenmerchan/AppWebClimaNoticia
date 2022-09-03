import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react"
import InfoClima from "./InfoClima";
import React from 'react'
import InfoNoticia from "./InfoNoticia";
import noticiabase from "../media/noticiabase.jpg"
const ConsumoApi = (props) => {

    const [climaciudad, setclimaciudad] = useState([]);
    const [noticiaciudad, setnoticiaciudad] = useState([]);

    const objetoMuestra = {
        ciudad: "ciudad buscada",
        latitud: "latitud en la que la ciudad se encuentra",
        longitud: "longitud en la que la ciudad se encuentra",
        clima: "clima de la ciudad buscada",
        descripcionclima: "descripcion sencilla del clima",
        temperatura: "temperatura en unidades kelvin de la ciudad",
        humeda: "humedad en porcentaje de la ciudad",
        pais: "Pais donde se encuentra la ciudad"
    }

    const objetoMuestraNoticia = {
        titulo: "Titulo de la Noticia",
        autor: "Persona que Escribio la noticia",
        fecha: "fecha de publicacion de la noticia",
        link: "#",
        media: noticiabase
    }


    useEffect(() => {
        setclimaciudad(objetoMuestra);
        setnoticiaciudad(objetoMuestraNoticia);
    }, [])

    useEffect(() => {
        getInformacionCiudad(props.ciudad);
    }, [props.ciudad])

    const getInformacionCiudad = async (ciudadbusqueda) => {

        if (ciudadbusqueda != '') {
            const url = `https://localhost:7287/api/ApiClimaNoticia/ClimaNoticia?ciudad=${encodeURI(ciudadbusqueda)}`;
            const respuesta = await fetch(url);
            const data = await respuesta.json();
            const dataClima = JSON.parse(data[0]);
            const dataNoticia = JSON.parse(data[1]);


            const nuevoObjetoClima = {
                ciudad: dataClima.name,
                latitud: dataClima.coord.lat,
                longitud: dataClima.coord.lon,
                clima: dataClima.weather[0].main,
                descripcionclima: dataClima.weather[0].description,
                temperatura: dataClima.main.temp,
                humeda: dataClima.main.humidity,
                pais: dataClima.sys.country
            }
            const nuevoObjetoNoticia = {
                titulo: dataNoticia.articles[0].title,
                autor: dataNoticia.articles[0].author,
                fecha: dataNoticia.articles[0].published_date,
                link: dataNoticia.articles[0].link,
                media: dataNoticia.articles[0].media,
            }
            setclimaciudad(nuevoObjetoClima);
            setnoticiaciudad(nuevoObjetoNoticia);
        }
    }




    return (
        <>
            <div className="col-4">
                <h3 className="text-center">Clima</h3>
                <InfoClima InfoClima={climaciudad} />
            </div>
            <div className="col-4">
                <h3 className="text-center">Noticia</h3>
                <InfoNoticia InfoNoticia={noticiaciudad} />
            </div>
        </>

    )
}

export default ConsumoApi;