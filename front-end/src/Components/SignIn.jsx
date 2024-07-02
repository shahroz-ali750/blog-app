import React from "react";

export default function SignIn() {
  return (
    <div className="container">
      <div className="row justify-content-center my-5">
        <div className="col-12 col-md-5 background  p-2 rounded rounded-3">
          <h2 className="text-center text-white">Sign In </h2>
          <form className="h-50 my-5 p-3">
            <input
              className="form-control my-4"
              placeholder="Enter Your Email"
              type="email"
            />
            <input
              className="form-control my-4"
              placeholder="Enter Your Password"
              type="password"
            />
          </form>
          <div className="text-center">
            <button className="btn btn-primary w-25">Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
}
