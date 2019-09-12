import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../bootstrap.min.css";
import "../custom.css";

const bigNav = {
  backgroundColor: "#454e5c"
};

const navLink = {
  color: "#ccc"
};

class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="central-header">
          <div className="logo">
            <p className="site-title">
              <Link to="/">Labkom</Link>
            </p>
            <p className="site-description">
              Laboratorium Komputer STMIK Bumigora Mataram
            </p>
          </div>
        </div>

        <div style={bigNav}>
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-custom">
              <div className="collabse navbar-collabse">
                <ul className="navbar-nav ">
                  <li className="nav-item">
                    <Link className="nav-link" style={navLink} to="/">
                      Pengumuman
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" style={navLink} to="/jadwal">
                      Jadwal
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" style={navLink} to="/mahasiswa">
                      Mahasiswa
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" style={navLink} to="/admin">
                      Admin
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
