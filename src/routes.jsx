import React, {lazy} from 'react'
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import('./pages/Home'))

const BrowserRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <React.Suspense>
                <Home/>
            </React.Suspense>
        )
    },
])

export default BrowserRouter;