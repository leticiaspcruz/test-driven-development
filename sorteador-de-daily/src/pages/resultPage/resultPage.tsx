import React from 'react';
import useCollaboratorsList from '../../hooks/collaboratorsList';
import useShuffle from '../../hooks/shuffle';

const ResultPage = () => {
    const { collaborators } = useCollaboratorsList();

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