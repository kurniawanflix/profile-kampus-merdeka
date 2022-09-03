import React from "react";
import {
  MDBCardBody,
  MDBListGroup,
  MDBListGroupItem,
  MDBIcon,
  MDBBadge,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardTitle,
} from "mdb-react-ui-kit";

const EditData = () => {
  return (
    <MDBCard style={{ width: "720px", height: "440px" }}>
      <MDBRow className="g-0 text-start">
        <MDBCol md="8">
          <MDBCardBody>
            <MDBCardTitle className="fw-bold">Lihat/Edit Profile</MDBCardTitle>
            <hr></hr>
            <MDBListGroup light>
              <MDBListGroupItem noBorders>
                <MDBIcon fas icon="user-circle" className="me-3" />
                Data Pribadi
              </MDBListGroupItem>
              <MDBListGroupItem noBorders>
                <MDBIcon fas icon="home" className="me-3" />
                Kontak Pribadi
              </MDBListGroupItem>
              <MDBListGroupItem noBorders>
                <MDBIcon fas icon="house-damage" className="me-3" />
                Kontak Darurat
              </MDBListGroupItem>
              <MDBListGroupItem noBorders>
                <MDBIcon fas icon="users" className="me-3" />
                Akun Media Sosial
              </MDBListGroupItem>
              <MDBListGroupItem noBorders>
                <MDBIcon fas icon="university" className="me-3" />
                Detail Rekening Bank
              </MDBListGroupItem>
              <MDBListGroupItem noBorders>
                <MDBIcon fas icon="file-alt" className="me-3" />
                Verifikasi NISN
                <MDBBadge className="ms-2 rounded-6" color="success">
                  Terverikasi!
                </MDBBadge>
              </MDBListGroupItem>
            </MDBListGroup>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
};

export default EditData;
