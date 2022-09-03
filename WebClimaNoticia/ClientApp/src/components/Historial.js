import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react"
import TablaHistorial from "./TablaHistorial";


const Historial = () => {

    const [historial, sethistorial] = useState([]);

    const MostrarHistorial = async () => {

        const url = "https://localhost:7287/api/ApiClimaNoticia/Historial";
        const respuesta = await fetch(url);
        const data = await respuesta.json();
        const nuevoObjeto = data.map(x => {
            return {
                id: x.id,
                ciudad: x.ciudad,
                fecha: x.fecha
            }
        });
        sethistorial(nuevoObjeto);
    }
    useEffect(() => {
        MostrarHistorial();
    }, [])

    return (
        <div>
            <h3>Historial</h3>
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <TablaHistorial />
                <tbody>
                    {
                        historial.map(x => {
                            return (
                                <tr key={x.id}>
                                    <td>{x.id}</td>
                                    <td>{x.ciudad}</td>
                                    <td>{x.fecha}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Historial