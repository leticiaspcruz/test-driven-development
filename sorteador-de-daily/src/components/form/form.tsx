import React, { useState, useRef } from 'react';
import useAddCollaborator from '../../hooks/addCollaborator';
import useErrorMessage from '../../hooks/errorMessage';

const Form = () => {
    const { collaborators, addCollaborator } = useAddCollaborator();
    const { isDuplicate, validateName } = useErrorMessage();
    const [collaborator, setCollaborator] = useState('');
    const inputRef = useRef(null);

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCollaborator(event.target.value);
        validateName(event.target.value, collaborators);
    };

    const submitForm = () => {
        if (!isDuplicate && collaborator) {
            addCollaborator(collaborator);
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
                onChange={onChangeInput} />
            <button 
                disabled={!collaborator || isDuplicate}>Adicionar</button>
            {isDuplicate && <p role="alert" style={{ color: 'red' }}>Nomes duplicados não são permitidos!</p>}
        </form>
    )
};

export default Form;