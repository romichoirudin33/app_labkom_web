import React from "react";
import "../bootstrap.min.css";
import "../custom.css";

function Footer() {
  return (
    <div className="footer-box">
      <div className="row">
        <div className="col-sm-6">
          <img
            alt="react"
            src="https://png.pngtree.com/svg/20170719/react_1353128.png"
            className="footer"
          />
          <img
            alt="lumen"
            src="https://modess.io/public/images/lumen.png"
            className="footer"
          />
        </div>
        <div className="col-sm-6 text-right">
          <p className="title-footer">
            Labkom 2018-{new Date(Date.now()).getFullYear()}. Copyright
          </p>
          <p className="text-footer">
            Developer{" "}
            <a className="text-footer" href="http://github.com/romichoirudin33">
              @Romi
            </a>{" "}
            - Designed with the Hueman theme
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
