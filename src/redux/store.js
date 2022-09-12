import { configureStore } from "@reduxjs/toolkit";
import collegeReducer from "../features/college/collegeSlice";

export default configureStore({
  reducer: {
    colleges: collegeReducer,
  },
});
