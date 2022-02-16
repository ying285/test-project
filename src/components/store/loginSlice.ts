import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    login(state, actions: PayloadAction<any>) {
      state.token = actions.payload;

      if (state.token === undefined) {
        alert("please enter a correct password or usename");
        state.isLogin = false;
      }

      if (state.token !== undefined) {
        state.isLogin = true;
      }
    },

    logout(state) {
      localStorage.removeItem("token");
      state.isLogin = false;
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
