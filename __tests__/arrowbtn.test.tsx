import React from 'react';
import { render } from '@testing-library/react-native';
import ArrowButton from '../src/components/ArrowButton';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  Reanimated.default.call = () => {};

  return Reanimated;
});

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('ArrowButton', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <ArrowButton navi={{ navigate: jest.fn() }} h={50} w={50} />
    );

    const button = getByTestId('arrowButton');
    expect(button).toBeTruthy();
  });
});
