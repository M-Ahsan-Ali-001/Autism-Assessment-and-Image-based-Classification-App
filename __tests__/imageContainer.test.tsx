import React from 'react';
import {render} from '@testing-library/react-native';
import ImageButtonDashboard from '../src/components/ImageButtonDashboard';

describe('ImageButtonDashboard', () => {
  it('renders correctly with nmb = 1', () => {
    const {getByTestId} = render(
      <ImageButtonDashboard nmb={1} styl={{width: 50, height: 50}} />,
    );

    const imageContainer = getByTestId('imageContainer');
    const imageComponent = getByTestId('imageComponent');

    expect(imageContainer).toBeDefined();
    expect(imageComponent).toBeDefined();
  });
});

describe('ImageButtonDashboard', () => {
  it('renders correctly with nmb = 2', () => {
    const {getByTestId} = render(
      <ImageButtonDashboard nmb={2} styl={{width: 50, height: 50}} />,
    );

    const imageContainer = getByTestId('imageContainer');
    const imageComponent = getByTestId('imageComponent');

    expect(imageContainer).toBeDefined();
    expect(imageComponent).toBeDefined();
  });
});

describe('ImageButtonDashboard', () => {
  it('renders correctly with nmb = 3', () => {
    const {getByTestId} = render(
      <ImageButtonDashboard nmb={3} styl={{width: 50, height: 50}} />,
    );

    const imageContainer = getByTestId('imageContainer');
    const imageComponent = getByTestId('imageComponent');

    expect(imageContainer).toBeDefined();
    expect(imageComponent).toBeDefined();
  });
});
