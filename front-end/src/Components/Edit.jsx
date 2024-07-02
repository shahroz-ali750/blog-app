import React from "react";

export default function Edit() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 my-4 background rounded rounded-3 p-3 text-white">
          <h3 className="text-center">Edit Your Blog</h3>
          <div>
            <form className="h-50 my-2 p-3">
              <input
                type="text"
                className="form-control my-4"
                placeholder="Edit Your Title"
              />
              <textarea
                className="form-control my-4"
                placeholder="Edit your Description"
                rows={13}
                name=""
                id=""></textarea>
            </form>
            <div className="text-center">
              <button className="btn btn-primary w-25">Edit Blog</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
