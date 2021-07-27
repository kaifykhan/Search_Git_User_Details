import React from "react";
import Card from "../Components/Card";
import Followers from "../Components/Followers";
import Following from "../Components/Following";
import Gists from "../Components/Gists";
import Repo from "../Components/Repo";
import Search from "../Components/Search";

const Home = ({ calldata,searchinput,searchuser,setSearchInput,setSearchUser }) => {
  return (
    <div className="Home">
      <Search
        setSearchUser={setSearchUser}
        setSearchInput={setSearchInput}
        calldata={calldata}
      />
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <Repo calldata={calldata} />
          </div>
          <div className="col-sm-3">
            <Followers calldata={calldata} />
          </div>
          <div className="col-sm-3">
            <Following calldata={calldata} />
          </div>
          <div className="col-sm-3">
            <Gists calldata={calldata} />
          </div>
        </div>
      </div>
      <Card calldata={calldata}/>
    </div>
  );
};

export default Home;
