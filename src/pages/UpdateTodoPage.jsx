import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateTodo } from "../reducers/todoSlice";

function UpdateTodoPage() {
  const { id } = useParams();
  const todo = useSelector((state) =>
    state.todos.find((todo) => todo.id === parseInt(id))
  );
  const [text, setText] = useState(todo ? todo.text : "");
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateTodo({
        id: parseInt(id),
        text: text,
      })
    );
    alert("Updated Successfully....")
    history("/");
  };

  return (
    <div className="container">
      <h1>Update Todo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Update Todo</button>
      </form>
    </div>
  );
}

export default UpdateTodoPage;
