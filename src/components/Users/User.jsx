import React from "react";
import { FaSearch } from "react-icons/fa";
import "./Users.css";

class Users extends React.Component {
  state = {
    users: [],
    btnOne: true,
    btnTwo: false,
    modalOpen: false,
  };
  componentDidMount() {
    fetch("https://gorest.co.in/public/v2/users")
      .then((res) => res.json())
      .then((users) => {
        this.setState({ ...this.state, users: users });
      });
  }

  activeUser = () => {
    this.setState({ ...this.state, btnOne: true, btnTwo: false });
  };
  registerUser = () => {
    this.setState({ ...this.state, btnOne: false, btnTwo: true });
  };

  toggleModal = () => {
    this.setState({ ...this.state, modalOpen: true });
  };

  render() {
    return (
      <div>
        <div className="col-12">
          <p className="fs-1 fw-bold">User management</p>
          <ul className="nav nav-tabs border-0 mb-4 border-bottom pb-3">
            <li className="nav-item border-0 bg-transparent">
              <a
                href="#active"
                className={
                  this.state.btnOne
                    ? "text-decoration-none px-4 active pb-3"
                    : "text-decoration-none px-4 none"
                }
                style={{ color: "#b1bccf" }}
                onClick={this.activeUser}
              >
                Active users
              </a>
            </li>
            <li className="nav-item border-0 bg-transparent">
              <a
                href="#register"
                className={
                  this.state.btnTwo
                    ? "text-decoration-none px-4 active pb-3"
                    : "text-decoration-none px-4 none"
                }
                style={{ color: "#b1bccf" }}
                onClick={this.registerUser}
              >
                Registered users
              </a>
            </li>
          </ul>

          <div className="input-group py-3 bg-white">
            <div className="input-group-text bg-white border-0 pe-3">
              <FaSearch style={{ color: "#b1bccf" }} />
            </div>
            <input
              type="text"
              className="form-control border-0 p-0"
              id="inlineFormInputGroupUsername"
              placeholder="Search name, ID, email...."
            />
          </div>

          <table className="table table-borderless">
            <thead>
              <tr>
                <th scope="col" className="fw-normal">
                  Name
                </th>
                <th scope="col" className="fw-normal">
                  ID
                </th>
                <th scope="col" className="fw-normal">
                  Email
                </th>
                <th scope="col" className="fw-normal">
                  Gender
                </th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user, index) => {
                return (
                  <tr className="bg-white " key={index}>
                    <td className="fw-bold text-black py-3 ps-4">
                      {user.name}
                    </td>
                    <td className="usersId py-3">{user.id}</td>
                    <td className="py-3 fw-bold">{user.email}</td>
                    <td className="py-3 fw-bold">{user.gender}</td>
                    <td className="text-end" width="fit-content">
                      <button
                        type="button"
                        className="border-0 bg-white text-danger fw-bold"
                      >
                        Delete
                      </button>

                      <button
                        type="button"
                        className="border-0 bg-white fw-bold ms-2"
                        data-bs-toggle="modal"
                        data-bs-target="#editModal"
                        style={{ color: "#ff5d25" }}
                        onClick={this.toggleModal}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div
          className="modal fade"
          id="editModal"
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
                    Edit User
                  </h3>
                  <p className="mb-1">Personal information</p>
                </div>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={this.toggleModal}
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
                  onClick={this.toggleModal}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn save-button text-light rounded-pill py-2"
                  onClick={this.toggleModal}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Users;
