import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Blogs from './components/blogs';
import New from './components/blogs';
import Side from './components/navbar'

const App = () => {

  return (
    <div className="App">
      <Router>
        <Side />
        <Switch>
          <Route exact path="/" component={Blogs} />
          <Route path="/new" component={New} />
        </Switch>
      </Router>
    </div>
  );
}


export default App;
