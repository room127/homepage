import React from 'react';
import { shallow } from 'enzyme';

import ContactCard from './contact-card'

it('should render', () => {
  shallow(<ContactCard />)
});
it('should render name from props', () => {
  const card = shallow(<ContactCard name="testName123" />);
  expect(card.contains(<h2>testName123</h2>)).toEqual(true);
});
it('should render image from props', () => {
  const card = shallow(<ContactCard img="testName123" />);
  expect(card.contains(<img src="testName123" alt="Profile" />)).toEqual(true);
});
