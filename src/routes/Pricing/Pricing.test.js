import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';

import Pricing from './Pricing';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <Pricing />
    </MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});