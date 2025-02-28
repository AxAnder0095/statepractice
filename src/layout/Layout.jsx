import './LayoutStyles.sass'
import Navbar from "../components/Navbar/Navbar.jsx";
import {Outlet} from "react-router-dom";

function Layout(){
    return (
        <>
            <div className='container-fluid d-flex justify-content-center align-items-center' id='my-container'>
                <div>
                    <div>
                        <Navbar/>
                    </div>
                    <div className='' id='home-containers'>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout;