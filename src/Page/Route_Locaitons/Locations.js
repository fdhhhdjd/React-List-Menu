import React from "react";
import "./Location.css";
import {
  Link,
  useLocation,
  useHistory,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import { useState } from "react";
import Router1 from "../Router/Child/Router1";
import Router2 from "../Router/Child/Router2";
import Router3 from "../Router/Child/Router3";
import { useEffect } from "react";

const Locations = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const { path, url } = useRouteMatch();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === `${url}/router1`) {
      setActiveTab("Home");
    } else if (location.pathname === `${url}/router2`) {
      setActiveTab("AddContact");
    } else if (location.pathname === `${url}/router3`) {
      setActiveTab("About");
    }
  }, [location]);
  return (
    <>
      <div>
        <h1>Router location 😘</h1>
        <br />
        <hr />
        <div style={{ textAlign: "center" }}>
          <h3>Full stack router 🤙</h3>
          <div>
            <div className="header">
              <p className="logo">Contact App</p>
              <div className="header-right">
                <Link to={`${url}/router1`}>
                  <p
                    className={`${activeTab === "Home" ? "active" : ""}`}
                    onClick={() => setActiveTab("Home")}
                  >
                    Home
                  </p>
                </Link>
                <Link to={`${url}/router2`}>
                  <p
                    className={`${activeTab === "AddContact" ? "active" : ""}`}
                    onClick={() => setActiveTab("AddContact")}
                  >
                    Add Contact
                  </p>
                </Link>
                <Link to={`${url}/router3`}>
                  <p
                    className={`${activeTab === "About" ? "active" : ""}`}
                    onClick={() => setActiveTab("About")}
                  >
                    About
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <Switch>
            <Route>
              <Route path={`${path}/router1`} component={Router1} />
              <Route path={`${path}/router2`} component={Router2} />
              <Route path={`${path}/router3`} component={Router3} />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
};

export default Locations;
