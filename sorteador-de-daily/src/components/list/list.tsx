import React from 'react';
import { useCollaboratorContext } from '../../context/collaboratorContext';

const List: React.FC = () => {
    const { collaborators } = useCollaboratorContext();

    return (
        <ul>
            {collaborators.map(collaborator => (
                <li key={collaborator}>{collaborator}</li>
            ))}
        </ul>
    );
};

export default List;
