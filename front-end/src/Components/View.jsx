import React from "react";
import { Link } from "react-router-dom";

export default function View() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-5 p-2">
          <div className="card">
            <h5 className="card-title background text-white">{}</h5>
            <div className="card-body">
              <h5 className="card-title">{}</h5>
              <p className="card-text">{}</p>
              <p className="card-text text-white">Written By</p>
              <Link to={`/edit/$`}>Edit Blog</Link>
              <button className="btn btn-danger float-end">Delete Blog</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
