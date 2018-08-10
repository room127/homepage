import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import Home from './Home';

it('renders without crashing', () => {
  shallow(
    <MemoryRouter>
      <Home />
    </MemoryRouter>);
});