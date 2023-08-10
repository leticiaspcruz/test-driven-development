import { useState } from 'react';

interface ErrorMessageInterface {
    isDuplicate: boolean;
    validateName: (name: string, collaborators: string[]) => void;
}

const useErrorMessage = (): ErrorMessageInterface => {
    const [isDuplicate, setIsDuplicate] = useState(false);

    const validateName = (name: string, collaborators: string[]) => {
        const isNameDuplicate = collaborators.includes(name);
        setIsDuplicate(isNameDuplicate);

        if (isNameDuplicate) {
            setTimeout(() => {
                setIsDuplicate(false);
            }, 5000);
        };
    };

    return { isDuplicate, validateName };
};

export default useErrorMessage;
