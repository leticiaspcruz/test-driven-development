export const shuffledCollaborators = (collaborators: string[]) => {
    const shuffledCollaborators = [...collaborators];

    for (let i = shuffledCollaborators.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledCollaborators[i], shuffledCollaborators[j]] = [shuffledCollaborators[j], shuffledCollaborators[i]];
    }

    return shuffledCollaborators;
};

export default shuffledCollaborators;
