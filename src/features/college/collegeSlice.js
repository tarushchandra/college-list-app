import { createSlice } from "@reduxjs/toolkit";

const collegeSlice = createSlice({
  name: "colleges",
  initialState: {
    colleges: [],
    collegeDetails: {},
    pageNumber: 1,
    totalPages: null,
    searchText: "",
  },
  reducers: {
    updateColleges: (state, action) => {
      state.colleges = action.payload;
    },
    updateCollegeDetails: (state, action) => {
      state.collegeDetails = action.payload;
    },
    updateTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    incrementPageNumber: (state) => {
      if (state.pageNumber < state.totalPages) {
        state.pageNumber = state.pageNumber + 1;
      }
    },
    decrementPageNumber: (state) => {
      if (state.pageNumber > 1) {
        state.pageNumber = state.pageNumber - 1;
      }
    },
    updateSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const getColleges = (state) => state.colleges.colleges;
export const getCollegeDetails = (state) => state.colleges.collegeDetails;
export const getPageNumber = (state) => state.colleges.pageNumber;
export const getTotalPages = (state) => state.colleges.totalPages;
export const getSearchText = (state) => state.colleges.searchText;
export const {
  updateColleges,
  updateCollegeDetails,
  updateTotalPages,
  incrementPageNumber,
  decrementPageNumber,
  updateSearchText,
} = collegeSlice.actions;
export default collegeSlice.reducer;
