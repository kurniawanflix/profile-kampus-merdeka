import React from "react";
import Profile from "../../atom/Profile/Profile";
import Data from "../../atom/Data/Data";
import EditData from "../../atom/EditData/EditData";

const Card = () => {
  return (
    <div className="grid" style={{ "--bs-columns": 2, "--bs-gap": "4rem" }}>
      <div className="d-flex p-4 justify-content-center">
        <div className="g-col-md-6 mb-4">
          <Profile />
          <Data />
        </div>

        <div className="ms-4">
          <EditData />
        </div>
      </div>
    </div>
  );
};

export default Card;
