import Home from "../pages/Home/Home.jsx";
import './LayoutStyles.sass'

function Layout(){
    return (
        <>
            <div className='container-fluid d-flex align-items-center justify-content-center' id='my-container'>
                <div>
                    <Home/>
                </div>
            </div>
        </>
    )
}

export default Layout;