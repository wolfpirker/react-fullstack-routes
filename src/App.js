import React from 'react';
import {
  BrowserRouter,
  Routes, // pre Version 6: "Switch"
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
      <Routes>
        <Route path="/posts/:id" component={<PostItem />} />
        <Route path="/posts" exact element={<Post />} />
        <Route path="/profile" exact element={<Profile />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;