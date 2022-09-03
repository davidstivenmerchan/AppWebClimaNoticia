import React from 'react'

const InfoClima = ({ InfoClima }) => {

    return (
        <>
            <div className="card p-2 w-100">
                <h6>{InfoClima.ciudad}</h6>
                <p><strong>Pais: </strong>{InfoClima.pais}</p>
                <p><strong>Latitud: </strong>{InfoClima.latitud}</p>
                <p><strong>Longitud: </strong>{InfoClima.longitud}</p>
                <p><strong>Clima: </strong> {InfoClima.clima}</p>
                <p><strong>Descripcion: </strong>{InfoClima.descripcionclima}</p>
                <p><strong>Temperatura: </strong> (unidad Kelvin): {InfoClima.temperatura}</p>
                <p><strong>Humeda: </strong>{InfoClima.humeda}%</p>
            </div>
        </>
    )

}


export default InfoClima;

