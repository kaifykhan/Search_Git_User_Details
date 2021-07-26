import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import axios from "axios";

function App() {
  const [data, setData] = useState(false);
  const [input, setInputVal] = useState("");
  const [pass, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [getdata, setGetData] = useState();
  const [sdata, setsdata] = useState("");
  const [searchuser, setSearchUser] = useState(false);
  const apiCall = async () => {
    let response = await axios.get(`https://api.github.com/users/${data}`);
    console.log(response.data);
    setGetData(response.data);
  };
  useEffect(() => {
    apiCall();
    setSearchUser(false);
  }, []);
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <PrivateRoute data={data} exact path="/">
            <Home
              sdata={sdata}
              setsdata={setsdata}
              searchuser={searchuser}
              setSearchUser={setSearchUser}
              getdata={getdata}
              setGetData={setGetData}
            />
          </PrivateRoute>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
          <Route exact path="/login">
            <Login
              setInputVal={setInputVal}
              setPassword={setPassword}
              setFlag={setFlag}
              setData={setData}
              flag={flag}
              data={data}
            />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
