import React from "react";
import { MDBBtn, 
    MDBIcon, 
    MDBCardImage 
} from "mdb-react-ui-kit";
import photos from "../../../assets/photos.png";

const Button = () => {
  return (
    <MDBBtn rounded color="light" className="ms-4" href="#">
      <MDBCardImage
        src={photos}
        className="rounded-circle float-start"
        alt=""
        style={{ width: "25px" }}
      />
      <MDBIcon fas icon="bars" className="ms-2" />
    </MDBBtn>
  );
};

export default Button;
