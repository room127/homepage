import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import About from './About';

it('renders without crashing', () => {
  shallow(
    <MemoryRouter>
      <About />
    </MemoryRouter>
  );
});
