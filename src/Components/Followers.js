import React from "react";

const Followers = ({calldata}) => {
  return (
    <div className="card mb-3 colorSetter">
      <div className="row no-gutters">
        <div className="col-md-4 rounded-edge">
          <div className="align-middle">
              <i class="fa fa-users"></i>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">{calldata && calldata.followers}</h3>
            <h6 className="card-title">Followers</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Followers;
