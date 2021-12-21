import React from "react";
import Products from "./Products";
import SearchBar from "./SearchBar";

const Home = ({ user }) => {
  return (

    <div className="hero">
      <div className="card bg-dark text-white border-5 " >
        <img src="/assets/bg.jpg" className="card-img" alt="Background" />

        <div className="card-img-overlay  d-flex flex-column justify-content-center">
          <div className="container ">
            <h5 className="card-title display-3 fw-bolder mb-7">YENİ SEZON ÜRÜNLERİ</h5>
            <p className="card-text lead fs-2">
              TRENDLERİ TAKİP ET
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
