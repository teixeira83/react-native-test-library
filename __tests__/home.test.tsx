import React from 'react';
import renderer from 'react-test-renderer';
import { Home } from '../src/pages';

test('renders correctly', () => {
  const tree = renderer.create(<Home title="Home Page" />).toJSON();

  expect(tree).toMatchSnapshot();
});
