import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  greetings: 'Hello',
  state: null,
};

const GreetingSlice = createSlice({
  name: "greeting",
  initialState,
  reducers: {
    fetchSuccess(state, { payload }) {
      return {
        ...state,
        loading: false,
        greetings: payload,
      };
    },
    fetchFailure(state, { payload }) {
      return {
        ...state,
        loading: false,
        state: payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase("greeting/FETCH_LOADING", (state) => {
      return {
        ...state,
        loading: true,
      };
    });
  },
});

export const { fetchSuccess, fetchFailure } = GreetingSlice.actions;
export default GreetingSlice.reducer;
