import React from 'react';
import { useCollaboratorContext } from '../../context/collaboratorContext';
import { useShuffle } from '../../hooks/shuffle';

const ResultPage = () => {
    const { collaborators } = useCollaboratorContext();

    const shuffledCollaborators = useShuffle(collaborators);

    return (
        <section>
            <ul>
                {shuffledCollaborators.map(collaborator => <li key={collaborator}>{collaborator}</li>)}
            </ul>
        </section>
    )
};

export default ResultPage;
