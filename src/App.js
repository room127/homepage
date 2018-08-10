import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import ContactCard from "./components/contact-card";
import routes from './routes';

export default function App() {
  return (
    <div>
      <Router>
        {routes}
      </Router>
      <ContactCard name="Dunky" img="https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg" />
    </div>
  );
}
