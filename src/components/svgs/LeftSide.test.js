import React from 'react';
import { shallow } from 'enzyme';

import LeftSide from './LeftSide';

it('renders without crashing', () => {
  shallow(<LeftSide />);
});
