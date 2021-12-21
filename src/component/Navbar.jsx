import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";
import { LoginContainer, ProfileContainer } from ".";
const Navbar = () => {
    const card = useSelector((state) => state.handleCart)
    const user = useSelector((state) => state.handleUser)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm" style={{height:"18rem"}}>
        <div className="container" >
        <SideBar/>
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            MUNISTORE.COM
          </NavLink>
       
          <div className="collapse navbar-collapse" id="navbarSupportedContent" height="300px">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
Anasayfa                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Ürünler
                </NavLink>
              </li>

            </ul>
            <SearchBar/>

     
            <div className="buttons">
                <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                   <i className="fa fa-shopping-cart me-1"></i> Sepetim ({card.length})</NavLink>
                {
                  user ? 
                  <ProfileContainer user={user} /> :
                  <LoginContainer />
                }
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
