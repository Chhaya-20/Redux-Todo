
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./src/reducers/todoSlice";

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});
