import "bootstrap/dist/css/bootstrap.min.css"

const InfoNoticia = ({ InfoNoticia }) => {

    return (
        <>
            <div className="card col-4 w-100">
                <img src={InfoNoticia.media} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{InfoNoticia.titulo}</h5>
                    <p className="card-text"><strong>Autor: </strong>{InfoNoticia.autor}</p>
                    <p className="card-text"><strong>Fecha: </strong>{InfoNoticia.fecha}</p>
                    <a href={InfoNoticia.link} className="btn btn-primary">Ir a la noticia</a>
                </div>
            </div>
        </>
    )
}


export default InfoNoticia;

