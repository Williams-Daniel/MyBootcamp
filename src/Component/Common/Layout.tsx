import { Outlet } from "react-router-dom"
import Header from "../Static/Header"
import Footer from "../Static/Footer"



const Layout = ()=>{
    return(
        <div>
            <Outlet/>
        
        </div>
    )
}

export default Layout