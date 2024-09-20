import { createBrowserRouter } from 'react-router-dom'

import Home from '@/pages/Home'
import NotFoundPage from '@/pages/NotFoundPage';
import Start from '@/pages/Start';
import Play from '@/pages/Play';

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

    {
        path: "/play",
        element: <Play />,
    },
])

export default router;