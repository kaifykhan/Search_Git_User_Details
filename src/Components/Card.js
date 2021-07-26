import React from "react";

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
                  <h5 className="card-title">{getdata && getdata.login}</h5>
                  <p className="card-text">{getdata && getdata.location}</p>
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
