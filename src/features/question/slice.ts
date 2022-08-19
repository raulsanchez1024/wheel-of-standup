import { createSlice } from "@reduxjs/toolkit";

export type QuestionState = string;

const initialState: QuestionState = "";

export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    updateQuestion: (_, action) => action.payload,
  },
});

export const questionActions = questionSlice.actions;
export const questionReducer = questionSlice.reducer;
