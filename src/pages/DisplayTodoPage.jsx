import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTodo } from "../reducers/todoSlice";
import { useNavigate} from "react-router-dom";

function DisplayTodoPage() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  const add =()=>{
    history("/create")
  }
  function capitalizeFirstLetter(string) {
    return string.replace(/\b\w/g, (char) => char.toUpperCase());
  }

  return (
    <div>
      {todos.length === 0 ? (
        <div className="img">
           <div className="add">
         <h1>No Todos Yet</h1>
          <button onClick={add}>Add Todos</button>
         </div>
         <div>
          <img src="https://img.freepik.com/free-vector/businessman-holding-pencil-big-complete-checklist-with-tick-marks_1150-35019.jpg?w=996&t=st=1711450697~exp=1711451297~hmac=0dd069a86567ebe8be1c4eb7bd6913d4298e14541365670c190df085ae670831" alt="" />
          </div>
        
        </div>
      ) : (
        <div className="container">
          <h1>Todo List</h1>
          <ul>
            {todos.map((todo) => (
              <li className="li" key={todo.id}>
 <div>{capitalizeFirstLetter(todo.text)}</div>     
            <div className="list">
                  <button onClick={() => handleDelete(todo.id)} style={{ marginRight: "10px" }}>
                    Delete
                  </button>
                  <Link to={`/update/${todo.id}`}>
                    <button>Update</button>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
          <button onClick={add} className="center">Add More Todo</button>
        </div>
      )}
    </div>
  );
            }

            export default DisplayTodoPage;