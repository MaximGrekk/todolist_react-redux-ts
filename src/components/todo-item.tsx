import { useState } from "react";
import { useCustomDispatch } from "../hooks/redux-hooks";
import { toggleIsComplete, deleteTodo, editTodo } from "../store/todo-slice";
import { ListItem, Checkbox, TextField, Button } from "@mui/material";

interface ITodoItemProps {
  id: string;
  text: string;
  isComplete: boolean;
}

const TodoItem: React.FC<ITodoItemProps> = ({ id, text, isComplete }) => {
  const dispatch = useCustomDispatch();
  const [todoText, setTodoText] = useState(text);

  return (
    <ListItem sx={{ alignItems: "stretch", gap: "8px" }}>
      <Checkbox
        checked={isComplete}
        onChange={() => dispatch(toggleIsComplete({ id }))}
      />
      <TextField
        sx={{ flex: 1 }}
        onChange={(e) => {
          setTodoText(e.target.value);
          dispatch(editTodo({ id, text: e.target.value }));
        }}
        value={todoText}
      />
      <Button
        onClick={() => dispatch(deleteTodo({ id }))}
        color="error"
        variant="outlined"
      >
        &times;
      </Button>
    </ListItem>
  );
};

export default TodoItem;
