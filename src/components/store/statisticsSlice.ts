import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// // interface obj {
// //   firstName: string;
// //   lastName: string;
// //   email: string;
// // }

interface statisticsState {
  userName: any;
}

const initialState: statisticsState = {
  userName: "",
};

const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    getUserName(state, action: PayloadAction<any>) {
      state.userName = action.payload;
    },
  },
});

export const statisticsActions = statisticsSlice.actions;
export default statisticsSlice.reducer;
