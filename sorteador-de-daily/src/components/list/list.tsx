import React from 'react';
import useCollaboratorsList from '../../hooks/collaboratorsList';

const List = () => {
    const { collaborators } = useCollaboratorsList();
    return (
        <ul>
            {collaborators.map(collaborator => <li key={collaborator}>{collaborator}</li>)}
        </ul>
    )
};

export default List;