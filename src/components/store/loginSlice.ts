import { createSlice } from "@reduxjs/toolkit";

interface dashbordState {
  isLogin: boolean;
  token: string | any;
  isLoading: boolean;
  changeMailColor: boolean;
  changePassColor: boolean;
}

const initialState: dashbordState = {
  isLogin: false,
  token: "",
  isLoading: false,
  changeMailColor: false,
  changePassColor: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login(state) {
      state.token = localStorage.getItem("token");
      if (state.token) {
        state.isLogin = true;
      }
    },
    loadingHandler(state) {
      state.isLoading = !state.isLoading;
    },
    changeEmailColorHandler(state) {
      state.changeMailColor = !state.changeMailColor;
    },
    changePassColorHandler(state) {
      state.changePassColor = !state.changePassColor;
    },
  },
});

export const loginActions = loginSlice.actions;
export default loginSlice.reducer;
