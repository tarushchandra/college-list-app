import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  updateCollegeDetails,
  updateColleges,
} from "../features/college/collegeSlice";

const CollegeList = ({ renderedColleges }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://universities.hipolabs.com/search?country=India")
      .then((res) => {
        const uniqueNames = [];
        const uniqueColleges = res.data.filter((college) => {
          if (!uniqueNames.includes(college.name)) {
            uniqueNames.push(college.name);
            return true;
          }
          return false;
        });
        dispatch(updateColleges(uniqueColleges));
      });
  }, []);

  const navigate = useNavigate();
  // let { domain } = useParams();

  return (
    <div className="college-list">
      <table className="table">
        <thead className="table-head">
          <tr>
            <th>College Name</th>
            <th>State</th>
            <th>Website</th>
            <th>Domain</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {renderedColleges.map((college, index) => {
            const locationAvailibilty = college["state-province"];
            return (
              <tr key={index}>
                <td
                  onClick={() => {
                    dispatch(updateCollegeDetails(college));
                    // domain = college.domains;
                    navigate(`/colleges/detail`);
                  }}
                  className="name"
                >
                  {college.name}
                </td>
                {locationAvailibilty === null ? (
                  <td className="location">N/A</td>
                ) : (
                  <td className="location">{locationAvailibilty}</td>
                )}
                <td className="website">
                  <a href={college.web_pages} target="_blank" rel="noreferrer">
                    <i
                      title={college.web_pages}
                      className="fa-solid fa-link"
                    ></i>
                  </a>
                </td>
                <td className="domain">{college.domains}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CollegeList;
