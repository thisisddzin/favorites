import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Favorites from './pages/Favorites';

import GlobalStyle from './style/GlobalStyle';

const App = () => (
  <BrowserRouter>
    <Fragment>
      <GlobalStyle />
      <Switch>
        <Route exact path ='/' component={Main} />
        <Route exact path ='/favorites' component={Favorites} />
      </Switch>
    </Fragment>
  </BrowserRouter>
)

export default App;
