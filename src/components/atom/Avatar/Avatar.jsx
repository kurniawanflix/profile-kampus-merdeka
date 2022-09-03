import React from "react";
import { MDBCardImage } from "mdb-react-ui-kit";
import photos from "../../../assets/photos.png";

const Avatar = () => {
  return (
    <MDBCardImage
      src={photos}
      className="rounded-circle float-start m-4"
      alt=""
      style={{ width: "100px" }}
    />
  );
};

export default Avatar;
