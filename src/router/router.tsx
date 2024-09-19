import { createBrowserRouter } from 'react-router-dom'

import Home from '@/pages/Home'
import NotFoundPage from '@/pages/NotFoundPage';
import Start from '@/pages/Start';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <NotFoundPage/>
    },

    {
        path: "/start",
        element: <Start />,
    },
])

export default router;