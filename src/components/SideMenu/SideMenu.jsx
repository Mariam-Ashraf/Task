import React from "react";
import { FaSearch } from "react-icons/fa";
import "./SideMenu.css";

class SideMenu extends React.Component {
  // state = {  }
  render() {
    return (
      <div className="col-3 d-md-block d-none flex-column ps-3">
        <div className="bg-white">
          <img
            src={require("../../imgs/logo.png")}
            alt="logo"
            className="w-75"
          />
        </div>
        <div className="flex-column py-4 bg-white pe-0 mt-3">
          <div className="item row align-items-baseline justify-content-start pb-4">
            <FaSearch className="icon col-3" style={{ color: "#b1bccf" }} />
            <p
              className="col-7 fs-5 fw-normal ps-0 m-0"
              style={{ color: "#b1bccf" }}
            >
              Dashboard
            </p>
          </div>
          <div className="item row align-items-baseline justify-content-start pb-4">
            <FaSearch className="icon col-3" style={{ color: "#b1bccf" }} />
            <p
              className="col-7 fs-5 fw-normal ps-0 m-0"
              style={{ color: "#b1bccf" }}
            >
              Properties(46)
            </p>
          </div>
          <div className="item row align-items-baseline justify-content-start pb-4">
            <FaSearch className="icon col-3" style={{ color: "#b1bccf" }} />
            <p
              className="col-7 fs-5 fw-normal ps-0 m-0"
              style={{ color: "#b1bccf" }}
            >
              Pending requests
            </p>
          </div>
          <div className="item row align-items-baseline justify-content-start pb-4">
            <FaSearch className="icon col-3" style={{ color: "#b1bccf" }} />
            <p
              className="col-7 fs-5 fw-normal ps-0 m-0"
              style={{ color: "#b1bccf" }}
            >
              Operatiion reports
            </p>
          </div>
          <div className="item row align-items-baseline justify-content-start pb-4">
            <FaSearch className="icon col-3" style={{ color: "#b1bccf" }} />
            <p
              className="col-7 fs-5 fw-normal ps-0 m-0"
              style={{ color: "#b1bccf" }}
            >
              Suppliers
            </p>
          </div>
          <div className="item row align-items-baseline justify-content-start pb-4">
            <FaSearch className="icon col-3" style={{ color: "#b1bccf" }} />
            <p
              className="col-7 fs-5 fw-normal ps-0 m-0"
              style={{ color: "#b1bccf" }}
            >
              User management
            </p>
          </div>
          <div className="item row align-items-baseline justify-content-start pb-4">
            <FaSearch className="icon col-3" style={{ color: "#b1bccf" }} />
            <p
              className="col-7 fs-5 fw-normal ps-0 m-0"
              style={{ color: "#b1bccf" }}
            >
              Reservation list
            </p>
          </div>
          <div className="item row align-items-baseline justify-content-start pb-4">
            <FaSearch className="icon col-3" style={{ color: "#b1bccf" }} />
            <p
              className="col-7 fs-5 fw-normal ps-0 m-0"
              style={{ color: "#b1bccf" }}
            >
              Settings
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SideMenu;
