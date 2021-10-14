import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, RouteProps, Switch } from "react-router";

import { FaceApi, Home } from "pages";

const routes: RouteProps[] = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/face",
    component: FaceApi
  }
];

export const Routes: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((props, index) => (
          <Route
            exact={true}
            key={index}
            {...props}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
};