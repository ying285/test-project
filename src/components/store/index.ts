import { configureStore } from "@reduxjs/toolkit";
import dashbordReducer from "./dashbordSlice";
import loginReducer from "./loginSlice";

const store = configureStore({
  reducer: {
    dashbord: dashbordReducer,
    login: loginReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
