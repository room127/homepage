import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div>
      <Router>
        {routes}
      </Router>
      <Footer />
    </div>
  );
}
