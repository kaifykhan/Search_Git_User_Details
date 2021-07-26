import React from "react";

const Gists = ({getdata}) => {
  return (
    <div className="card mb-3 colorSetter">
      <div className="row no-gutters">
        <div className="col-md-4 rounded-edge">
            <i class="fa fa-code"></i>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">{getdata && getdata.public_gists}</h3>
            <h6 className="card-title">Gists</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gists;
