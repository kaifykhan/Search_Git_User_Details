import React from "react";
const Search = ({setSearchUser,setSearchInput,searchuser,searchinput,calldata }) => {
  const handleChange = (e) => {
    setSearchInput(e.target.value);
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
                  onChange={handleChange}
                />
              </div>
              <div className="col-auto">
                <button
                  className="btn btn-lg btn-dark"
                  type="submit" onClick={handleClick} >
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