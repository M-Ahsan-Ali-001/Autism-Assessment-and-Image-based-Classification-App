// __tests__/cardButton.test.tsx

import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import CardButton from '../src/components/CardButton';

describe('CardButton', () => {
  it('renders correctly', () => {
    const mockNavigation = {
      navigate: jest.fn(),
    };

    const {getByTestId, getByText} = render(
      <CardButton
        name="Test Button"
        action="Test Action"
        imgpath={1}
        nav="TestScreen"
        navigation={mockNavigation}
        seinsPop={() => {}}
        insNO={1}
        seinsPopPG={() => {}}
      />,
    );

    const cardButtons = getByTestId('cardButtons');
    expect(cardButtons).toBeDefined();

  });
});
