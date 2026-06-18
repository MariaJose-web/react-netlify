import { useState, useEffect } from "react";


const ApiRender = function () {
    const [datosApi, setDatosApi] = useState({})

    useEffect(() => {
        async function obtenerDatos() {
            const respuesta = await fetch("https://api-render-6d3m.onrender.com/api");
            const datos = await respuesta.json();
            setDatosApi(datos);
        }
        obtenerDatos();
    }, []);

    return (
        <>
            <ul>
                <p>{datosApi.nombre}</p>
                <p>{datosApi.email}</p>
            </ul>
        </>
    )
};

export default ApiRender; 