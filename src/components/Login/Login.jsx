import React from "react";
import "./Login.css";

class Login extends React.Component {
  // state = {  }
  render() {
    return (
      <div className="row align-items-center">
        <div className="form col-lg-5 col-md-8 col-12 offset-lg-0 offset-md-2 py-4">
          <div className="px-md-5 px-2 text-center">
            <img
              src={require("../../imgs/logo.png")}
              alt="logo"
              className="w-100 mb-lg-5 mb-3 mt-lg-0 mt-5"
            />
            <h1 className="d-lg-none d-block fw-bold pb-5 mb-5">
              Welcome back!
            </h1>
          </div>
          <form className="mt-4 d-flex flex-column">
            <div className="mb-5 order-1">
              <input
                type="email"
                className="form-control border-0 border-bottom ps-0 pb-2"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-lg-5 mb-3 order-2">
              <input
                type="password"
                className="form-control border-0 border-bottom ps-0 pb-2"
                id="password"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="signIn-btn btn border-0 w-100 mt-3 mb-4 text-light order-lg-3 order-4"
            >
              Sign In
            </button>
            <div className="my-lg-3 mb-4 ps-lg-4 ps-0 form-check d-flex justify-content-between order-lg-4 order-3">
              <div className="d-lg-block d-none">
                <input
                  type="checkbox"
                  className="form-check-input rounded-0"
                  id="check"
                />
                <label className="form-check-label" htmlFor="check">
                  Remember me
                </label>
              </div>
              <a
                href="#forgetPassword"
                className="forgetPass fw-bold text-decoration-none"
              >
                Forget password?
              </a>
            </div>
          </form>
        </div>
        <div className="col-lg-7 pe-0">
          <img
            src={require("../../imgs/login.png")}
            alt="login background"
            className="w-100 d-lg-block d-none"
          />
        </div>
      </div>
    );
  }
}

export default Login;
