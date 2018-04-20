import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  // shallow renders the App component and goes no deeper.
  // If there are other components in App they will not be rendered.
  shallow(<App />);
});
