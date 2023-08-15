import shuffleCollaborators from '../utils/shuffleCollaborators';

export const useShuffle = ( collaborators:  string[]) => {
    const shuffledCollaborators = shuffleCollaborators(collaborators);

    return shuffledCollaborators;
};

export default useShuffle;