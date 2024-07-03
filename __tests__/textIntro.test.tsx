import React from 'react';
import { render } from '@testing-library/react-native';
import TextIntroScreen from '../src/components/TextIntroScreen';

describe('TextIntroScreen', () => {
  it('renders correctly with given text', () => {
    const testText = 'Welcome to the App';
    const { getByText } = render(<TextIntroScreen tFooter={testText} />);

    const introTitle = getByText(testText);
    expect(introTitle).toBeDefined();
  });

});
