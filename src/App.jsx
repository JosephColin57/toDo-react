import { useState } from "react";

export default function App() {

  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  function addTodo() {
    setTodos([...todos, text]);
  }

  function onSubmit(event) {
    event.preventDefault();
    addTodo();
    setText('');
  }

  function removeTodo(index) {
    const newTodos = todos.filter((todo, idx) => idx !== index);
    setTodos(newTodos);
  }

  return (
    <main className="w-full min-h-screen flex flex-col">
      <form
        className="flex flex-row gap-2 justify-center p-5"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          className="p-2 rounded text-black w-full max-w-screen-sm"
          placeholder="Ingresa una Tarea"
          value={text}
          required
          onChange={(event) => setText(event.target.value)}
        />
        <button className="bg-orange-500 text-black/90 px-3 rounded"> Agregar </button>
      </form>

      <div className="max-w-screen-sm w-full mx-auto p-4 flex flex-col gap-1">
        {todos.length === 0 && <p className="text-black/50"> No hay tareas </p>}
        {todos.map((todo, index) => {
          return (
            <div
              key={`todo-${index}`}
              className="bg-white/10 rounded p-4 flex flex-row justify-between"
            >
              <div className="flex flex-row gap-2">
                <span className="select-none">{todo}</span>
              </div>
              <button
                className="text-red-200"
                onClick={() => removeTodo(index)}
              >
                <span className="hover:text-red-500">Eliminar</span>
              </button>
            </div>
          );
        })}
      </div>
    </main>
  );
}