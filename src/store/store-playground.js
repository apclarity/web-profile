import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../slice/movieSlice";

export const storePlayground = configureStore({
  reducer: {
    movies: movieReducer,
  },
});
