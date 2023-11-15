import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  type: string;
  todo: string;
  status: number;
}

interface TodoState {
  todo: Todo;
}

const initialState: TodoState = {
  todo: {
    type: "",
    todo: "",
    status: 0,
  },
};

export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todo = action.payload;
    },
  },
});

export const { addTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
