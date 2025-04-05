import React from 'react';
import BrowserRouter from './routes';
import { RouterProvider } from 'react-router-dom';

const App = () => {
  return (
    <>
        <RouterProvider router={BrowserRouter}/>
    </>
  )
}

export default App;