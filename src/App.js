import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Switch } from 'react-router-dom';

import useStyles from './components/styles';

import {
  Actors,
  Movies,
  MovieInformation,
  Navbar,
  Profile,
} from './components/index';

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route path="/actors/:id" exact>
            <Actors />{' '}
          </Route>
          <Route path="/movies/:id" exact>
            <MovieInformation />
          </Route>
          <Route path="/" exact>
            <Movies />
          </Route>
          <Route path="/profile/:id" exact>
            <Profile />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
