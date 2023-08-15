import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Draw from './draw';
import { useCollaboratorContext } from '../../context/collaboratorContext';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavigate,
  };
});

jest.mock('../../context/collaboratorContext', () => {
  return {
    useCollaboratorContext: jest.fn(),
  };
});

describe('test Draw component behavior', () => {
  test('collaborators are not enough to Draw', () => {
    (useCollaboratorContext as jest.Mock).mockReturnValue({ collaborators: [] });

    render(<Draw />);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  test('collaborators are enough to Draw', () => {
    const collaborators = ['Leticia', 'Argel', 'Vitor', 'Bruna', 'Alanis', 'Wiu'];
    (useCollaboratorContext as jest.Mock).mockReturnValue({ collaborators });

    render(<Draw />);

    const button = screen.getByRole('button');
    expect(button).not.toBeDisabled();
  });

  test('Draw was started', () => {
    const collaborators = ['Leticia', 'Argel', 'Vitor', 'Bruna', 'Alanis', 'Wiu'];
    (useCollaboratorContext as jest.Mock).mockReturnValue({ collaborators });

    render(<Draw />);

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/sorteio');
  });
});
