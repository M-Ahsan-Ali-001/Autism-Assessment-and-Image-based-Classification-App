// __tests__/bottomNavigation.test.tsx

import React from 'react';
import { render } from '@testing-library/react-native';
import BottomNavigation from '../src/components/BottomNavigation';

describe('BottomNavigation', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <BottomNavigation
        buttSelector={1}
        setbuttSelector={() => {}}
        setScreen={() => {}}
        navigation={{ navigate: jest.fn(), reset: jest.fn() }}
      />
    );

    const container = getByTestId('container');
    expect(container).toBeDefined();
  });
});
