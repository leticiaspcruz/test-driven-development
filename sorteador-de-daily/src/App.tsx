import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DrawPage from './pages/drawPage/drawPage';
import ResultPage from './pages/resultPage/resultPage';
import { CollaboratorProvider } from './context/collaboratorContext';

const App: React.FC = () => {
    return (
        <CollaboratorProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<DrawPage />} />
                    <Route path="/sorteio" element={<ResultPage />} />
                </Routes>
            </BrowserRouter>
        </CollaboratorProvider>
    );
}

export default App;
