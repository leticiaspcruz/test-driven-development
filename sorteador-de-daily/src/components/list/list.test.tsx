import React from 'react';
import { render, screen } from '@testing-library/react';
import List from './list';
import useCollaboratorsList from '../../hooks/collaboratorsList';

jest.mock('../../hooks/collaboratorsList');

describe('test List component behavior', () => {
    test('the list must be empty', () => {
        (useCollaboratorsList as jest.Mock).mockReturnValueOnce({ collaborators: [] });

        render(<List />);

        const items = screen.queryAllByRole('listitem');
        expect(items).toHaveLength(0);
    });

    test('the list must be filled with the collaborators names', () => {
        const collaborators = ['Leticia', 'Argel', 'Vitor', 'Bruna', 'Alanis', 'Wiu'];
        (useCollaboratorsList as jest.Mock).mockReturnValueOnce({ collaborators });

        render(<List />);

        const items = screen.queryAllByRole('listitem');
        expect(items).toHaveLength(collaborators.length);
    });
});
