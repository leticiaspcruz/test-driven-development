import React from 'react';
import { screen, render } from '@testing-library/react';
import { CollaboratorProvider } from '../../context/collaboratorContext';
import { useCollaboratorContext } from '../../context/collaboratorContext';
import useShuffle from '../../hooks/shuffle';
import ResultPage from './resultPage';

jest.mock('../../context/collaboratorContext');
jest.mock('../../hooks/shuffle');

describe('test ResultPage', () => {
    test('render the daily host', () => {
        const collaborators = ['Leticia', 'Argel', 'Vitor', 'Bruna', 'Alanis', 'Wiu'];
        const shuffledCollaborators = [ 'Wiu', 'Vitor', 'Leticia', 'Argel', 'Alanis', 'Bruna'];
        (useCollaboratorContext as jest.Mock).mockReturnValueOnce({ collaborators: collaborators });
        (useShuffle as jest.Mock).mockReturnValueOnce(shuffledCollaborators);

        render(<CollaboratorProvider><ResultPage /></CollaboratorProvider>)

        const items = screen.queryAllByRole('listitem');
        expect(items).not.toEqual(collaborators);
    });
});