import React from 'react';
import icon from '../assets/icon1.jpg';

const HeaderComponent = (props) => {

    const {activePage,handleActivePage}=props;

  return (
    <nav class="navbar navbar-expand-lg">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          <img
            src={icon}
            alt="L"
            width="40"
            height="34"
            class="d-inline-block align-text-top"
          />
          <spacer/> HACK 
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse justify-content-end "
          id="navbarNavAltMarkup"
        >
          <ul class="navbar-nav ">
            <li class="nav-item px-5 nav-link navbar-icon " onClick={()=>handleActivePage(0)} style={{color:activePage===0?'rgb(44, 128, 201)':''}}>
                Home
            </li>
            <li class="nav-item px-4 nav-link navbar-icon " onClick={()=>handleActivePage(1)} style={{color:activePage===1?'rgb(44, 128, 201)':''}} >
                Library
            </li>
            <li class="nav-item px-4 nav-link navbar-icon " onClick={()=>handleActivePage(2)} style={{color:activePage===2?'rgb(44, 128, 201)':''}} >
                Contribute
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderComponent;
