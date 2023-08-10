import { useState } from 'react';

interface AddCollaboratorInterface {
    collaborators: string[];
    addCollaborator: (name: string) => void;
}

const useAddCollaborator = (): AddCollaboratorInterface => {
    const [collaborators, setCollaborators] = useState<string[]>([]);

    const addCollaborator = (name: string) => {
        setCollaborators([...collaborators, name]);
    };

    return { collaborators, addCollaborator };
};

export default useAddCollaborator;
