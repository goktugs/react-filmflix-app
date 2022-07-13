import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <CssBaseline />
      <main>
        <Switch>
          <Route path="/actors/:id" exact>
            <h1>Actors</h1>
          </Route>
          <Route path="/movies/:id" exact>
            <h1>Movies Information</h1>
          </Route>
          <Route path="/" exact>
            <h1>Movies</h1>
          </Route>
          <Route path="/profile/:id" exact>
            <h1>Profile</h1>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
