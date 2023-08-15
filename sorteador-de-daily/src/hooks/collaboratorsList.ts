import { useState } from 'react';

const useCollaboratorsList = () => {
  const [collaborators, setCollaborators] = useState<string[]>([]);
  
  return  {collaborators, setCollaborators};
};

export default useCollaboratorsList;
