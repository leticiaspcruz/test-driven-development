import shuffleCollaborators from './shuffleCollaborators';

describe('test shuffleCollaborators function', () => {
    test('validate shuffled array', () => {
        const collaborators = ['Leticia', 'Argel', 'Vitor', 'Bruna', 'Alanis', 'Wiu'];

        const shuffledCollaborators = shuffleCollaborators(collaborators);
        expect(shuffledCollaborators).not.toEqual(collaborators);
    })
});