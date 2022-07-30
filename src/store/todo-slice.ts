import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITodo {
  id: string;
  text: string;
  isComplete: boolean;
}

interface ITodos {
  todos: ITodo[];
}

const initialState: ITodos = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // Adding todo item
    addTodo(state, action: PayloadAction<{ text: string }>) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        isComplete: false,
      });
    },
    // Toggle isComplete state of todo item
    toggleIsComplete(state, action: PayloadAction<{ id: string }>) {
      const toggleTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      if (toggleTodo) toggleTodo.isComplete = !toggleTodo.isComplete;
    },
    // Delete todo item
    deleteTodo(state, action: PayloadAction<{ id: string }>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    // Edit todo item
    editTodo(state, action: PayloadAction<{ id: string; text: string }>) {
      const editTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      if (editTodo) editTodo.text = action.payload.text;
    },
  },
});

export const { addTodo, toggleIsComplete, deleteTodo, editTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
