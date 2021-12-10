import React from 'react';
import {
  BrowserRouter,
  Routes, // pre Version 6: "Switch"
  Route,
  Link
} from 'react-router-dom';

import Home from './components/home';
import Post from './components/posts';
import Profile from './components/profile';

const App = () => {
  // Note: I used the docs of reactrouter since with the code of the course
  // it does not seem to work
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Home</Link> -
        <Link to="/posts">Posts</Link> -
        <Link to={{
          pathname: '/profile',
          hash: '#francis',
          search: '?true=enabled'
        }}>Profile</Link>
        <hr />
      </header>

      {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Post />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;