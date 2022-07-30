import React, { useState } from "react";
import { useCustomDispatch } from "./hooks/redux-hooks";
import { addTodo } from "./store/todo-slice";
import TodoForm from "./components/todo-form";
import TodoList from "./components/todo-list";
import { Container, Stack, Typography, Box } from "@mui/material";

const App: React.FC = () => {
  const [text, setText] = useState("");
  const dispatch = useCustomDispatch();

  const addTodoText = () => {
    if (text.trim().length) {
      dispatch(addTodo({ text }));
      setText("");
    }
  };

  return (
    <div className="App">
      <Container maxWidth="sm">
        <Box sx={{ marginTop: "25px" }}>
          <Stack spacing={2}>
            <Typography variant="h2" component="h1" align="center">
              Список дел
            </Typography>
            <TodoForm
              value={text}
              updateText={setText}
              addTodoText={addTodoText}
            />
            <TodoList />
          </Stack>
        </Box>
      </Container>
    </div>
  );
};

export default App;
