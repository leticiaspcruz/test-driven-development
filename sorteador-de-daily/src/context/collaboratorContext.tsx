import React, { createContext, useContext, useState, Dispatch, SetStateAction, ReactNode } from 'react';

interface CollaboratorContextType {
    collaborators: string[];
    setCollaborators: Dispatch<SetStateAction<string[]>>;
}

const CollaboratorContext = createContext<CollaboratorContextType | undefined>(undefined);

interface CollaboratorProviderProps {
    children: ReactNode;
}

export const CollaboratorProvider: React.FC<CollaboratorProviderProps> = ({ children }) => {
    const [collaborators, setCollaborators] = useState<string[]>([]);

    return (
        <CollaboratorContext.Provider value={{ collaborators, setCollaborators }}>
            {children}
        </CollaboratorContext.Provider>
    );
};

export const useCollaboratorContext = (): CollaboratorContextType => {
    const context = useContext(CollaboratorContext);
    if (!context) {
        throw new Error('useCollaboratorContext must be used within a CollaboratorProvider');
    }
    return context;
};
