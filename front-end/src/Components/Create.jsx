import React from "react";

export default function Create() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 my-3 background rounded rounded-3 p-3 text-white">
          <h3 className="text-center">Create Blog</h3>

          <form>
            <input
              type="text"
              className="form-control my-4"
              placeholder="Write Your Blog Title"
            />
            <textarea
              className="form-control my-4"
              rows={13}
              placeholder="Write Your Blog Description"
              name=""
              id=""></textarea>
            <input
              type="text"
              className="form-control my-4"
              placeholder="Author Name"
            />
          </form>
          <div className="text-center">
            <button className="btn btn-primary w-25">Create Blog</button>
          </div>
        </div>
      </div>
    </div>
  );
}
