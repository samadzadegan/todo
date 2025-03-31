import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
     {
        path: '/',
        element: <h2>Home Page</h2>
     },
     {
        path: '/todos',
        element: <h2>Todos Page</h2>
     },
     {
        path: '/about',
        element: <h2>About  Page</h2>
     },
]);

export default router;