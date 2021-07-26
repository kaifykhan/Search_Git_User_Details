import React from "react";
import Card from "../Components/Card";
import Followers from "../Components/Followers";
import Following from "../Components/Following";
import Gists from "../Components/Gists";
import Repo from "../Components/Repo";
import Search from "../Components/Search";

const Home = ({ getdata, searchuser }) => {
  return (
    <div className="Home">
      <Search getdata={getdata} searchuser={searchuser} />
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <Repo getdata={getdata} />
          </div>
          <div className="col-sm-3">
            <Followers getdata={getdata} />
          </div>
          <div className="col-sm-3">
            <Following getdata={getdata} />
          </div>
          <div className="col-sm-3">
            <Gists getdata={getdata} />
          </div>
        </div>
      </div>
      <Card />
    </div>
  );
};

export default Home;
