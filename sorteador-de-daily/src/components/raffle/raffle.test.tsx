import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Raffle from './raffle';
import useCollaboratorsList from '../../hooks/collaboratorsList';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
  };
});

jest.mock('../../hooks/collaboratorsList');

describe('test Raffle component behavior', () => {
  test('collaborators are not enough to raffle', () => {
    (useCollaboratorsList as jest.Mock).mockReturnValueOnce({ collaborators: [] });

    render(<Raffle />);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  test('collaborators are enough to raffle', () => {
    const collaborators = ['Leticia', 'Argel', 'Vitor', 'Bruna', 'Alanis', 'Wiu'];
    (useCollaboratorsList as jest.Mock).mockReturnValueOnce({ collaborators });

    render(<Raffle />);

    const button = screen.getByRole('button');
    expect(button).not.toBeDisabled();
  });

  test('raffle was started', () => {
    const collaborators = ['Leticia', 'Argel', 'Vitor', 'Bruna', 'Alanis', 'Wiu'];
    (useCollaboratorsList as jest.Mock).mockReturnValueOnce({ collaborators });

    render(<Raffle />);

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/sorteio');
  });
});