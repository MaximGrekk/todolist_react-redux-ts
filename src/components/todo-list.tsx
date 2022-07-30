import { useCustomSelector } from "../hooks/redux-hooks";
import TodoItem from "./todo-item";
import { List } from "@mui/material";

const TodoList: React.FC = () => {
  const todos = useCustomSelector((state) => state.todos.todos);

  return (
    <List>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </List>
  );
};

export default TodoList;
