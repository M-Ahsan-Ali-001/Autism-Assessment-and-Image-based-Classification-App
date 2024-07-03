import React from 'react';
import { render } from '@testing-library/react-native';
import CardMenu from '../src/components/CardMenu';

describe('CardMenu', () => {
  it('renders main view with testID', () => {
    const { getByTestId } = render(
      <CardMenu
        imgNmb={1}
        // imgIcon={styles.indicatorLeft}
        textCard="Test Card"
        nvb={1}
        nav={{ navigate: jest.fn() }}
      />
    );

    const mainView = getByTestId('cardMenu');
    expect(mainView).toBeDefined();
  });
});
