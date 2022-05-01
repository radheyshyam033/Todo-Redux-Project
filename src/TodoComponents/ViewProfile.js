import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./App.css";

const ViewProfile = () => {
  let location = useLocation();
  let data = location.state;
  const navigate = useNavigate();

  return (
    <div className="body">
      <div>
        <h2>User Profile</h2>
      </div>
      <div>Id : {data.id}</div>
      <div>Login : {data.login}</div>
      <br />
      <button
        onClick={() => {
          navigate("/showdata");
        }}
      >
        Back
      </button>
    </div>
  );
};
export default ViewProfile;
