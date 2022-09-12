import React from "react";
import { useSelector } from "react-redux";
import { getCollegeDetails } from "../features/college/collegeSlice";

const CollegeDetail = () => {
  const collegeDetails = useSelector(getCollegeDetails);

  console.log(collegeDetails);

  const locationAvailibilty = collegeDetails["state-province"];

  return (
    <div className="college-detail">
      <table>
        <tr>
          <th>Name</th>
          <td>{collegeDetails.name}</td>
        </tr>
        <tr>
          <th>Website</th>
          <td>
            <a href={collegeDetails.web_pages} target="_blank" rel="noreferrer">
              {collegeDetails.web_pages}
            </a>
          </td>
        </tr>
        <tr>
          <th>State</th>
          {locationAvailibilty === null ? (
            <td>N/A</td>
          ) : (
            <td>{locationAvailibilty}</td>
          )}
        </tr>
        <tr>
          <th>Country</th>
          <td>{collegeDetails.country}</td>
        </tr>
        <tr>
          <th>Alpha Two Code</th>
          <td>{collegeDetails.alpha_two_code}</td>
        </tr>
        <tr>
          <th>Domain</th>
          <td>{collegeDetails.domains}</td>
        </tr>
      </table>
    </div>
  );
};

export default CollegeDetail;
