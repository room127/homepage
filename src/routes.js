import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

// Routes
import Home from './routes/Home/Home';
import About from './routes/About/About';
import Experience from './routes/Experience/Experience';
import Pricing from './routes/Pricing/Pricing';

export default (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/experience" component={Experience} />
      <Route exact path="/pricing" component={Pricing} />
    </Switch>
  </BrowserRouter>
);
