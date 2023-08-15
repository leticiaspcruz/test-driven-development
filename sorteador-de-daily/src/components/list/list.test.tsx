import React from 'react';
import { render, screen } from '@testing-library/react';
import List from './list';
import { useCollaboratorContext } from '../../context/collaboratorContext';

jest.mock('../../context/collaboratorContext');

describe('test List component behavior', () => {
    test('the list must be empty', () => {
        (useCollaboratorContext as jest.Mock).mockReturnValue({ collaborators: [] });

        render(<List />);

        const items = screen.queryAllByRole('listitem');
        expect(items).toHaveLength(0);
    });

    test('the list must be filled with the collaborators names', () => {
        const collaborators = ['Leticia', 'Argel', 'Vitor', 'Bruna', 'Alanis', 'Wiu'];
        (useCollaboratorContext as jest.Mock).mockReturnValue({ collaborators });

        render(<List />);

        const items = screen.queryAllByRole('listitem');
        expect(items).toHaveLength(collaborators.length);
    });
});
