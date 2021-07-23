import React, {FC, ReactElement} from 'react';
import {Route, Switch} from 'react-router-dom';

import Authorization from '../screens/Authorization';
import AuthorizationRegistration from '../screens/Authorization/AuthorizationRegistration';
import AuthorizationLogin from '../screens/Authorization/AuthorizationLogin';

const Router: FC = (): ReactElement => {
  return (
    <Switch>
      {/* Auth routes */}
      <Route path="/authorization" exact component={Authorization}/>
      <Route path="/sign-up" exact component={AuthorizationRegistration}/>
      <Route path="/log-in" exact component={AuthorizationLogin}/>

      {/* All */}
      {/*<Route path="/" component={Authorization}/>*/}
    </Switch>
  );
};

export default Router;
