import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "../component/home/home/Home";
import Register from "../component/register/Register";
import Login from "../component/login/Login";
import MyHouse from "../component/myHouse/MyHouse";
import AddHouse from "../component/addHouse/AddHouse";
import ManageBooking from "../component/manageBooking/ManageBooking";

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
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/myHouse',
                element: <MyHouse></MyHouse>
            },
            {
                path:'/addHouse',
                element: <AddHouse></AddHouse>
            },
            {
                path:'/manageBooking',
                element: <ManageBooking></ManageBooking>
            }
                
        ]
    }
])
export default router;