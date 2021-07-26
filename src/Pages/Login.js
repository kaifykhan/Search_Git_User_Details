import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Login = ({
  setData,
  setInputVal,
  setPassword,
  setFlag,
  getdata,
}) => {
  const handleChange = (e) => {
    setInputVal(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const history = useHistory();
  const handleClick = (e) => {
    setFlag(true);
    setData(true);
    history.push("/");
    setFlag(getdata);
  };
  return (
    <div>
      <form className="login">
        <h1>Login</h1>
        <input
          type="text"
          name="email"
          className="login-input"
          placeholder="Enter Your Name"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          className="login-input"
          placeholder="Password"
          onChange={handlePassword}
        />
        <input
          type="submit"
          value="Login"
          className="login-submit"
          onClick={handleClick}
          setFlag={setFlag}
        />
        <p className="login-help">
          <Link to="/">Forgot password?</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
