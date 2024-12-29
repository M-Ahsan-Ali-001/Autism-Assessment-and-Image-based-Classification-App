// __tests__/radioButtonIntro.test.tsx

import React from 'react';
import {render} from '@testing-library/react-native';
import RadioButtonIntro from '../src/components/RadioButtonIntro';

describe('RadioButtonIntro', () => {
  it('renders correctly with prop.nmb = 1', () => {
    const {getByTestId} = render(<RadioButtonIntro nmb={1} />);

    const radioButton = getByTestId('radioButton');

    expect(radioButton).toBeDefined();
  });
});
