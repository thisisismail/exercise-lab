/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import GifuseStateBrowser_w4 from './GifuseStateBrowser_w4'
import GifuseStateBrowser_w4_trending from './GifuseStateBrowser_w4_trending'
import GifBrowser_Redux from "../ReduxGifBrowser/GifBrowser_Redux.js";


function Router_w4() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Link to="/">ORDINARY</Link>
          <br></br>
          <Link to="/trending">TRENDING</Link>
          <h1>ORDINARY</h1>
          <GifBrowser_Redux/>
        </Route>
        <Route path="/trending">
          <Link to="/">ORDINARY</Link>
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
