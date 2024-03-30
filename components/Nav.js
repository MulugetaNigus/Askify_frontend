import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Assets/logo (2).png";

function Nav() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid d-flex flex-row align-items-center justify-content-between">
          <div className="title d-flex flex-row align-items-center justify-content-center">
            <Link to="/login" className="text-decoration-none">
              {/* <p
                className="navbar-brand text-primary"
                style={{
                  fontSize: "45px",
                  fontFamily: "sans-serif",
                  fontWeight: "bolder",
                }}
              >
                Askify
              </p> */}
              <img
                src={logo}
                alt="logo"
                className="img-fluid"
                style={{ width: "120px" }}
              />
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <div className="d-flex fe-bold gap-3 me-2">
              {/* <Link to="/login"> */}
              <button
                className="btn btn-primary px-3 fs-5"
                onClick={() => {
                  navigate("/login");
                  window.localStorage.setItem("NodeAuth", true);
                }}
              >
                Logout
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;