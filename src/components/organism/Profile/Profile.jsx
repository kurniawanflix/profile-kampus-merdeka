import React from "react";
import {
  MDBCardBody,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBCardTitle,
  MDBCard,
} from "mdb-react-ui-kit";
import Avatar from "../../atom/Avatar/Avatar";

const Profile = () => {
  return (
    <MDBCard className="mb-4" style={{ width: "420px", height: "180px" }}>
      <MDBRow className="g-0 text-start">
        <MDBCol lg="4">
          <Avatar />
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
