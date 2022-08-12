import { createSlice } from "@reduxjs/toolkit";

export type TeamState = Array<{
  option: string;
}>;

const initialState: TeamState = [
  { option: "Raul" },
  { option: "Dan" },
  { option: "Nate" },
  { option: "Lily" },
  { option: "Cindy" },
  { option: "Karen" },
  { option: "Renee" },
  { option: "Neeraj" },
  { option: "Jeremy" },
  { option: "Rosse" },
  { option: "Matt" },
  { option: "Anita" },
];

export const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    addTeamMember: (state, action) => {
      state.push(action.payload);
    },
    removeTeamMember: (state, action) =>
      state.filter((member) => member.option !== action.payload.option),
  },
});

export const teamActions = teamSlice.actions;
export const teamReducer = teamSlice.reducer;
