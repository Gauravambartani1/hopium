import React from 'react'
import {BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
<<<<<<< HEAD
// import NewPost from './posts/pages/newPost';
import Creators from './creator/pages/Creators';
import MainNavigation from '../shared/components/MainNavigation';
import Homepage from './homepage/pages/Homepage';
import NewPost from './posts/pages/NewPost';
=======
import NewPost from './posts/pages/newPost';
import Creators from './creator/pages/creators';
import MainNavigation from '../shared/components/MainNavigation';
import Homepage from './homepage/pages/Homepage';
import UserPosts from './posts/pages/UserPosts';
 
>>>>>>> 75c32866205e3f31fadc5b3ac55cd039a5682879
import './index.css'
import Login from './login/Login';
const App = () => {

  return (
    <Router>
      <MainNavigation />
      <main>
      <Switch>
      <Route path="/" exact><Homepage></Homepage></Route>
      <Route path="/community" exact><Creators /></Route>
      <Route path="/:creatorId/posts" exact>
        <UserPosts />
      </Route>
      <Route path="/posts/new" exact><NewPost/></Route>
      <Route path="/login" exact><Login/></Route>
      <Redirect to="/" />
      </Switch>
      </main>
    </Router>
  )
}

export default App
