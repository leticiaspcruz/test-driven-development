import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Draw from './draw';
import useCollaboratorsList from '../../hooks/collaboratorsList';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
  };
});

jest.mock('../../hooks/collaboratorsList');

describe('test Draw component behavior', () => {
  test('collaborators are not enough to Draw', () => {
    (useCollaboratorsList as jest.Mock).mockReturnValueOnce({ collaborators: [] });

    render(<Draw />);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  test('collaborators are enough to Draw', () => {
    const collaborators = ['Leticia', 'Argel', 'Vitor', 'Bruna', 'Alanis', 'Wiu'];
    (useCollaboratorsList as jest.Mock).mockReturnValueOnce({ collaborators });

    render(<Draw />);

    const button = screen.getByRole('button');
    expect(button).not.toBeDisabled();
  });

  test('Draw was started', () => {
    const collaborators = ['Leticia', 'Argel', 'Vitor', 'Bruna', 'Alanis', 'Wiu'];
    (useCollaboratorsList as jest.Mock).mockReturnValueOnce({ collaborators });

    render(<Draw />);

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/sorteio');
  });
});