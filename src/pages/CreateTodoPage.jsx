import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../reducers/todoSlice";
import { useNavigate} from "react-router-dom";


function CreateTodoPage() {
  const history = useNavigate();

  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: Date.now(), 
        text: todo,
      })
    );
    alert("Created Successfully...")
    history("/");
  };

  return (
    <div className="container">
      <h1>Create Todo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default CreateTodoPage;
