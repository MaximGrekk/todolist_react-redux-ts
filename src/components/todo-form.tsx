import { TextField, Button, Box, Stack } from "@mui/material";

interface ITodoFormProps {
  value: string;
  updateText: (str: string) => void;
  addTodoText: () => void;
}

const TodoForm: React.FC<ITodoFormProps> = ({
  value,
  updateText,
  addTodoText,
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTodoText();
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Stack spacing={2}>
          <TextField
            id="outlined-basic"
            label="Дело"
            variant="outlined"
            value={value}
            placeholder="Выучить Redux..."
            onChange={(e) => updateText(e.target.value)}
          />
          <Button sx={{ padding: "10px" }} type="button" variant="outlined">
            Добавить дело
          </Button>
        </Stack>
      </Box>
    </form>
  );
};

export default TodoForm;
