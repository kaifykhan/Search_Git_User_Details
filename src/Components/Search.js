import React from "react";

const Search = ({ setsdata, setSearchUser, sdata, searchuser, getdata }) => {
  const handleChange = (e) => {
    setsdata(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setSearchUser(true);
  };
  return (
    <div className="container">
      <div className="row justify-content-center py-4">
        <div className="col-12 col-md-10 col-lg-8">
          <form className="card card-sm">
            <div className="card-body row no-gutters align-items-center">
              <div className="col">
                <input
                  className="form-control form-control-lg form-control-borderless"
                  type="text"
                  placeholder="Search topics or keywords"
                  setsdata={setsdata}
                  onChange={handleChange}
                />
              </div>
              <div className="col-auto">
                <button
                  className="btn btn-lg btn-dark"
                  type="submit"
                  setsdata={setsdata}
                  setSearchUser={setSearchUser}
                  sdata={sdata}
                  searchuser={searchuser}
                  onClick={handleClick}
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;