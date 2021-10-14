import { Route, RouteProps, Switch } from "react-router";
import { Home } from "pages";
import { FC } from "react";
import { BrowserRouter } from "react-router-dom";

const routes: RouteProps[] = [
  {
    path: "/",
    component: Home
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