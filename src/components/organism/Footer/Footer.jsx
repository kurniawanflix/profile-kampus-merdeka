import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import logo from "../../../assets/kemendikbud.png";

const Footer = () => {
  return (
    <MDBFooter bgColor="dark" className="text-center text-lg-start text-light">
      <section className="d-flex justify-content-center justify-content-lg-between border-bottom">
        <MDBContainer className="text-center text-md-start mt-4">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="4" className="mx-auto mb-2">
              <img
                src={logo}
                height="180"
                alt=""
                loading="lazy"
                className="mb-4"
              />
              <h5 className="mb-2 fw-bold">
                Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi RI
              </h5>
              <h5 className="fw-bold mb-4">
                {" "}
                Direktorat Jenderal Pendidikan Tinggi
              </h5>
              <p>Telepon: 021 57946104 </p>
              <p>Pusat Panggilan ULT DIKTI 126</p>
              <p className="mb-8">
                Jl. Jenderal Sudirman, Senayan, Jakarta 10270
              </p>
              <div className="mb-4">
                <a href="#!" className="me-4 text-light">
                  <MDBIcon fab icon="twitter" />
                </a>
                <a href="#!" className="me-4 text-light">
                  <MDBIcon fab icon="instagram" />
                </a>
                <a href="#!" className="me-4 text-light">
                  <MDBIcon fab icon="youtube" />
                </a>
                <a href="#!" className="me-4 text-light ">
                  <MDBIcon fab icon="facebook-f" />
                </a>
                <a href="#!" className="me-4 text-light">
                  <MDBIcon fas icon="globe" />
                </a>
              </div>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="4" className="mx-auto mb-4">
              <h6 className="fw-bold mb-4">Navigasi</h6>
              <p>
                <a href="#!" className="text-light">
                  Beranda
                </a>
              </p>
              <p>
                <a href="#!" className="text-light">
                  Tentang Kami
                </a>
              </p>
              <p>
                <a href="#!" className="text-light">
                  Berita
                </a>
              </p>
              <p>
                <a href="#!" className="text-light">
                  Pengumuman
                </a>
              </p>
              <p>
                <a href="#!" className="text-light">
                  FAQ
                </a>
              </p>
              <p>
                <a href="#!" className="text-light">
                  Program
                </a>
              </p>
              <p className="mb-6">
                <a href="#!" className="text-light">
                  Daftar
                </a>
              </p>
              <p>
                <a href="#!" className="text-light">
                  Copyright 2021 by Kementerian Pendidikan, Kebudayaan, Riset,
                  dan Teknologi RI
                </a>
              </p>
              <p>
                <a href="#!" className="text-light">
                  Photos by ITS, ITERA, and UI
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="3" className="mx-auto mb-4">
              <h6 className="fw-bold mb-4">Tautan Eksternal</h6>
              <p>
                <a href="#!" className="text-light">
                  Kampus Merdeka for Partners
                </a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
  );
};

export default Footer;
