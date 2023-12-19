import { useState } from "react";
import Swal from "sweetalert2";

const Formulario = ({ addTodo }) => {

    const [todo, setTodo] = useState({
        title: "Todo 01",
        description: "Descripcion 01",
        state: "pendiente",
        priority: true,
    });

    const { title, description, state, priority } = todo

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim() || !description.trim()) {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Titulo y descripcion obligatorios!",
            });
        }

        addTodo({
            id: Date.now(),
            ...todo,
            state: state === "completado"
        })

        Swal.fire({
            position: "center",
            icon: "success",
            title: "Tu tarea ha sido agregada",
            showConfirmButton: false,
            timer: 1500
        });

    };

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target
        setTodo({
            ...todo,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="inserta titulo"
                className="form-control mb-2"
                name="title"
                value={title}
                onChange={handleChange}
            />
            <textarea
                placeholder="inserta descripcion"
                className="form-control mb-2"
                name="description"
                value={description}
                onChange={handleChange}
            />
            <div className="form-check mb-2">
                <input
                    type="checkbox"
                    className="form-check-input"
                    name="priority"
                    id="inputCheck"
                    checked={priority}
                    onChange={handleChange}
                />
                <label htmlFor="inputCheck">Dar prioridad</label>
            </div>
            <select
                className="form-select mb-2"
                name="state"
                value={state}
                onChange={handleChange}
            >
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>

            </select>
            <button type="submit" className="btn btn-primary">Agregar Tarea</button>
        </form>
    )

};

export default Formulario