import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "../component/home/home/Home";
import Register from "../component/register/Register";
import Login from "../component/login/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/',
                element: <Login></Login>
            }
        ]
    }
])
export default router;