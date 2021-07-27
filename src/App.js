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
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [searchinput, setSearchInput] = useState("");
  const [searchuser, setSearchUser] = useState(false);
  const [calldata, setCalldata] = useState();

  const callApi = async () => {
    let response = await axios.get(
      `https://api.github.com/users/${searchinput}`
    );
    if(response.status==200){
      setCalldata(response.data)
    }else{
      console.log(`Data Not found`);
    }
  };

  useEffect(() => {
    if (searchuser) {
      callApi();
      setSearchUser(false);
    }
  }, [searchuser]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <PrivateRoute data={data} exact path="/">
          <Home
              searchinput={searchinput}
              setSearchInput={setSearchInput}
              searchuser={searchuser}
              setSearchUser={setSearchUser}
              calldata={calldata} setCalldata={setCalldata}
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
              input={input}
              setInput={setInput}
              password={password}
              setPassword={setPassword}
              setData={setData}
              flag={flag}
              setFlag={setFlag}
            />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
