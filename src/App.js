import React from 'react';
import {
  BrowserRouter,
  Switch, // in Version 6: "Routes"
  Route
} from 'react-router-dom';

import Header from './components/header'
import Home from './components/home';
import Post from './components/posts';
import Profile from './components/profile';
import PostItem from './components/postItem';

const App = () => {
  // Note: I used the docs of reactrouter since with the code of the course
  // it does not seem to work
  return (
    <BrowserRouter>
      <Header />

      {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <div className="container">
        <Switch>
          {/* <Redirect from="/profile" to="/"/> */}
          <Route path="/posts/:id" component={PostItem} />
          <Route path="/posts" component={Post} />
          <Route path="/profile" component={Profile} />
          <Route path="/" exact component={Home} />

          <Route render={() => (
            <h3>Ooops page not found !!</h3>
          )} />

        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;