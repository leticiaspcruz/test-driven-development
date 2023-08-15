import React from 'react';
import { render } from '@testing-library/react';
import DrawPage from './drawPage';
import { CollaboratorProvider } from '../../context/collaboratorContext';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
  };
});

describe('test DrawPage', () => {
    test('render page correctly', () => {
        const { container } = render(<CollaboratorProvider><DrawPage /></CollaboratorProvider>);
        expect(container).toMatchSnapshot();
    });
});