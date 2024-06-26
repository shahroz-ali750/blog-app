import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <nav class="navbar navbar-expand-lg background ">
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
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav ">
            <li class="nav-item text-white">
              <Link class="nav-link active text-white" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item ">
              <Link class="nav-link text-white" to="create">
                Create
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-white " to="signin">
                Sign In
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-white" to ='register'>Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
