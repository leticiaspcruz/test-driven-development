import React from 'react';
import { render } from '@testing-library/react';
import RafflePage from './rafflePage';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
  };
});

describe('test RafflePage', () => {
    test('render page correctly', () => {
        const { container } = render(<RafflePage />);
        expect(container).toMatchSnapshot();
    });
});