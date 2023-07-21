import {createBrowserRouter} from  "react-router-dom"
import Layout from "../Component/Common/Layout"
import HomeScreen from "../Pages/HomeScreen"
import SignIn from "../Pages/SignIn"
import SignUp from "../Pages/SignUp"


export const MainRouter  = createBrowserRouter(
    [
        {
            path:"/",
            element:<Layout/>,
            children:[
                {
                    index:true,
                    element:<HomeScreen/>
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