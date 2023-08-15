import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCollaboratorsList from '../../hooks/collaboratorsList';

const Draw = () => {

    const { collaborators } = useCollaboratorsList();
    const navegate = useNavigate();

    const onClick = () => {
        navegate('/sorteio');
    };

    return (
        <div>
            <button 
                disabled={collaborators.length < 3} 
                onClick={onClick}
            >
                Iniciar sorteio
            </button>
        </div>
    )
};

export default Draw;