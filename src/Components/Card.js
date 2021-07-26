import React from "react";
import { Link } from "react-router-dom";

const Card = ({ getdata }) => { 
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <div className="card mb-3 colorSetter">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={getdata && getdata.avatar_url}
                  className="img-fluid rounded-start"
                  style={{ width: "400px", height: "300px" }}
                  alt="user"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{getdata && getdata.name}</h5>
                  <p className="card-text">{getdata && getdata.company}</p>
                </div>
              </div>
            </div>
            <div className="row g-0">
              <div className="col-12">
                <div className="card-body">
                  <h5 className="card-title">{getdata && getdata.bio}</h5>
                  <p className="card-text">{getdata && getdata.location}</p>
                </div>
              </div>
              <div className="col-12">
                <div className="card-body">
                  <h5 className="card-title text-start">
                    <button className="btn btn-outline-dark" type="button">
                      <Link to={getdata && getdata.url} className="card_a">GO TO GITHUB</Link>
                    </button>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6"></div>
      </div>
    </div>
  );
};

export default Card;
