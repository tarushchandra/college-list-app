import React from "react";
import { useSelector } from "react-redux";
import {
  getColleges,
  getPageNumber,
  getSearchText,
} from "../features/college/collegeSlice";
import CollegeList from "./CollegeList";
import Pagination from "./Pagination";
import Search from "./Search";

const Home = () => {
  const collegesPerPage = 10;
  const colleges = useSelector(getColleges);
  const pageNumber = useSelector(getPageNumber);
  const searchText = useSelector(getSearchText);

  const filteredColleges = colleges.filter((college) => {
    return college.name.toLowerCase().includes(searchText.toLowerCase());
  });

  const indexOfLastCollege = pageNumber * collegesPerPage;
  const indexOfFirstCollege = indexOfLastCollege - collegesPerPage;
  const renderedColleges = filteredColleges.slice(
    indexOfFirstCollege,
    indexOfLastCollege
  );
  return (
    <div>
      <Search />
      <CollegeList renderedColleges={renderedColleges} />
      <Pagination
        totalColleges={filteredColleges.length}
        collegesPerPage={collegesPerPage}
        pageNumber={pageNumber}
      />
    </div>
  );
};

export default Home;
