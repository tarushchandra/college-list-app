import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementPageNumber,
  getTotalPages,
  incrementPageNumber,
  updateTotalPages,
} from "../features/college/collegeSlice";

const Pagination = ({ collegesPerPage, totalColleges, pageNumber }) => {
  const dispatch = useDispatch();
  dispatch(updateTotalPages(Math.ceil(totalColleges / collegesPerPage)));
  const totalPages = useSelector(getTotalPages);

  return (
    <div className="pagination">
      <div onClick={() => dispatch(decrementPageNumber())} className="nav">
        Prev
      </div>
      <div className="page-value">
        {pageNumber.toString()} of {totalPages.toString()}
      </div>
      <div onClick={() => dispatch(incrementPageNumber())} className="nav">
        Next
      </div>
    </div>
  );
};

export default Pagination;
