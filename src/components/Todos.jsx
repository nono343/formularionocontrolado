import Todo from "./Todo"

const Todos = ({ todos, deleteTodo, updateTodo, }) => {

    return (
        <div>
            <ul className="list-group">
                {todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
                )
                )}
            </ul>
            {
                todos.length === 0 && (<li className="list-group-item text-center"> No hay tareas</li>)
            }
        </div>
    )
}

export default Todos