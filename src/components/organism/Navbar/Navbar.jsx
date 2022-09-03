import React from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarBrand,
  MDBCollapse,
  MDBBadge,
} from "mdb-react-ui-kit";
import kemendikbud from "../../../assets/kemendikbud.png";
import kampusmerdeka from "../../../assets/kampusmerdeka.png";
import Button from "../../atom/Button/Button";

const Navbar = () => {
  return (
    <>
      <MDBNavbar expand="lg" bgColor="dark">
        <MDBContainer justify-content-center>
          <MDBNavbarBrand href="#">
            <img src={kemendikbud} height="30" alt="" loading="lazy" />
            <img src={kampusmerdeka} height="30" alt="" loading="lazy" />
          </MDBNavbarBrand>
          <MDBCollapse className="d-flex w-auto">
            <MDBNavbarNav className="ms-8 ">
              <MDBNavbarItem>
                <MDBNavbarLink className="text-white" href="#">
                  Beranda
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink className="text-white" href="#">
                  Program
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink className="text-white" href="#">
                  Notifikasi
                  <MDBBadge color="danger" dot />
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem className="me-4">
                <Button />
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default Navbar;
