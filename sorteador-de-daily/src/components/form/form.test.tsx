import React from 'react';
import { fireEvent, render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './form';

test('if input is empty new participants cannot be added', () => {
    render(<Form />);
    const input = screen.getByPlaceholderText('Insira os nomes dos colaboradores');
    const button = screen.getByRole('button');

    expect(input).toBeInTheDocument();
    expect(button).toBeDisabled();
});

test('add collaborator when input is filled', () => {
    render(<Form />);
    const input = screen.getByPlaceholderText('Insira os nomes dos colaboradores');
    const button = screen.getByRole('button');

    fireEvent.change(input, {
        target: {
            value: 'Letícia'
        }
    });

    fireEvent.click(button)

    expect(input).not.toHaveFocus();
    expect(input).toHaveValue("");
});

test('duplicate names are not allowed', () => {
    render(<Form />);
    const input = screen.getByPlaceholderText('Insira os nomes dos colaboradores');
    const button = screen.getByRole('button');
    
    userEvent.type(input, 'Letícia');
    fireEvent.click(button);
    userEvent.type(input, 'Letícia');
    fireEvent.click(button);

    const errorMessage = screen.getByRole('alert');
    expect(errorMessage).toHaveTextContent('Nomes duplicados não são permitidos!');
});

test('the error message have to disappear after X seconds', () => {
    jest.useFakeTimers();
    render(<Form />);
    const input = screen.getByPlaceholderText('Insira os nomes dos colaboradores');
    const button = screen.getByRole('button');
    
    userEvent.type(input, 'Letícia');
    fireEvent.click(button);
    userEvent.type(input, 'Letícia');
    fireEvent.click(button);

    let errorMessage = screen.queryByRole('alert');
    expect(errorMessage).toHaveTextContent('Nomes duplicados não são permitidos!');
    
    act(() => {
        jest.advanceTimersByTime(5000);
    });

    act(() => {
        jest.runAllTimers();
    });

    errorMessage = screen.queryByRole('alert');
    expect(errorMessage).toBeNull();
});