declare module 'react-router-dom' {
    export function useNavigate(): (path: string, options?: { replace?: boolean }) => void;
  }