import React from 'react'
import { Link } from 'react-router-dom'

export default function 
() {
  return (

   <div className="container">
    <div className="row">
        <div className="d-flex justify-content-between">
            <div>
            <h4 className='my-3 fw-bold'>All Blogs</h4>
            </div>
            <div>
            <i class="bi bi-card-list display-6 "></i>
            </div> 
        </div>
        <hr />
        <div className="col-12 col-md-3">
         <div class="card" style={{width:'18rem'}}>
         <img src="" class="card-img-top" alt="..."/>
         <div class="card-body">
         <h5 class="card-title">Title:{}</h5>
         <p class="card-text">Description:{}</p>
         <p className='card-text'>Author:{}</p>
         <Link to="view" class="btn btn-primary">Read More</Link>
        </div>
    </div>
        </div>
    </div>
   </div>
  )
}
