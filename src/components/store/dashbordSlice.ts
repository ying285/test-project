import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface dashbordState {
  showIcons: boolean;
  showAddMoveBtn: boolean;
  deleteCard: boolean;
}

const initialState: dashbordState = {
  showIcons: false,
  showAddMoveBtn: false,
  deleteCard: false,
};

const dashbordSlice = createSlice({
  name: "dashbord",
  initialState,
  reducers: {
    toggleDashbord(state) {
      if (state.deleteCard) {
        state.showIcons = false;
        state.deleteCard = false;
      } else {
        state.showIcons = !state.showIcons;
      }
    },
    showDeleteButton(state) {
      state.showAddMoveBtn = true;
    },
    deleteInterviewCard(state) {
      state.deleteCard = true;
      state.showAddMoveBtn = false;
      state.showIcons = false;
    },
  },
});

export const dashbordActions = dashbordSlice.actions;
export default dashbordSlice.reducer;
