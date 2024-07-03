import React from 'react';
import { render } from '@testing-library/react-native';
import AuthenticationButton from '../src/components/AuthenticationButton';

describe('AuthenticationButton', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <AuthenticationButton buttonText="Sign In" onPress={() => {}} />
    );

    const authBtn = getByTestId('AuthBtn');
    expect(authBtn).toBeDefined();
  });
});