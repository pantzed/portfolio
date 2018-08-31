import * as React from 'react';
import './Navigation.css';


function Navigation() {
  return (
    <div>
      <div className="row d-flex justify-content-center mt-4">
        <div className="col-11">
          <span className="intro-header">Ed's Portfolio</span>
        </div>
      </div>
      <div className="row d-flex justify-content-center text-center screen-height mt-5">
        <div className="col-11 col-md-8 col-lg-6">
          <div className="row d-flex justify-content-center">
            <div className="col-6 nav-col-height py-3">
              <button className="btn btn-4 btn-nav">Introduction</button>
            </div>
            <div className="col-6 nav-col-height py-3">
            <button className="btn btn-3 btn-nav">Experience</button>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-6 nav-col-height py-3">
              <button className="btn btn-2 btn-nav">Projects</button>
            </div>
            <div className="col-6 nav-col-height py-3">
            <button className="btn btn-1 btn-nav">Contact</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation;
