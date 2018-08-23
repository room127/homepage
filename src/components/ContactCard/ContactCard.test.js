import React from 'react';
import { shallow } from 'enzyme';

import ContactCard from './ContactCard'

it('should render', () => {
  shallow(<ContactCard />)
});

it('should render name from props', () => {
  const card = shallow(<ContactCard name="testName123" />);
  expect(card.contains(<span><b>testName123</b></span>)).toEqual(true);
});

it('should render position from props', () => {
  const card = shallow(<ContactCard position="testName123" />);
  expect(card.contains(<span><i>testName123</i></span>)).toEqual(true);
});

it('should render image from props', () => {
  const card = shallow(<ContactCard img="url" name="test" />);
  expect(card.contains(<img className="profile-pic" src="url" alt="test" />)).toEqual(true);
});
