import React, { Component } from "react";
import logo from "./logo.svg";
// import './App.css';
import "./bootstrap.min.css";
import "./custom.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Content/Home";

import NotFoundPage from "./pages/NotFound";
import Login from "./Content/Auth/Login";
import HomeMahasiswa from "./Content/Mahasiswa/HomeMahasiswa";
import Footer from "./components/Footer";
import PengumumanDetail from "./Content/PengumumanDetail";
import JadwalToday from "./Content/Jadwal/JadwalToday";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div className="content">
            <div className="container-fluid">
              <div className="content-inner">
                <Switch>
                  <Route exact path="/" component={Home}></Route>
                  <Route path="/jadwal" component={JadwalToday}></Route>
                  <Route
                    path="/pengumuman"
                    component={PengumumanDetail}
                  ></Route>
                  <Route path="/login" component={Login}></Route>

                  <PrivateRoute
                    path="/mahasiswa"
                    component={HomeMahasiswa}
                  ></PrivateRoute>
                  <Route component={NotFoundPage} />
                </Switch>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

const fakeAuth = {
  isAuthenticated: false,
  authenticated(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

export default App;
