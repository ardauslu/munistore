import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/action";
export function LoginContainer(props) {
    return <>
               <NavLink to="/login" className="btn btn-outline-dark">
                   <i className="fa fa-sign-in me-1"></i> Giriş Yap</NavLink>
                <NavLink to="/register" className="btn btn-outline-dark ms-2">
                   <i className="fa fa-user-plus me-1"></i> Kayıt Ol</NavLink>
    
    </>
}


export function ProfileContainer(props) {
  const dispatch = useDispatch();
  function onLogout() {
      dispatch(logout());
  }

  return <>
             <NavLink to="/profile" className="btn btn-outline-dark ms-2">
                 <i className="fa fa-user-plus me-1"></i>{props.user.name}</NavLink>
              <NavLink onClick={onLogout} to="/logout" className="btn btn-outline-dark ms-2">
                 <i className="fa fa-user-plus me-1"></i>Çıkış Yap</NavLink>
  
  </>
}
