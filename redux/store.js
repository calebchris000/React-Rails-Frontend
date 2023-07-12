import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import GreetingSlice from "./GreetingSlice";

const store = configureStore({
  reducer: {
    greeting: GreetingSlice
  },
  middleware: [thunk],
});

export default store;
