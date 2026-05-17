import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/home";
import { Layout } from "../shared/components/layout/layout";

export const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                element: <Home/>,
                path: "/"
            }
        ]
    }
]);