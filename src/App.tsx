import React, { useEffect } from 'react';
import { Switch, Route, Link, useHistory } from "react-router-dom";
import { Login, OrganizationUsers } from './pages';
import { connect } from 'react-redux';

export const App = (state: any) => {
  const isLoggedIn = state.login.isLogin;
  const history = useHistory();

  const routes = [
    { path: '/', component: <Login /> },
    { path: '/users', component: <OrganizationUsers /> }
  ];

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/users');
    } else {
      history.push('/');
    }
  }, [isLoggedIn]);

  return (
    <Switch>
      {routes.map((route: { path: string, component: React.ReactNode }) => {
        return (
          <Route key={route.path} exact path={route.path}>
            {route.component}
          </Route>
        )
      })}
    </Switch>
  );
};

const mapStateToProps = (state: any) => ({
  login: state.login
});

export default connect(mapStateToProps)(App);
