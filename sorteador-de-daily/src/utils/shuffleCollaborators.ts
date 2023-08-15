export const shuffledCollaborators = ( collaborators:  string[]) => {
    const shuffledCollaborators = [...collaborators].sort(() => Math.random() - 0.5);

    return shuffledCollaborators;
};

export default shuffledCollaborators;