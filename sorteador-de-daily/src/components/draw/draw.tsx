import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCollaboratorContext } from '../../context/collaboratorContext';
const Draw: React.FC = () => {
    const { collaborators } = useCollaboratorContext();
    const navigate = useNavigate();

    const onClick = () => {
        navigate('/sorteio');
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
    );
};

export default Draw;
