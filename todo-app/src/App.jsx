import React, { useState } from "react";
import Button from "./components/Button";
import TodoRow from "./components/TodoRow";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [todos, setTodos] = useState([
    { id: "1", text: "Good afternoon everyone" },
    { id: "2", text: "Have a good day" },
  ]);
  const [newTodo, setNewTodo] = useState("");
  const [message, setMessage] = useState("");

  const handleAddTodo = () => {
    if (newTodo === "") {
      return setMessage("Todo cannot be empty");
    }

    const newId = uuidv4();
    setTodos([...todos, { id: newId, text: newTodo }]);
    setNewTodo("");
    setMessage("");
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <div className="w-[400px] flex flex-col  justify-center mx-auto mt-20">
      <h1 className="text-3xl font-semibold p-4 bg-white">Todos</h1>
      {todos.map((todo) => {
        return (
          <TodoRow
            key={todo.id}
            id={todo.id}
            text={todo.text}
            onDelete={handleDeleteTodo}
          />
        );
      })}

      <div className="mt-2 bg-white flex items-center">
        <input
          type="text"
          name="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add task here ..."
          className="text-[#a7a8a8] bg-[#f0f1f1] outline-none p-2 rounded-md m-2 flex-grow"
        />
        <Button text="Add" size="big" onClick={handleAddTodo}>
          Add
        </Button>
      </div>
      {!todos.length > 0 && (
        <p className="text-center mt-2 text-green-500">
          Add something to todo list
        </p>
      )}
      {message && <p className="text-center mt-2 text-red-500">{message}</p>}
    </div>
  );
};

export default App;
