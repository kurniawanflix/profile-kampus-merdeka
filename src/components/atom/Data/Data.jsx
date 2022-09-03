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
} from "mdb-react-ui-kit";

const Data = () => {
  return (
    <MDBCard style={{ width: "420px" }}>
      <MDBRow className="g-0 text-start">
        <MDBCol md="12">
          <MDBCardBody>
            <MDBListGroup light>
              <MDBListGroupItem>
                <MDBIcon fas icon="user-cog" className="me-3" />
                Profile
              </MDBListGroupItem>
              <MDBListGroupItem>
                <MDBIcon fas icon="file-alt" className="me-3" />
                Lengkapi Dokumen
              </MDBListGroupItem>
              <MDBListGroupItem>
                <MDBIcon fas icon="money-check-alt" className="me-3" />
                Lacak Status Pendanaan
                <MDBBadge className="ms-2 rounded-6" color="success">
                  Baru!
                </MDBBadge>
              </MDBListGroupItem>
              <MDBListGroupItem>
                <MDBIcon fas icon="save" className="me-3" />
                Item Tersimpan
              </MDBListGroupItem>
              <MDBListGroupItem>
                <MDBIcon fas icon="lock" className="me-3" />
                Ganti Kata Sandi
              </MDBListGroupItem>
              <MDBListGroupItem>
                <MDBIcon fas icon="question" className="me-3" />
                FAQ
              </MDBListGroupItem>
              <MDBListGroupItem>
                <MDBIcon fas icon="sign-in-alt" className="me-3" />
                Keluar
              </MDBListGroupItem>
            </MDBListGroup>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
};

export default Data;
