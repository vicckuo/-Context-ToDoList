import { Route, Routes, HashRouter } from 'react-router-dom'

import ToDoPage from './ToDoPage/ToDoPage'

export default function Router() {
    return (
        <HashRouter>
            <Routes>
                <Route exact path="/" element={<ToDoPage />} />
            </Routes>
        </HashRouter>
    )
}