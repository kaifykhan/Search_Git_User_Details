import React from "react";

const Repo = ({calldata}) => {
  return (
    <div className="card mb-3 colorSetter">
      <div className="row no-gutters">
        <div className="col-md-4 rounded-edge">
            <i className="fa fa-file-code"></i>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">{calldata && calldata.public_repos}</h3>
            <h6 className="card-title">Repo</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repo;
