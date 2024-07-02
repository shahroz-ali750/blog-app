import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <nav class="navbar navbar-expand-lg background">
      <div class="container-fluid">
        <Link class="navbar-brand text-white fw-bold" to="/">
          Blog App
        </Link>
        <button
          class="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse d-flex justify-content-between"
          id="navbarNav">
          <div>
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link
                  class="nav-link active bg-light text-primary ms-2 rounded rounded-1"
                  aria-current="page"
                  to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item ">
                <Link
                  class="nav-link bg-light text-primary ms-5 rounded rounded-1"
                  to="create">
                  Create
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <ul className="navbar-nav">
              <li class="nav-item me-5">
                <Link
                  class="nav-link bg-light text-primary rounded rounded-1"
                  to="signin">
                  Sign In
                </Link>
              </li>
              <li class="nav-item me-2">
                <Link
                  class="nav-link bg-light text-primary rounded rounded-1"
                  to="register">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
