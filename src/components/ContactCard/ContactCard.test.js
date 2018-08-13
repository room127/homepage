import React from 'react';
import { shallow } from 'enzyme';

import ContactCard from './ContactCard'

it('should render', () => {
  shallow(<ContactCard />)
});

it('should render name from props', () => {
  const card = shallow(<ContactCard name="testName123" />);
  expect(card.contains(<span>testName123</span>)).toEqual(true);
});
