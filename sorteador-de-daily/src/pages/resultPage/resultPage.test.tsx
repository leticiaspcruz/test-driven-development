import React from 'react';
import { screen, render } from '@testing-library/react';
import useCollaboratorsList from '../../hooks/collaboratorsList';
import useShuffle from '../../hooks/shuffle';
import ResultPage from './resultPage';

jest.mock('../../hooks/collaboratorsList');
jest.mock('../../hooks/shuffle');

describe('test ResultPage', () => {
    test('render the daily host', () => {
        const collaborators = ['Leticia', 'Argel', 'Vitor', 'Bruna', 'Alanis', 'Wiu'];
        const shuffledCollaborators = [ 'Wiu', 'Vitor', 'Leticia', 'Argel', 'Alanis', 'Bruna'];
        (useCollaboratorsList as jest.Mock).mockReturnValueOnce({ collaborators: collaborators });
        (useShuffle as jest.Mock).mockReturnValueOnce(shuffledCollaborators);

        render(<ResultPage />)

        const items = screen.queryAllByRole('listitem');
        expect(items).toHaveLength(shuffledCollaborators.length);
    });
});