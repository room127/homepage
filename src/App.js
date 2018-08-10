import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';

export default function App() {
  return (
    <div>
      <Router>
        {routes}
      </Router>
    </div>
  );
}
