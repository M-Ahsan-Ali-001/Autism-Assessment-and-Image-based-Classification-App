import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CustomPopup from '../src/components/CustomPopUp';

describe('CustomPopup Component', () => {
  it('renders correctly', () => {
    const { getByTestId, getByText } = render(
      <CustomPopup
        visible={true}
        label="Result"
        message="This is a test message"
        onClose={() => {}}
        imageCheck="1"
        urlcheck="1"
      />
    );

    const modal = getByTestId('modal');
    const heading = getByText('Result');
    const messageText = getByText('This is a test message');
    const closeButton = getByText('Close');
    const urlLink = getByText('Go to AQ_10');

    expect(modal).toBeTruthy();
    expect(heading).toBeTruthy();
    expect(messageText).toBeTruthy();
    expect(closeButton).toBeTruthy();
    expect(urlLink).toBeTruthy();
  });

  it('calls onClose handler when Close button is pressed', () => {
    const onCloseMock = jest.fn();
    const { getByText } = render(
      <CustomPopup
        visible={true}
        label="Result"
        message="This is a test message"
        onClose={onCloseMock}
        imageCheck="1"
        urlcheck="1"
      />
    );

    const closeButton = getByText('Close');
    fireEvent.press(closeButton);

    expect(onCloseMock).toHaveBeenCalled();
  });

  // Add more tests as needed for different scenarios and props
});
