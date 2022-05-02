import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./App.css";

const ViewProfile = () => {
  let location = useLocation();
  let data = location.state;
  const navigate = useNavigate();

  return (
    <div className="input">
      <div>
        <h2>User Profile</h2>
      </div>
      <div key={data.id}>
        Login : {data.login}<br/>
        {/* Node Id : {data.node_id}<br/> */}
        <img src={data.avatar_url}></img><br/>
        {/* <a href={data.url} /> */}
        {/* <img src={data.followers_url}></img>
        <img src={data.following_url}></img> */}

      </div>
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
