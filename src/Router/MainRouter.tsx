import {createBrowserRouter} from  "react-router-dom"
import Layout from "../Component/Common/Layout"
import HomeScreen from "../Pages/HomeScreen"
import SignIn from "../Pages/SignIn"
import SignUp from "../Pages/SignUp"
import PrivateRoute from "./privateRoute"


export const MainRouter  = createBrowserRouter(
    [
        {
            path:"/",
            element:<Layout/>,
            children:[
                {
                    index:true,
                    element:<PrivateRoute>
                        <HomeScreen/>
                    </PrivateRoute>
                },
                {
                    path:"/signin",
                    element:<SignIn/>
                },
                {
                    path:"/signup",
                    element:<SignUp/>
                },
            ]
        }
    ]
)