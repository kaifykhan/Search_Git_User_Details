import React from "react";

const Following = ({calldata}) => {
  return (
    <div className="card mb-3 colorSetter">
      <div className="row no-gutters">
        <div className="col-md-4 rounded-edge">
            <i class="fa fa-user-plus"></i>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">{calldata && calldata.following}</h3>
            <h6 className="card-title">Following</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Following;
