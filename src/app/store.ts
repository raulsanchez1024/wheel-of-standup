import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { questionReducer } from "../features/question/slice";
import { teamReducer } from "../features/team/slice";

export const store = configureStore({
  reducer: {
    question: questionReducer,
    team: teamReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
