import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarBrand,
  MDBCollapse,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import kemendikbud from "../../../assets/kemendikbud.png";
import kampusmerdeka from "../../../assets/kampusmerdeka.png";

const Navbar = () => {
  const [showNavColor] = useState(false);

  return (
    <>
      <MDBNavbar expand="lg" dark bgColor="dark">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">
            <img src={kemendikbud} height="30" alt="" loading="lazy" />
            <img src={kampusmerdeka} height="30" alt="" loading="lazy" />
          </MDBNavbarBrand>
        </MDBContainer>
        <MDBCollapse show={showNavColor} navbar id="navbarColor01">
          <MDBNavbarNav className="me-auto mb-2 mb-lg-0">
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
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className="me-4">
              <MDBBtn rounded color="light" className="ms-4">
                <MDBNavbarLink className="text-dark" href="#">
                  <MDBIcon fas icon="bars" />
                </MDBNavbarLink>
              </MDBBtn>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </>
  );
};

export default Navbar;
