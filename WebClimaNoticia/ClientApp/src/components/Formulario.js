import { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import ConsumoApi from "./ConsumoApi"
import React from 'react'

const Formulario = () => {

    const [input, setinput] = useState('');

    const [ciudad, setciudad] = useState('');

    const cambiarvalor = (e) => {
        setinput(e.target.value);
    }

    const guardar = (e) => {
        e.preventDefault();
        setciudad(input);
        setinput('');
    }
    return (
        <div className="container-fluid mt-5 w-100">
            <div className="row w-100">
                <div className="col-4">
                    <h3 className="text-center">Formulario</h3>
                    <form className="card  p-2" onSubmit={guardar} autoComplete="off">
                        <label
                            for="inputCiudad"
                            className="form-label">
                            Ingrese una Ciudad para Buscar su Informacion
                        </label>
                        <input
                            className="form-control my-3"
                            id="inputCiudad"
                            placeholder="Ejemplo: Bogota"
                            type="text"
                            value={input}
                            onChange={cambiarvalor}
                        />
                        <button
                            type="submit"
                            className="btn btn-success w-100"
                        >
                            Buscar
                        </button>
                    </form>
                </div>
                <ConsumoApi ciudad={ciudad} />
            </div>
        </div>

    )
}


export default Formulario;