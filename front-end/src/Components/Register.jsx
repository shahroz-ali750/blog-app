import React from "react";

export default function Register() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-5 background my-5 rounded rounded-3 p-3 ">
          <h2 className="text-center text-white">Registration Form</h2>
          <form className="h-50 my-5 p-3">
            <input
              type="text"
              className="form-control my-4"
              placeholder="Enter Your UserName"
            />
            <input
              type="email"
              className="form-control my-4"
              placeholder="Enter Your Email"
            />
            <input
              type="password"
              className="form-control my-4"
              placeholder="Enter Your Password"
            />
          </form>
          <div className="text-center">
            <button className="btn btn-primary w-25">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}
