import React, { useState, useRef } from 'react';
import useErrorMessage from '../../hooks/errorMessage';
import { useCollaboratorContext } from '../../context/collaboratorContext';

const Form: React.FC = () => {
    const { collaborators, setCollaborators } = useCollaboratorContext(); 
    const { isDuplicate, validateName } = useErrorMessage();
    const [collaborator, setCollaborator] = useState('');
    const inputRef = useRef<HTMLInputElement | null>(null);

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCollaborator(event.target.value);
        validateName(event.target.value, collaborators);
    };

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!isDuplicate && collaborator) {
            setCollaborators([...collaborators, collaborator]);
            setCollaborator('');
        }
    };

    return (
        <form onSubmit={submitForm}>
            <input
                ref={inputRef}
                type="text"
                placeholder="Insira os nomes dos colaboradores"
                value={collaborator}
                onChange={onChangeInput}
            />
            <button disabled={!collaborator || isDuplicate}>
                Adicionar
            </button>
            {isDuplicate && (
                <p role="alert" style={{ color: 'red' }}>
                    Nomes duplicados não são permitidos!
                </p>
            )}
        </form>
    );
};

export default Form;
