import { useState } from "react";
import { useRef } from "react";

const NoControlado = () => {

    const form = useRef(null)
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(''); //cada vez que inicio formulario se reinicia el error


        const data = new FormData(form.current);
        const { title, description, state } = Object.fromEntries([
            ...data.entries(),
        ]);

        //validar datos
        if (!title.trim()) return setError("Rellena este campo");
        if (!description.trim()) return console.log("Rellena este campo")
        if (!state.trim()) return console.log("Rellena este campo")
    }

    

    return (
        <form onSubmit={handleSubmit} ref={form}>
            <input
                type="text"
                placeholder="Insertar titulo"
                className="form-control mb-2" 
                name="title"
                />

            <textarea
                className="form-control mb-2"
                placeholder="inserta descripcion" 
                name="descripcion"
                />

            <select 
            className="form-select mb-2"
            name="estado"
            defaultValue="completado"
            >
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>
            <button className="btn btn-primary" type="submit">Enviar</button>
            {
                error !== '' && error
            }
        </form>

    );
};

export default NoControlado