import { FC } from 'react';
import { HashRouter } from 'react-router-dom';
import { Route, RouteProps, Switch } from 'react-router';

import { FaceApi, Home, Player } from 'pages';

const routes: RouteProps[] = [
  {
    component: Home,
    path: '/'
  },
  {
    component: FaceApi,
    path: '/face'
  },
  {
    component: Player,
    path: '/player'
  }
];

export const Routes: FC = () => {
  return (
    <HashRouter>
      <Switch>
        {routes.map((props, index) => (
          <Route
            exact={true}
            key={index}
            {...props}
          />
        ))}
      </Switch>
    </HashRouter>
  );
};