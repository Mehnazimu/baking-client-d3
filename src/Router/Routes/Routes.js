
import { createBrowserRouter } from "react-router-dom";
import ItemDetails from "../../Items/ItemDetails/ItemDetails";

import Items from "../../Items/Items/Items";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Reviews from "../../Pages/Reviews/Reviews/Reviews";
import SignUp from "../../Pages/SignUp/SignUp";


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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/items',
                element: <Items></Items>
            },

            {
                path: '/items/:id',
                element: <ItemDetails></ItemDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/items/${params.id}`)
            },
            {
                path: '/reviews',
                element: <Reviews></Reviews>

            }
        ]

    }
]);

export default router;