import React, {Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Users from './components/users/Users';
import Home from './components/Home';
import UserState from './context/userState';




function App() {
  return (
    <Fragment>
      <UserState>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/users" component={Users}/>
          </Switch>
        </Router>
      </UserState>
    </Fragment>
  );
}

export default App;
