import React from 'react'
import {BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import NewPost from './posts/pages/newPost';
import Creators from './creator/pages/creators';
import MainNavigation from '../shared/components/MainNavigation';
import Homepage from './homepage/pages/Homepage';
 
import './App.css'
const App = () => {

  return (
    <Router>
      <MainNavigation />
      <main>
      <Switch>
      <Route path="/" exact><Homepage></Homepage></Route>
      <Route path="/community" exact><Creators /></Route>
      <Route path="/posts/new" exact><NewPost/></Route>
      <Redirect to="/"/>
      </Switch>
      </main>
    </Router>
  )
}

export default App
