import React from "react";
import { Link } from "react-router-dom";

const Card = ({ calldata }) => { 
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <div className="card mb-3 wd-manually colorSetter">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={calldata && calldata.avatar_url}
                  className="img-fluid rounded-start"
                  style={{ width: "200px", height: "100px", padding: "10px"}}
                  alt="user"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title text-start">{calldata && calldata.name}</h5>
                  <p className="card-text text-start m0">{calldata && calldata.company}</p>
                  <h5 className="card-title bio text-start">{calldata && calldata.bio}</h5>
                  <p className="card-text text-start">{calldata && calldata.location}</p>
                </div>
              </div>
            </div>
            <div className="row g-0">
              <div className="col-12">
                <div className="card-body">
                  <h5 className="card-title text-start">
                    <button className="btn btn-outline-dark" type="button">
                      <Link to={calldata && calldata.url} className="card_a">GO TO GITHUB</Link>
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
