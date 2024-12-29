import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import AQ_10_Get from '../src/components/AQ_10_Get';

describe('AQ_10_Get Component', () => {
  it('renders correctly', () => {
    const {getByTestId} = render(<AQ_10_Get />);

    const button = getByTestId('container');
    expect(button).toBeDefined;
  });
});
