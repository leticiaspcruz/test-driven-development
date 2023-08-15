import shuffledCollaborators from '../utils/shuffleCollaborators';

export const useShuffle = ( collaborators:  string[]) => {
    const shuffleCollaborators = shuffledCollaborators(collaborators);

    return shuffleCollaborators;
};

export default useShuffle;