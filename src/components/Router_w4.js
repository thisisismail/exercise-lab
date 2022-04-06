import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'
import GifuseStateBrowser_w4 from './GifuseStateBrowser_w4'
import GifuseStateBrowser_w4_trending from './GifuseStateBrowser_w4_trending'

function Router_w4() {
  return (
    <Router>
      <Switch>
        <Route path="/search">
          <Link to="/search">ORDINARY</Link>
          <br></br>
          <Link to="/trending">TRENDING</Link>
          <h1>ORDINARY</h1>
          <GifuseStateBrowser_w4/>
        </Route>
        <Route path="/trending">
          <Link to="/search">ORDINARY</Link>
          <br></br>
          <Link to="/trending">TRENDING</Link>
          <h1>TRENDING</h1>
          <GifuseStateBrowser_w4_trending/>
        </Route>
      </Switch>
    </Router>
  )
}

export {Router_w4 as Sample};
