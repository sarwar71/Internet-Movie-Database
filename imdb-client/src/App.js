import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import MovieDetails from './pages/MovieDetails'
import DirectorDetails from './pages/DirectorDetails'
import WriterDetails from './pages/WriterDetails'
import Navigation from './components/Navigation'
import MovieTrailers from './pages/MovieTrailers'
import Watchlist from './pages/Watchlist'
import Ratings from './pages/Ratings'
import CustomWatchLists from './pages/CustomWatchLists'
import CustomWatchListsDetails from './pages/CustomWatchListsDetails'
import CreateWatchList from './pages/CreateWatchList'  

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="container">
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/register' exact component={Register} />
          <Route path='/login' exact component={Login} />
          <Route path='/movie/details/:movie_id' exact component={MovieDetails} />
          <Route path='/director/details/:director_id' exact component={DirectorDetails} />
          <Route path='/writer/details/:writer_id' exact component={WriterDetails} />
          <Route path='/movie/trailer/:movie_id' exact component={MovieTrailers} />
          <Route path='/movie/watchlist' exact component={Watchlist} />
          <Route path='/movie/ratings' exact component={Ratings} />
          <Route path='/user/custom/watchlist/:user_id' exact component={CustomWatchLists} />
          <Route path='/user/custom/watchlist/details/:user_id/:watchlist_title' exact component={CustomWatchListsDetails} />
          <Route path='/user/custom/watchlist/create/:user_id' exact component={CreateWatchList} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
