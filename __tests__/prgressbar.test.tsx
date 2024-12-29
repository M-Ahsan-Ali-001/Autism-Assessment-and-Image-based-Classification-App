import React from 'react';
import { render } from '@testing-library/react-native';
import ProgressBar from '../src/components/ProgressBar';

describe('ProgressBar', () => {
  it('renders correctly with select = 1', () => {
    const { getByTestId, getAllByTestId } = render(<ProgressBar select={1} />);

    const container = getByTestId('container');
    const cubes = getAllByTestId('cube');
    const circles = getAllByTestId('circle');

    expect(container).toBeDefined();
    expect(cubes).toHaveLength(1);
    expect(circles).toHaveLength(2);
  });

  it('renders correctly with select = 2', () => {
    const { getByTestId, getAllByTestId } = render(<ProgressBar select={2} />);

    const container = getByTestId('container');
    const cubes = getAllByTestId('cube');
    const circles = getAllByTestId('circle');

    expect(container).toBeDefined();
    expect(cubes).toHaveLength(1);
    expect(circles).toHaveLength(2);
  });

  it('renders correctly with select = 3', () => {
    const { getByTestId, getAllByTestId } = render(<ProgressBar select={3} />);

    const container = getByTestId('container');
    const cubes = getAllByTestId('cube');
    const circles = getAllByTestId('circle');

    expect(container).toBeDefined();
    expect(cubes).toHaveLength(1);
    expect(circles).toHaveLength(2);
  });

  it('renders nothing with invalid select value', () => {
    const { queryByTestId } = render(<ProgressBar select={4} />);

    const container = queryByTestId('container');

    expect(container).toBeDefined();
  });
});
