import React from 'react';
import { shallow } from 'enzyme';

import ContactCard from './ContactCard'

it('should render', () => {
  shallow(<ContactCard />)
});
it('should render name from props', () => {
  const card = shallow(<ContactCard name="testName123" />);
  expect(card.contains(<h3>testName123</h3>)).toEqual(true);
});
it('should render image from props', () => {
  const card = shallow(<ContactCard img="testName123" />);
  expect(card.contains(<img className="profile-pic" src="testName123" alt="Profile" />)).toEqual(true);
});
