import React from "react";
import { useRouteMatch, Link, Switch, Route } from "react-router-dom";
import Router1 from "../../Page/Router/Child/Router1";
import Router2 from "../../Page/Router/Child/Router2";
import Router3 from "../../Page/Router/Child/Router3";
import Main from "../../Page/Router/RouterShare/Main";
const Routers = () => {
  const { path, url } = useRouteMatch();
  return (
    <div>
      <h1>Router useRouterMatch 😘</h1>
      <br />
      <hr />
      <div style={{ textAlign: "center" }}>
        <h3>Full stack router 🤙</h3>
        <ul>
          <li>
            <Link to={`${url}/router1`}>Router 1</Link>
          </li>
          <li>
            <Link to={`${url}/router2`}>Router 2</Link>
          </li>
          <li>
            <Link to={`${url}/router3`}>Router 3</Link>
          </li>
        </ul>
        <Switch>
          <Route>
            <Route path={path} component={Main} />
            <Route path={`${path}/router1`} component={Router1} />
            <Route path={`${path}/router2`} component={Router2} />
            <Route path={`${path}/router3`} component={Router3} />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Routers;
