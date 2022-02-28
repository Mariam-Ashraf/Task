import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";

class Header extends React.Component {
  // state = {  }
  render() {
    return (
      <div
        className="col-12 row bg-white pb-1"
        style={{ height: "fit-content" }}
      >
        <div className="input-group">
          <div className="input-group-text bg-white border-0">
            <FaSearch style={{ color: "#ff5d25" }} />
          </div>
          <input
            type="text"
            className="form-control border-0 p-0"
            id="inlineFormInputGroupUsername"
            placeholder="Search..."
          />
          <div className="input-group-text bg-white border-0">
            <button
              className="border-0 bg-transparent"
              data-bs-toggle="modal"
              data-bs-target="#addModal"
            >
              <FaPlus style={{ color: "#b1bccf" }} />
            </button>
            <div
              className="modal fade"
              id="addModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-fullscreen row">
                <div className="modal-content w-50 col-6 offset-6 ps-5">
                  <div className="modal-header border-0 pt-5 pb-0 align-items-baseline">
                    <div className="d-flex flex-column align-items-baseline">
                      <h3
                        className="modal-title fw-bold mb-3"
                        id="exampleModalLabel"
                      >
                        Add User
                      </h3>
                      <p className="mb-1">Personal information</p>
                    </div>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body col-8">
                    <form className="d-flex flex-column">
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control border-0 border-bottom ps-0"
                          id="name"
                          placeholder="Full name"
                        />
                      </div>
                      <select
                        className="form-select mb-3 ps-0 border-0 border-bottom"
                        aria-label="Default select example"
                        placeholder="Gender"
                        defaultValue="0"
                        style={{ color: "#6f7980" }}
                      >
                        <option value="0" disabled>
                          Gender
                        </option>

                        <option value="1">Male</option>
                        <option value="2">Female</option>
                      </select>
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control border-0 border-bottom ps-0 pb-2"
                          id="email"
                          placeholder="Email"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn bg-transparent close-button"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn save-button text-light rounded-pill py-2"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="input-group-text bg-white border-0 pe-4 mt-2">
            <IoNotificationsOutline style={{ color: "#b1bccf" }} />
          </div>
          <div className="d-flex flex-column align-items-end bg-white mt-3 ps-3">
            <h5 className="fw-bold mb-0">Ahmad Elasad</h5>
            <p className="mb-2" style={{ color: "#b1bccf" }}>
              Super admin
            </p>
          </div>
          <img
            src={require("../../imgs/admin.png")}
            alt="admin"
            className="ms-3 w-auto h-100"
          />
        </div>
      </div>
    );
  }
}

export default Header;
