import React from "react";
import {
  MDBCardBody,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBCardImage,
  MDBCardTitle,
  MDBCard,
} from "mdb-react-ui-kit";
import photos from "../../../assets/photos.png";

const Profile = () => {
  return (
    <MDBCard className="mb-4" style={{ width: "420px", height: "180px" }}>
      <MDBRow className="g-0 text-start">
        <MDBCol lg="4">
          <MDBCardImage
            src={photos}
            className="rounded-circle float-start m-4"
            alt=""
            style={{ width: "100px" }}
          />
        </MDBCol>
        <MDBCol md="8">
          <MDBCardBody>
            <MDBCardTitle className="fw-bold">
              MUHAMMAD DAVID KURNIAWAN
            </MDBCardTitle>
            <MDBCardText className="text-muted">
              <p>Mahasiswa</p>
              <small className="text-muted">Universitas Dian Nuswantoro</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
};

export default Profile;
