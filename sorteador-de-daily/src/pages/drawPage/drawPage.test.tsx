import React from 'react';
import { render } from '@testing-library/react';
import DrawPage from './drawPage';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
  };
});

describe('test DrawPage', () => {
    test('render page correctly', () => {
        const { container } = render(<DrawPage />);
        expect(container).toMatchSnapshot();
    });
});